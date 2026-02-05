export const companyStats = [
    { id: 1, label: 'Model Validations', value: 'Hundreds', suffix: '' },
    { id: 2, label: 'Known Regulatory Actions', value: 'Zero', suffix: '' },
    { id: 3, label: 'Failure Modes Identified', value: 'Thousands', suffix: '' },
    { id: 4, label: 'Compliance Partner', value: 'Trusted', suffix: '' },
];

export const globalOffices = [
    {
        city: 'New York',
        country: 'USA',
        address: '250 Vesey Street, New York, NY 10281',
        phone: '+1 (555) 123-4567',
        image: '/assets/images/generated/abstract_city_ny_1770256484125.png',
    },
    {
        city: 'London',
        country: 'UK',
        address: '1 Canada Square, Canary Wharf, London E14 5AB',
        phone: '+44 20 7946 0000',
        image: '/assets/images/generated/abstract_city_london_1770256502422.png',
    },
    {
        city: 'Singapore',
        country: 'Singapore',
        address: '10 Collyer Quay, Ocean Financial Centre, Singapore 049315',
        phone: '+65 6789 0123',
        image: '/assets/images/generated/abstract_city_singapore_1770256518266.png',
    },
];

export const services = [
    {
        id: 1,
        title: 'AI Quality & Risk Readiness Audit',
        slug: 'ai-quality-risk-audit',
        description: 'A comprehensive assessment of your AI systems against safety, security, and performance benchmarks. We identify "silent" failure modes before deployment.',
        image: '/assets/images/generated/service_audit_v2_1770256566497.png',
        targetAudience: 'CTOs & Product Leaders preparing for a major AI launch.',
        problemSolved: 'Uncertainty about whether the model is actually ready for production traffic and regulatory scrutiny.',
        testingScope: [
            'Data Leakage & Privacy Checks',
            'Adversarial Robustness Assessment',
            'Bias & Fairness Auditing',
            'Infrastructure Scalability Review'
        ],
        deliverables: [
            'Risk Severity Matrix (Critical/Major/Minor)',
            'Go/No-Go Deployment Recommendation',
            'Remediation Roadmap'
        ],
        engagementModel: '2-3 Week Intensive Sprint'
    },
    {
        id: 2,
        title: 'LLM & Generative AI Testing',
        slug: 'llm-generative-ai-testing',
        description: 'Specialized testing for non-deterministic models. We validate prompt robustness, hallucination rates, and resistance to adversarial attacks.',
        image: '/assets/images/generated/service_llm_v2_1770256581614.png',
        targetAudience: 'Teams building RAG apps, agents, or copilots.',
        problemSolved: 'Models hallucinating facts or being tricked into unsafe behaviors (jailbreaks).',
        testingScope: [
            'Prompt Injection & Jailbreak Testing',
            'Factuality & Grounding Verification (RAG)',
            'Tone & Brand Alignment',
            'Multilingual Performance'
        ],
        deliverables: [
            'Hallucination Rate Baseline',
            'Vulnerability Report (OWASP Top 10 for LLMs)',
            'Optimized System Prompts'
        ],
        engagementModel: 'Project-Based or Retainer'
    },
    {
        id: 3,
        title: 'AI QA Automation Frameworks',
        slug: 'ai-qa-automation',
        description: 'Custom-built automated testing pipelines that integrate with your CI/CD. Catch regression and drift with every model update.',
        image: '/assets/images/generated/service_automation_v3_1770256617139.png',
        targetAudience: 'Engineering teams scaling their AI operations (MLOps).',
        problemSolved: 'Manual testing is too slow and unrepeatable for frequent model updates.',
        testingScope: [
            'Regression Test Suite Implementation',
            'CI/CD Integration (GitHub Actions/Jenkins)',
            'Synthetic Data Generation for Eval',
            'Drift Detection Alerts'
        ],
        deliverables: [
            'Fully Dockerized Test Runner',
            'Custom Eval Dataset',
            'Dashboard for Quality Metrics'
        ],
        engagementModel: 'Build-Operate-Transfer'
    },
    {
        id: 4,
        title: 'AI-QE Retainers',
        slug: 'ai-qe-retainers',
        description: 'Ongoing quality engineering support. We act as your external AI risk department, ensuring continuous compliance and reliability.',
        image: '/assets/images/generated/service_retainer_v3_1770256633014.png',
        targetAudience: 'Enterprises needing constant oversight without hiring a full in-house safety team.',
        problemSolved: 'Keeping up with rapidly evolving models, attacks, and regulations (EU AI Act).',
        testingScope: [
            'Monthly Red-Teaming Exercises',
            'Quarterly Compliance Audits',
            'Incident Response for AI Failures',
            'Vendor Model Updates Evaluation'
        ],
        deliverables: [
            'Monthly Quality Assurance Reports',
            'Regulatory Compliance Artifacts',
            'On-Call Expert Access'
        ],
        engagementModel: 'Monthly Subscription (Fractional Leadership)'
    },
    {
        id: 5,
        title: 'Regulated & Healthcare AI QA',
        slug: 'regulated-healthcare-ai-qa',
        description: 'Validation support for high-risk clinical and financial systems. We ensure "zero-fail" reliability readiness for critical decision engines.',
        image: '/assets/images/generated/service_healthcare_v2_1770256668702.png',
        targetAudience: 'HealthTech, FinTech, and GovTech organizations.',
        problemSolved: 'Strict liability and high cost of failure in life-critical or financial applications.',
        testingScope: [
            'Clinical Safety Validation Support',
            'Algorithmic Explainability (XAI) Review',
            'HIPAA/GDPR Data Handling Checks',
            'Edge Case Stress Testing'
        ],
        deliverables: [
            'FDA/Regulatory Submission Readiness Artifacts',
            'Safety Safety Case Archives',
            'Explainability Documentation'
        ],
        engagementModel: 'Long-Term Partnership'
    }
];

