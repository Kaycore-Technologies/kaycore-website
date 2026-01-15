import { Metadata } from 'next';
import IdentityVaultContent from './IdentityVaultContent';

export const metadata: Metadata = {
    title: 'Smart Identity Vault | Kaycore Labs',
    description: 'Decentralized identity management with ZK-proof verification.',
};

export default function Page() {
    return <IdentityVaultContent />;
}
