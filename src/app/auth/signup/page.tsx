import { Suspense } from "react";
import Link from "next/link";
import SignInForm from "@/components/auth/SignInForm";

export const metadata = {
  title: "Sign Up — Chat Recall",
};

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <Link href="/" className="mb-8 flex items-center gap-2">
        <span className="text-2xl font-bold">Chat Recall</span>
        <span className="text-neutral-500">&#x1F6E1;</span>
      </Link>
      <h1 className="mb-2 text-2xl font-bold">Create your account</h1>
      <p className="mb-8 text-sm text-neutral-400">
        Get started with Chat Recall for free.
      </p>
      <Suspense>
        <SignInForm />
      </Suspense>
      <p className="mt-6 max-w-xs text-center text-xs text-neutral-500">
        By signing up, you agree to our{" "}
        <Link
          href="/legal/terms"
          className="text-neutral-400 underline hover:text-neutral-300"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/legal/privacy"
          className="text-neutral-400 underline hover:text-neutral-300"
        >
          Privacy Policy
        </Link>
        .
      </p>
      <p className="mt-8 text-sm text-neutral-500">
        Already have an account?{" "}
        <Link
          href="/auth/signin"
          className="text-emerald-400 hover:text-emerald-300"
        >
          Sign in
        </Link>
      </p>
    </main>
  );
}
