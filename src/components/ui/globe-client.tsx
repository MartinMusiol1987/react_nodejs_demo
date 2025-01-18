"use client";

import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('./globe').then(mod => mod.Globe), {
  ssr: false,
  loading: () => <div className="relative aspect-square w-full max-w-[500px] mx-auto bg-white/5 rounded-lg animate-pulse" />
});

export function ClientGlobe() {
  return (
    <div className="relative aspect-square w-full max-w-[500px] mx-auto">
      <Globe />
    </div>
  );
} 