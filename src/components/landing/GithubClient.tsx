'use client';

import dynamic from 'next/dynamic';

const Github = dynamic(() => import('./Github'), { ssr: false });

export default Github;
