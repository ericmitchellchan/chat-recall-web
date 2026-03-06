export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">Chat Recall</span>
          <span className="text-neutral-500">&#x1F6E1;</span>
        </div>
        <nav className="flex gap-6 text-sm text-neutral-400">
          <a href="#features" className="transition hover:text-neutral-200">
            Features
          </a>
          <a href="#pricing" className="transition hover:text-neutral-200">
            Pricing
          </a>
          <a href="/legal/privacy" className="transition hover:text-neutral-200">
            Privacy
          </a>
          <a href="/legal/terms" className="transition hover:text-neutral-200">
            Terms
          </a>
        </nav>
        <p className="text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} Chat Recall. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
