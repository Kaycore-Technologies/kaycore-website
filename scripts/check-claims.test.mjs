/**
 * Tests for check-claims.mjs (KH-25 / D12). Run: npm test
 *
 * COVERAGE MAP (finding -> test name that guards it)
 *  - every banned variant fires; every rule id has a case          -> "each banned variant is caught, and every rule has a case"
 *  - legitimate text does not fire (text-2xl, 1.2x, 99.25, 30 s)   -> "legitimate text does not fire"
 *  - the "under 30 seconds" figures in KayScribeContent are NOT
 *    caught (known gap, tracked in the KH-25 report)               -> "legitimate text does not fire"
 *  - a clean tree passes                                           -> "a clean tree has no violations"
 *  - certification rules are site-wide; numeric rules and bare
 *    HIPAA are KayHealth-only (app/kayhealth, components/kayhealth,
 *    lib)                                                          -> "scope: certification rules site-wide, numeric rules KayHealth-only"
 *  - text under lib/ (lib/seo.ts metadata) is scanned              -> "lib/ is scanned (metadata helpers)"
 *  - text files under public/ are scanned; svg path data is not    -> "public text files are scanned, svg path data is not"
 *  - .mdx files are scanned                                        -> "mdx files are scanned"
 *  - &nbsp; / &#160; / {' '} / <br/> / zero-width evasions         -> "normalisation: invisible separators cannot hide a claim"
 *  - SOC II, SOC-2                                                 -> each banned variant is caught ...
 *  - reported line numbers (also after normalisation)              -> "violations report the correct line"
 *  - allowlist suppresses only its file+rule and exact count       -> "allowlist suppresses ...", "allowlist count: ..."
 *  - allowlist needs reason (min length), count, known rule        -> "allowlist entries are validated"
 *  - CLI exit codes                                                -> "CLI exit codes"
 *
 * Not covered: PDFs and images are not scanned; "under 30 seconds"-style
 * figures are outside D12 and not matched.
 */
import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { scan, RULES, MIN_REASON } from './check-claims.mjs';

const SCRIPT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'check-claims.mjs');
const made = [];
after(() => {
  for (const d of made) fs.rmSync(d, { recursive: true, force: true });
});

function tree(files, allow) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'claims-'));
  made.push(root);
  for (const [rel, body] of Object.entries(files)) {
    const full = path.join(root, rel);
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, body);
  }
  if (allow) {
    fs.mkdirSync(path.join(root, 'scripts'), { recursive: true });
    fs.writeFileSync(path.join(root, 'scripts', 'check-claims.allowlist.json'), JSON.stringify({ allow }));
  }
  return root;
}

const rulesHit = (root) => scan(root).violations.map((v) => v.rule);
const REASON = 'A justified reason that is long enough.';
// KayHealth path so that every rule, scoped or not, is active.
const KH = 'app/kayhealth/x.tsx';

test('each banned variant is caught, and every rule has a case', () => {
  const cases = [
    ['HIPAA Compliant', 'hipaa-compliant'],
    ['hipaa-compliant', 'hipaa-compliant'],
    ['HIPAA\n  compliant', 'hipaa-compliant'],
    ['HIPAA', 'hipaa-bare'],
    ['SOC 2 Type II', 'soc2'],
    ['SOC2', 'soc2'],
    ['soc-2', 'soc2'],
    ['SOC II', 'soc2'],
    ['FDA 21 CFR Part 11', 'fda-21-cfr'],
    ['21CFR', 'fda-21-cfr'],
    ['Part 11', 'part-11'],
    ['99.2% accuracy', '99.2'],
    ['70% less burnout', '70-percent-less'],
    ['70%', '70-percent-bare'],
    ['Less Burnout', 'less-burnout'],
    ['2x faster', '2x'],
    ['<div>2x</div>', '2x'],
    ['under 3 minutes', 'under-3-min'],
    ['Under 3 min', 'under-3-min'],
    ['&lt;3min', 'lt-3-min'],
    ['<3 min', 'lt-3-min'],
    ['Physician approved', 'physician-approved'],
    ['Physician-approved', 'physician-approved'],
  ];
  assert.deepEqual(
    new Set(cases.map((c) => c[1])),
    new Set(RULES.map((r) => r.id)),
    'every rule id needs at least one case',
  );
  for (const [text, rule] of cases) {
    const root = tree({ [KH]: `export const x = <p>${text}</p>;` });
    assert.ok(rulesHit(root).includes(rule), `"${text}" should trigger ${rule}`);
  }
});

