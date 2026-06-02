'use client';

import ThemeToggleButton from '@/components/common/ThemeToggleButtonClient';
import { createClient } from '@/lib/supabase/client';
import { MusicNoteSimpleIcon } from '@phosphor-icons/react';
import {
  Bell,
  ChevronDown,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Menu,
  Power,
  PowerCircle,
  Search,
  Upload,
  User,
  X,
} from 'lucide-react';
import { Link } from 'next-view-transitions';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';





interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    {
      label: 'Experiences',
      href: '/dashboard/experiences',
      icon: FolderKanban,
    },
    { label: 'Projects', href: '/dashboard/projects', icon: FolderKanban },
    { label: 'About Me', href: '/dashboard/me', icon: User },
    { label: 'Media Library', href: '/dashboard/media-library', icon: Upload },
    { label: 'Skills', href: '/dashboard/skills', icon: Power },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-neutral-50 dark:bg-neutral-950 font-sans text-neutral-800 dark:text-neutral-200">
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-900/50 backdrop-blur-xs md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Left Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-neutral-200 bg-white px-6 py-6 transition-transform duration-300 ease-in-out dark:border-neutral-800 dark:bg-neutral-900 md:static md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="mb-8 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-bold text-white shadow-sm shadow-blue-500/20">
              YA
            </div>
            <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              AdminPanel
            </span>
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="rounded-lg p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 md:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar Menu Group */}
        <div className="flex-1 space-y-7">
          <div>
            <p className="px-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              Menu
            </p>
            <nav className="mt-3 space-y-1.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-[14px] font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-50/80 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400 border border-blue-100/50 dark:border-blue-900/30'
                        : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800/40 dark:hover:text-neutral-100 border border-transparent'
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`}
                    />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-neutral-100 pt-4 dark:border-neutral-800">
          <button
            onClick={handleSignOut}
            className="flex w-full items-center gap-3.5 rounded-xl border border-transparent px-3.5 py-3 text-[14px] font-semibold text-neutral-500 hover:bg-neutral-50 hover:text-red-600 dark:text-neutral-400 dark:hover:bg-neutral-800/40 dark:hover:text-red-400 transition-all duration-200"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Panel */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Header */}
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-neutral-200 bg-white/80 px-6 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/80">
          {/* Left Area (Toggle + Search) */}
          <div className="flex flex-1 items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="rounded-xl border border-neutral-200 p-2 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-800 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Search bar */}
            <div className="relative hidden max-w-sm flex-1 sm:block">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search or type command..."
                className="h-10 w-full rounded-xl border border-neutral-200 bg-transparent pl-10 pr-12 text-[14px] outline-hidden focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-neutral-800 dark:focus:border-blue-500"
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[10px] font-medium text-neutral-400 dark:border-neutral-800 dark:bg-neutral-800">
                ⌘K
              </span>
            </div>
          </div>

          {/* Right Area (Theme, Notification, Profile) */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <div className="rounded-xl border border-neutral-200 p-1 dark:border-neutral-800">
              <ThemeToggleButton variant="circle" start="top-right" blur />
            </div>

            {/* Notification Bell */}
            <button className="relative rounded-xl border border-neutral-200 p-2 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-800">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-amber-500" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2.5 rounded-xl border border-neutral-200 p-1.5 pr-3 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-800"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                  <User className="h-4 w-4" />
                </div>
                <span className="hidden text-sm font-semibold sm:inline">
                  {user ? user.email?.split('@')[0] : 'Admin'}
                </span>
                <ChevronDown className="h-4 w-4 text-neutral-400" />
              </button>

              {isProfileOpen && (
                <>
                  <div
                    className="fixed inset-0 z-45"
                    onClick={() => setIsProfileOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 z-50 w-56 origin-top-right rounded-xl border border-neutral-200 bg-white p-1.5 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="px-3 py-2 border-b border-neutral-100 dark:border-neutral-800">
                      <p className="text-xs text-neutral-400 dark:text-neutral-500">
                        Signed in as
                      </p>
                      <p className="truncate text-sm font-semibold">
                        {user?.email || 'admin@portfolio.com'}
                      </p>
                    </div>
                    <div className="mt-1">
                      <Link
                        href="/dashboard/profile"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-800/40"
                      >
                        <User className="h-4 w-4" />
                        My Profile
                      </Link>
                      <button
                        onClick={() => {
                          setIsProfileOpen(false);
                          handleSignOut();
                        }}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/20"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto bg-neutral-50 p-6 dark:bg-neutral-950 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}