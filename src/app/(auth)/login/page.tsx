'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createClient } from '@/lib/supabase/client';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError(signInError.message);
      } else {
        router.push('/dashboard');
        router.refresh();
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 dark:bg-neutral-950 font-sans">
      <div className="w-full max-w-[420px] space-y-8 py-10">
        {/* Header */}
        <div className="space-y-2 text-left">
          <h1 className="text-[32px] font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Sign In
          </h1>
          <p className="text-[15px] text-neutral-500 dark:text-neutral-400">
            Enter your email and password to sign in!
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive dark:border-destructive/30 dark:bg-destructive/10">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignIn} className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-semibold text-neutral-800 dark:text-neutral-200"
            >
              Email<span className="text-red-500 ml-0.5">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
              className="h-[46px] rounded-xl border-neutral-200 bg-transparent px-4 text-[15px] focus-visible:border-blue-500 focus-visible:ring-blue-500/20 dark:border-neutral-800"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className="text-sm font-semibold text-neutral-800 dark:text-neutral-200"
            >
              Password<span className="text-red-500 ml-0.5">*</span>
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
                className="h-[46px] rounded-xl border-neutral-200 bg-transparent pl-4 pr-12 text-[15px] focus-visible:border-blue-500 focus-visible:ring-blue-500/20 dark:border-neutral-800"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="keep-logged-in"
                checked={keepLoggedIn}
                onCheckedChange={(checked) => setKeepLoggedIn(!!checked)}
                disabled={loading}
              />
              <Label
                htmlFor="keep-logged-in"
                className="text-[14px] font-medium text-neutral-600 dark:text-neutral-400 hover:cursor-pointer select-none"
              >
                Keep me logged in
              </Label>
            </div>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="text-[14px] font-semibold text-blue-600 hover:underline dark:text-blue-500"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-[48px] rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200 text-[15px] flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
