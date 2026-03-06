import { Suspense } from "react";
import Link from "next/link";
import SignInForm from "@/components/auth/SignInForm";

export const metadata = {
  title: "Sign In — Chat Recall",
};

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <span className="text-2xl font-bold">Chat Recall</span>
        <span className="text-neutral-500">&#x1F6E1;</span>
      </Link>
      <h1 className="mb-2 text-2xl font-bold">Welcome back</h1>
      <p className="mb-8 text-sm text-neutral-400">
        Sign in to access your conversation history.
      </p>
      <Suspense>
        <SignInForm />
      </Suspense>
      <p className="mt-8 text-sm text-neutral-500">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/signup"
          className="text-emerald-400 hover:text-emerald-300"
        >
          Sign up
        </Link>
      </p>
    </main>
  );
}
