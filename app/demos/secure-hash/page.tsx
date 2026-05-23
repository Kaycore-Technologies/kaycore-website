import { Metadata } from 'next';
import SecureHashContent from './SecureHashContent';

export const metadata: Metadata = {
    title: 'Secure Hash Utility | Kaycore Labs',
    description: 'Browser-based cryptographic hash generator (SHA-256, SHA-1) for data integrity testing.',
};

export default function Page() {
    return <SecureHashContent />;
}
