import Link from "next/link";

export const SUPPORT_EMAIL = "scalecue@gmail.com";

// Mirrors the app's brand mark (src/components/branding/Logo.tsx): a rounded tile on the
// dark canvas with a subtle border and an extrabold "SC" monogram.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-md border border-line bg-canvas">
        <span className="text-[13px] font-extrabold leading-none text-ink">SC</span>
      </span>
      <span className="text-[15px] font-semibold tracking-tight text-ink">ScaleCue</span>
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-canvas/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Logo />
        </Link>
        <nav className="flex items-center gap-6 text-sm text-subtle">
          <Link href="/support" className="transition-colors hover:text-ink">
            Support
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-ink">
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
          <div className="flex gap-6">
            <Link href="/support" className="transition-colors hover:text-ink">
              Support
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy
            </Link>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="transition-colors hover:text-ink"
            >
              Contact
            </a>
          </div>
          <p>© {new Date().getFullYear()} ScaleCue</p>
        </div>
      </div>
    </footer>
  );
}

// Small shared building blocks used across pages.
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">{children}</p>
  );
}
