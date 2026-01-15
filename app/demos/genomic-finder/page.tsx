import { Metadata } from 'next';
import GenomicFinderContent from './GenomicFinderContent';

export const metadata: Metadata = {
    title: 'Genomic Pattern Finder | Kaycore Labs',
    description: 'High-throughput DNA sequence anomaly detection using regex patterns.',
};

export default function Page() {
    return <GenomicFinderContent />;
}
