import dynamic from 'next/dynamic';

const Page = dynamic(
    () => import('./page2'),
    { ssr: false }
);

export default Page;