export const industries = [
    { name: 'AI Startups', description: 'Validate your core IP and build trust with enterprise clients faster.', image: '/assets/images/generated/mission_abstract_v2_1770256755424.png' }, // Reusing "Mission" (Growth/Future)
    { name: 'SaaS Platforms', description: 'Prevent user-facing AI errors that churn customers and damage brand reputation.', image: '/assets/images/generated/value_transparency_v2_1770256709550.png' }, // Reusing "Transparency" (Structure/Network)
    { name: 'Healthcare & HealthTech', description: 'Ensure clinical-grade reliability and patient safety in diagnostic models.', image: '/assets/images/generated/service_healthcare_v2_1770256668702.png' }, // Reusing "Healthcare Service"
    { name: 'FinTech & Regulated Systems', description: 'Validate for strict compliance readiness (EU AI Act, NIST) with audit-ready documentation.', image: '/assets/images/generated/value_reliability_v2_1770256691720.png' }, // Reusing "Reliability" (Solid/Secure)
];

export const processSteps = [
    { num: '01', title: 'Risk Assessment', desc: 'We identify potential failure modes, security vulnerabilities, and compliance gaps.' },
    { num: '02', title: 'Test Framework Design', desc: 'Developing custom evaluation datasets and adversarial test cases specific to your domain.' },
    { num: '03', title: 'Rigorous Validation', desc: 'Executing red-teaming, stress testing, and bias analysis loops.' },
    { num: '04', title: 'Governance Implementation', desc: 'Establishing guardrails, monitoring logging, and human-in-the-loop protocols.' },
    { num: '05', title: 'Continuous Assurance', desc: 'Ongoing monitoring for drift and emerging threat vectors in production.' },
];

