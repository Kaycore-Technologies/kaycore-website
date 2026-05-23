import { Metadata } from 'next';
import SentimentAnalyzerContent from './SentimentAnalyzerContent';

export const metadata: Metadata = {
    title: 'Cognitive Sentiment Analysis | Kaycore Labs',
    description: 'AI-powered sentiment analysis tool using NLP to detect emotional tone and entities.',
};

export default function Page() {
    return <SentimentAnalyzerContent />;
}