test('legitimate text does not fire', () => {
  const clean = [
    '<h1 className="text-2xl md:text-2xl">Hello</h1>',
    '<div className="w-2xl max-w-2xl grid-cols-2">',
    'version 1.2x, 12x, 99.25, v99.2.1',
    'Under 30 seconds, within 30 min, less than 30 minutes',
    'Part 1 of 12, page 110, 2 hours, 2 x 2 grid',
    '99.2.1 is a version',
    'SOC 22, social 2x4, soc ia',
    '170% growth, 70 percent',
    'We reduce physician burden; physicians approve each note.',
  ];
  for (const text of clean) {
    const root = tree({ [KH]: `export const x = <p>${text}</p>;` });
    assert.deepEqual(rulesHit(root), [], `"${text}" must not fire`);
  }
});

test('a clean tree has no violations', () => {
  const root = tree({
    'app/kayhealth/page.tsx': 'export const d = "KayHealth brings AI-powered solutions to healthcare.";',
    'components/kayhealth/Cta.tsx': 'export const C = () => <div className="text-2xl">Talk to us</div>;',
    'public/llms.txt': '# Kaycore\nWe test AI.',
  });
  const r = scan(root);
  assert.deepEqual(r.violations, []);
  assert.deepEqual(r.errors, []);
  assert.equal(r.scanned, 3);
});

test('scope: certification rules site-wide, numeric rules KayHealth-only', () => {
  const body = 'HIPAA Compliant; SOC 2 Type II; 21 CFR Part 11; Physician approved; 2x; 70% less burnout; 99.2%; under 3 minutes; HIPAA';
  const numeric = ['2x', '70-percent-less', '70-percent-bare', 'less-burnout', '99.2', 'under-3-min', 'hipaa-bare'];
  const cert = ['hipaa-compliant', 'soc2', 'fda-21-cfr', 'part-11', 'physician-approved'];
  for (const where of ['app/about/x.tsx', 'content/blog.tsx', 'components/Foo.tsx']) {
    const hit = new Set(rulesHit(tree({ [where]: body })));
    for (const r of cert) assert.ok(hit.has(r), `${r} must fire in ${where}`);
    for (const r of numeric) assert.ok(!hit.has(r), `${r} must NOT fire in ${where}`);
  }
  for (const where of ['app/kayhealth/x.tsx', 'components/kayhealth/x.tsx', 'lib/x.ts']) {
    const hit = new Set(rulesHit(tree({ [where]: body })));
    for (const r of [...cert, ...numeric]) assert.ok(hit.has(r), `${r} must fire in ${where}`);
  }
});

test('lib/ is scanned (metadata helpers)', () => {
  const root = tree({ 'lib/seo.ts': "export const d = 'KayHealth. HIPAA compliant. 99.2% accurate.';" });
  assert.deepEqual(rulesHit(root).sort(), ['99.2', 'hipaa-bare', 'hipaa-compliant']);
});

test('public text files are scanned, svg path data is not', () => {
  const root = tree({
    'public/llms.txt': 'KayHealth is HIPAA compliant.',
    'public/llms-full.txt': 'SOC 2 Type II',
    'public/a.svg': '<svg><path d="M99.2 20 L70 1 2x"/></svg>',
    'public/b.svg': '<svg><title>HIPAA Compliant</title></svg>',
  });
  assert.deepEqual(
    scan(root).violations.map((x) => x.file).sort(),
    ['public/b.svg', 'public/llms-full.txt', 'public/llms.txt'],
  );
});

test('mdx files are scanned', () => {
  assert.deepEqual(rulesHit(tree({ 'content/post.mdx': 'We are SOC 2 certified.' })), ['soc2']);
});

