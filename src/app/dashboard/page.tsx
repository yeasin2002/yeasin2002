import React from 'react';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-xs dark:border-neutral-800 dark:bg-neutral-900">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
          Hello World
        </h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          Welcome to your administrative dashboard. You can begin managing your portfolio content here in the future.
        </p>
      </div>
    </div>
  );
}
