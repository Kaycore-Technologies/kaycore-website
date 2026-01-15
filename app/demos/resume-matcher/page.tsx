import { Metadata } from 'next';
import ResumeMatcherContent from './ResumeMatcherContent';

export const metadata: Metadata = {
    title: 'Smart Resume Matcher | Kaycore Labs',
    description: 'ATS optimization tool analyzing keyword overlap between resumes and job descriptions.',
};

export default function Page() {
    return <ResumeMatcherContent />;
}
