import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-6 pt-32 pb-20 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-3xl">
        &#x1F6E1;
      </div>
      <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
        Switch AIs.{" "}
        <span className="text-emerald-400">Keep everything.</span>
      </h1>
      <p className="mt-6 max-w-xl text-lg text-neutral-400">
        Make your ChatGPT history searchable in Claude. Upload once, search
        forever. Your conversations, always at your fingertips.
      </p>
      <div className="mt-10 flex gap-4">
        <Link
          href="/auth/signin"
          className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-emerald-400"
        >
          Get Started Free
        </Link>
        <a
          href="#how-it-works"
          className="rounded-lg border border-neutral-700 px-6 py-3 font-semibold text-neutral-300 transition hover:border-neutral-500"
        >
          How It Works
        </a>
      </div>
    </section>
  );
}
