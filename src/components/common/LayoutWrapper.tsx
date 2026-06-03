'use client';

import ChatBubble from '@/components/common/ChatBubble';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { Quote } from '@/components/common/Quote';
import { usePathname } from 'next/navigation';
import React from 'react';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const pathname = usePathname();

  // Conditionally hide navigation and layout elements on /login and /dashboard routes
  const isDashboard = pathname?.startsWith('/dashboard');
  const isLogin = pathname?.startsWith('/login');
  const hideLayout = isDashboard || isLogin;

  if (hideLayout) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Quote />
      <Footer />
      <ChatBubble />
    </>
  );
}