test('normalisation: invisible separators cannot hide a claim', () => {
  const evasions = [
    'HIPAA&nbsp;Compliant',
    'HIPAA&#160;Compliant',
    "HIPAA{' '}Compliant",
    'HIPAA{" "}Compliant',
    'HIPAA<br/>Compliant',
    'HIPAA<br />Compliant',
    'HIPAA​Compliant',
    'HIPAA‍Compliant',
    'HIPAA﻿Compliant',
    'SOC&nbsp;2',
    'SOC​2',
    'Physician&nbsp;approved',
  ];
  for (const text of evasions) {
    const root = tree({ 'app/page.tsx': `export const x = <p>${text}</p>;` });
    assert.equal(scan(root).violations.length, 1, `"${JSON.stringify(text)}" must be caught`);
  }
});

test('violations report the correct line', () => {
  assert.equal(scan(tree({ 'app/page.tsx': 'a\nb\nc <p>HIPAA Compliant</p>\n' })).violations[0].line, 3);
  assert.equal(
    scan(tree({ 'app/page.tsx': "a{' '}\nb<br/>\nc&nbsp;\n<p>HIPAA Compliant</p>" })).violations[0].line,
    4,
  );
});

test('allowlist suppresses only its file and rule', () => {
  const files = { 'content/a.tsx': 'SOC 2 Type II', 'content/b.tsx': 'SOC 2 Type II' };
  const r = scan(tree(files, [{ file: 'content/a.tsx', rule: 'soc2', count: 1, reason: REASON }]));
  assert.deepEqual(r.errors, []);
  assert.deepEqual(r.violations.map((v) => v.file), ['content/b.tsx']);
});

test('allowlist count: a NEW claim in an allowlisted file is caught, and so is a removed one', () => {
  const allow = [{ file: 'content/a.tsx', rule: 'soc2', count: 2, reason: REASON }];
  const exact = scan(tree({ 'content/a.tsx': 'SOC 2 here. And SOC 2 there.' }, allow));
  assert.deepEqual(exact.errors, []);
  assert.deepEqual(exact.violations, []);
  const more = scan(tree({ 'content/a.tsx': 'SOC 2 here. SOC 2 there. Kaycore is SOC 2 Type II certified.' }, allow));
  assert.ok(more.errors.some((e) => /allows 2 match.*found 3/.test(e)), more.errors.join('|'));
  const fewer = scan(tree({ 'content/a.tsx': 'Only one SOC 2 mention.' }, allow));
  assert.ok(fewer.errors.some((e) => /allows 2 match.*found 1/.test(e)), fewer.errors.join('|'));
  const none = scan(tree({ 'content/a.tsx': 'clean' }, allow));
  assert.ok(none.errors.some((e) => /matches nothing/.test(e)));
});

test('allowlist entries are validated', () => {
  const f = { 'content/a.tsx': 'SOC 2' };
  const bad = (entry) => scan(tree(f, [entry])).errors.join('|');
  assert.match(bad({ file: 'content/a.tsx', rule: 'soc2', count: 1 }), /reason/);
  assert.match(bad({ file: 'content/a.tsx', rule: 'soc2', count: 1, reason: 'x'.repeat(MIN_REASON - 1) }), /reason/);
  assert.doesNotMatch(bad({ file: 'content/a.tsx', rule: 'soc2', count: 1, reason: 'x'.repeat(MIN_REASON) }), /reason/);
  assert.match(bad({ file: 'content/a.tsx', rule: 'soc2', reason: REASON }), /count/);
  assert.match(bad({ file: 'content/a.tsx', rule: 'soc2', count: 0, reason: REASON }), /count/);
  assert.match(bad({ file: 'content/a.tsx', rule: 'nope', count: 1, reason: REASON }), /unknown rule/);
});

test('CLI exit codes', () => {
  const run = (files) => spawnSync(process.execPath, [SCRIPT, tree(files)], { encoding: 'utf8' });
  const bad = run({ 'app/kayhealth/KayHealthContent.tsx': "label: 'HIPAA Compliant'" });
  assert.equal(bad.status, 1, `signal=${bad.signal} error=${bad.error}`);
  assert.match(bad.stderr, /KayHealthContent\.tsx:1 \[hipaa-compliant\]/);
  const good = run({ 'app/page.tsx': 'Hello' });
  assert.equal(good.status, 0, `signal=${good.signal} error=${good.error}`);
  assert.match(good.stdout, /check:claims OK/);
});
