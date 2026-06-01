'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { Quote } from '@/components/common/Quote';
import ChatBubble from '@/components/common/ChatBubble';

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
