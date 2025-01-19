'use client';

import dynamic from 'next/dynamic';

import Container from '@/components/Container';

const CSRComponent = dynamic(
  () => import('./_components/csr-component').then(mod => mod.default),
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <main>
      <Container>
        <CSRComponent />
      </Container>
    </main>
  );
}
