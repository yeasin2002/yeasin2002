import Container from '@/components/common/Container';
import { ShieldCheck, Square, UploadSimple, UserCircle } from '@phosphor-icons/react/ssr';

const dashboardSections = [
  {
    title: 'Projects',
    description: 'Add, edit, and reorder portfolio projects from Supabase-backed content.',
    icon: Square,
  },
  {
    title: 'Media',
    description: 'Upload project screenshots and other assets to Supabase Storage.',
    icon: UploadSimple,
  },
  {
    title: 'Profile',
    description: 'Keep your bio, links, and featured details synced from one place.',
    icon: UserCircle,
  },
  {
    title: 'Access',
    description: 'This route is reserved for the single admin account you will create in Supabase.',
    icon: ShieldCheck,
  },
];

export default function DashboardPage() {
  return (
    <Container className="min-h-screen py-16">
      <div className="space-y-10">
        <section className="max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
            Dashboard
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
            Portfolio admin foundation
          </h1>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            This area is now wired for Supabase SSR auth and route protection, so we can build
            content management, media uploads, and admin tools step by step.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {dashboardSections.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-950/80"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3 dark:border-neutral-800 dark:bg-neutral-900">
                  <Icon size={24} className="text-neutral-900 dark:text-neutral-100" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Container>
  );
}