export const partners = [
    { id: 1, name: 'Yum Brands', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Yum%21_Brands_logo.svg/1200px-Yum%21_Brands_logo.svg.png' },
    { id: 2, name: 'Hexaware', imageUrl: '/assets/partners/hexaware-v2.svg' },
    { id: 3, name: 'Franklin Templeton', imageUrl: 'https://www.franklintempleton.com/api/svg/v1/content/obm1qef7up/original/Franklin_Templeton.svg' },
    { id: 4, name: 'Fiduciary Trust International', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Fiduciary_Trust_Company_International.png' },
    { id: 5, name: 'Merkle Science', imageUrl: 'https://cdn.prod.website-files.com/6058883b1b6e85eceae76f61/6097cd679a058883a86f6d41_logo.svg' },
    { id: 6, name: 'Curve Tomorrow', imageUrl: '/assets/partners/curve-tomorrow-v2.svg' },
    { id: 7, name: 'Rocketium', imageUrl: 'https://rocketium.com/img/rocketium-logo-black.png' },
    { id: 8, name: 'EverReal', imageUrl: 'https://cdn.startbase.com/images/e1e823e4142074bdc52a4365a6fec65d/02a5f5cbbbfdc2c/' },
    { id: 9, name: 'DA Systems', imageUrl: 'https://da-systems.co.uk/wp-content/uploads/2022/01/DA-Systems-Logo-250.png' },
    { id: 10, name: 'WeGuide', imageUrl: 'https://cdn.healthtechalpha.com/static/resized/social_media_image/startup_data_images/114448.png' },
];

export const teamMembers = [
    { id: 1, name: "Sarah Jenkins", role: "CEO", bio: "Former Chief Risk Officer with 15 years in algorithmic trading validation.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" },
    { id: 2, name: "David Chen", role: "Head of AI Research", bio: "PhD in Adversarial Machine Learning. Leads our red-teaming division.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop" },
    { id: 3, name: "Elena Rodriguez", role: "Director of Compliance", bio: "Expert in EU AI Act and GDPR intersection for large enterprises.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2661&auto=format&fit=crop" }
];

export const milestones = [
    { id: 1, year: '2019', title: 'Founding', description: 'Kaycore established as a specialized software audit firm.' },
    { id: 2, year: '2021', title: 'AI Pivot', description: 'Launched dedicated AI Validation practice ahead of market curve.' },
    { id: 3, year: '2023', title: 'Major Partnership', description: 'Partnered with Global Bank to secure their first GenAI deployment.' },
    { id: 4, year: '2025', title: 'Standards Leader', description: 'Selected to advise on national AI safety standards.' }
];

export const values = [
    { title: 'Reliability', copy: 'We believe boring is better. Predictable systems are the foundation of trust.', image: '/assets/images/generated/value_reliability_v2_1770256691720.png' },
    { title: 'Transparency', copy: 'No black boxes. We strive for explainable, auditable AI outcomes.', image: '/assets/images/generated/value_transparency_v2_1770256709550.png' },
    { title: 'Rigour', copy: 'We test to the edge cases, not just the happy paths.', image: '/assets/images/generated/value_rigour_v2_1770256725499.png' },
];

export const aboutSection = {
    mission: {
        title: 'Our Mission',
        description: 'To enable the safe, ethical, and reliable adoption of Artificial Intelligence in the enterprise by providing world-class quality engineering and validation services.',
        image: '/assets/images/generated/mission_abstract_v2.png'
    },
    vision: {
        title: 'Our Vision',
        description: 'A future where AI systems are as trustworthy and predictable as the critical infrastructure they power, free from bias and hallucinations.',
        image: '/assets/images/generated/vision_abstract_v2.png'
    }
}

export const detailedServices = [ // Kept minimal for now as we focus on landing page
    {
        id: 1,
        title: 'Model Validation',
        description: 'Independent validation of AI models to ensure they meet performance and safety criteria.',
        slug: 'model-validation',
        features: ['Adversarial Testing', 'Bias Reduction', 'Performance Benchmarking'],
        emoji: '🛡️',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
        process: [
            'Data Assessment: Evaluate quality and bias in training data',
            'Adversarial Testing: Stress-test models with edge case inputs',
            'Compliance Reporting: Generate documentation for regulatory bodies',
            'Continuous Monitoring: Deploy drift detection agents associated with model endpoints'
        ]
    }
];

export const sectorSolutions = [ // Kept minimal
    {
        id: 1,
        title: 'HealthTech AI',
        description: 'Validation of diagnostic models and clinical decision support.',
        slug: 'healthtech',
        emoji: '🏥',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop',
        features: ['HIPAA Compliance', 'Diagnostic Validation', 'Patient Data Safety']
    }
];

export const caseStudies = [
    {
        id: 1,
        title: 'Reducing Hallucinations in Financial Advisory Bot',
        industry: 'FinTech',
        client: 'Global Asset Manager',
        duration: '4 months',
        slug: 'financial-bot-hallucinations',
        description: 'Reduced hallucination rate from 12% to <0.1% for a client-facing advisory LLM using RAG auditing and constitutional AI guardrails.',
        overview: 'A global asset manager wanted to deploy an LLM-based advisor but found it was inventing financial products that did not exist. Kaycore was brought in to secure the deployment.',
        problem: 'The LLM was generating plausible but factually incorrect investment advice, creating immense regulatory and reputational risk.',
        solution: 'We implemented a multi-layer guardrail system:\n• Strict RAG (Retrieval Augmented Generation) enforcement\n• Output validation against product database\n• "Constitutional" prompts to enforce disclaimer protocols',
        results: {
            hallucinationRate: 'Reduced from 12% to 0.08%',
            compliance: '100% adherence to regulatory disclaimer requirements',
            costSavings: 'Estimated $10M in avoided regulatory fines'
        },
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
        technologies: ['Python', 'LlamaIndex', 'OpenAI API', 'PostgreSQL', 'Docker'],
        keyResults: [
            'Reduced hallucination rate from 12% to 0.08%',
            '100% adherence to regulatory disclaimer requirements',
            'Estimated $10M in avoided regulatory fines'
        ]
    },
    {
        id: 2,
        title: 'Algorithmic Bias Audit for Hiring Platform',
        industry: 'HR Tech',
        client: 'Enterprise Recruitment Platform',
        duration: '3 months',
        slug: 'hiring-bias-audit',
        description: 'Identified and mitigated 3 major bias vectors in a resume screening algorithm, ensuring compliance with NYC AEDT laws.',
        overview: 'A recruitment platform needed to prove their new AI ranking system was non-discriminatory to meet new legislation.',
        problem: 'Initial internal tests showed the model favored candidates from specific universities regardless of actual skill match.',
        solution: 'We conducted a comprehensive bias audit using counterfactual testing and disparate impact analysis. We retrained the model using balanced datasets and implemented fairness constraints.',
        results: {
            biasReduction: 'Disparate impact ratio improved to 0.95 (compliance standard is 0.80)',
            legalRisk: 'Verified readiness for NYC AEDT Local Law 144',
            fairness: 'Demographic parity achieved across protected groups'
        },
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop',
        technologies: ['Scikit-learn', 'Fairlearn', 'Python', 'AWS SageMaker'],
        keyResults: [
            'Disparate impact ratio improved to 0.95',
            'Fully compliant with NYC AEDT Local Law 144',
            'Demographic parity achieved across protected groups'
        ]
    },
    {
        id: 3,
        title: 'Security Red-Teaming for Code Gen Assistant',
        industry: 'Software',
        client: 'DevTools Startup',
        duration: '2 months',
        slug: 'code-gen-red-teaming',
        description: 'Uncovered critical vulnerabilities where the AI assistant could be tricked into generating insecure code or leaking API keys.',
        overview: 'A startup building a coding assistant needed to ensure their tool did not introduce security vulnerabilities into user codebases.',
        problem: 'The model was susceptible to prompt injection, often revealing system instructions and generating SQL injection vulnerabilities when asked.',
        solution: 'We performed aggressive red-teaming, creating a library of 500+ attack vectors. We then fine-tuned the model on "refusal" datasets and implemented output filtering.',
        results: {
            securityScore: 'Improved from C- to A+',
            vulnerabilityBlock: '100% of known injection attacks blocked',
            trust: 'Successfully passed SOC2 Type II AI controls'
        },
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop',
        technologies: ['Azure OpenAI', 'LangChain', 'Python', 'Nemo Guardrails', 'Pinecone'],
        keyResults: [
            'Security Score Improved from C- to A+',
            '100% of known injection attacks blocked',
            'Successfully passed SOC2 Type II AI controls'
        ]
    }
];

// ... (previous content remains the same until needed changes)

// Fix broken image in services array (example index)
// Was: image: '/assets/images/services/healthcare-real.png',
// New: image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop',

export const blogPosts = [
    {
        id: 1,
        title: 'The Enterprise Guide to LLM Safety',
        slug: 'enterprise-llm-safety',
        date: '2025-01-15',
        author: 'David Chen',
        designation: 'Head of AI Research',
        category: 'AI Quality',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'Why standard testing is insufficient for generative models and what to do instead.',
        readTime: '5 min read',
        content: [
            { type: 'paragraph', text: 'Traditional software testing relies on deterministic outputs: given input X, expect output Y. Generative AI models are probabilistic, meaning the same input can yield different outputs. This fundamental shift requires a new approach to quality assurance.' },
            { type: 'heading', text: 'The Three Pillars of AI Quality' },
            { type: 'list', items: ['Accuracy & Factuality', 'Safety & Alignment', 'Security & Robustness'] },
            { type: 'paragraph', text: 'To ensure enterprise-grade reliability, organizations must move beyond simple "vibes-based" evaluation and implement rigorous, automated testing pipelines.' },
            { type: 'quote', text: 'You cannot manage what you cannot measure. AI validation is the new unit testing.', citation: 'David Chen' }
        ]
    },
    {
        id: 2,
        title: 'Red Teaming Your RAG Pipeline',
        slug: 'red-teaming-rag',
        date: '2025-02-01',
        author: 'Sarah Jenkins',
        designation: 'CEO',
        category: 'Red Teaming',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'How to simulate adversarial attacks on your Retrieval-Augmented Generation system.',
        readTime: '7 min read',
        content: []
    },
    {
        id: 3,
        title: 'EU AI Act: What CTOs Need to Know',
        slug: 'eu-ai-act-guide',
        date: '2025-02-10',
        author: 'Elena Rodriguez',
        designation: 'Director of Compliance',
        category: 'Compliance',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2670&auto=format&fit=crop',
        excerpt: 'A practical roadmap for compliance with the world\'s first comprehensive AI law.',
        readTime: '6 min read',
        content: []
    }
];

// Ensure fallback data is exported for use in queries
export const fallbackNews = [
    {
        _id: '1',
        title: 'Kaycore Partners with Hexaware for GenAI Validation',
        date: '2025-01-20',
        category: 'Partnership',
        excerpt: 'Strategic alliance to bring automated red-teaming to Hexaware\'s enterprise clients.',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2670&auto=format&fit=crop',
        link: '/news/hexaware-partnership',
        slug: 'hexaware-partnership'
    },
    {
        _id: '2',
        title: 'New "Risk-First" Audit Methodology Released',
        date: '2025-02-05',
        category: 'Product Update',
        excerpt: 'Our updated framework captures silent failure modes in agentic workflows.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop',
        link: '/news/audit-methodology-v2',
        slug: 'audit-methodology-v2'
    },
    {
        _id: '3',
        title: 'Featured in TechCrunch: The End of "Vibes-Based" QA',
        date: '2025-02-12',
        category: 'Press',
        excerpt: 'CEO Sarah Jenkins discusses why stochastic systems need probabilistic testing.',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2670&auto=format&fit=crop',
        link: '/news/techcrunch-feature',
        slug: 'techcrunch-feature'
    }
];

export const orderedLabsProjects = [
    {
        id: 1,
        title: 'RAG Truth Auditor',
        category: 'Validation Tool',
        image: '/assets/images/labs/rag-audit.jpg',
        href: '/demos/rag-auditor',
        subtitle: 'Hallucination Detection',
        description: 'Automated pipeline for cross-referencing LLM outputs against source documents to calculate factual accuracy scores.'
    },
    {
        id: 2,
        title: 'PromptInjection Guard',
        category: 'Security',
        image: '/assets/images/labs/prompt-guard.jpg',
        href: '/demos/prompt-guard',
        subtitle: 'Adversarial Defense',
        description: 'Real-time middleware that sanitizes user inputs and detects jailbreak attempts before they reach the model.'
    },
    {
        id: 3,
        title: 'Bias Visualizer',
        category: 'Ethics',
        image: '/assets/images/labs/bias-viz.jpg',
        href: '/demos/bias-viz',
        subtitle: 'Fairness Analytics',
        description: 'Interactive dashboard showing disparate impact of classification models across protected demographic groups.'
    }
];

export const careerOpportunities = [
    {
        id: 'ale-01',
        title: 'Senior AI Liability Engineer',
        department: 'Risk Engineering',
        location: 'New York, NY (Hybrid)',
        type: 'Full-time',
        description: 'Lead the design of fail-safe mechanisms for autonomous financial agents. Requires experience with formal verification methods.'
    },
    {
        id: 'llm-rt-02',
        title: 'LLM Red Team Operative',
        department: 'Security',
        location: 'Remote (Global)',
        type: 'Contract',
        description: 'Execute adversarial attack simulations on client foundation models. Expertise in jailbreaking and prompt injection required.'
    },
    {
        id: 'aig-03',
        title: 'AI Governance Consultant',
        department: 'Compliance',
        location: 'London, UK',
        type: 'Full-time',
        description: 'Advise enterprise clients on EU AI Act compliance and implement NIST AI RMF frameworks.'
    }
];
