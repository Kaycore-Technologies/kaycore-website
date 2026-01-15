import { Metadata } from 'next';
import VoiceCloneContent from './VoiceCloneContent';

export const metadata: Metadata = {
    title: 'Generative Voice Synths | Kaycore Labs',
    description: 'Few-shot voice cloning and emotional speech synthesis engine.',
};

export default function Page() {
    return <VoiceCloneContent />;
}
