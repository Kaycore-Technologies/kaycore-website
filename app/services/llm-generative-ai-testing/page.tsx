import type { Metadata } from 'next';
import LLMTestingContent from './LLMTestingContent';

export const metadata: Metadata = {
    title: 'LLM & Generative AI Testing Services | Kaycore',
    description: 'Test LLMs for hallucinations, bias, consistency, and safety. Kaycore provides production-grade LLM and generative AI testing services.',
};

export default function LLMTestingPage() {
    return <LLMTestingContent />;
}
