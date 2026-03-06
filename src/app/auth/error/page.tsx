"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const errors: Record<string, { title: string; message: string }> = {
  Configuration: {
    title: "Server error",
    message:
      "There is a problem with the server configuration. Please contact support.",
  },
  AccessDenied: {
    title: "Access denied",
    message: "You do not have permission to sign in.",
  },
  Verification: {
    title: "Verification failed",
    message:
      "The verification link may have expired. Please request a new one.",
  },
  OAuthAccountNotLinked: {
    title: "Account conflict",
    message:
      "This email is already linked to another sign-in method. Please use your original sign-in method.",
  },
  Default: {
    title: "Something went wrong",
    message: "An unexpected error occurred during sign-in. Please try again.",
  },
};

function ErrorContent() {
  const searchParams = useSearchParams();
  const errorType = searchParams.get("error") || "Default";
  const { title, message } = errors[errorType] || errors.Default;

  return (
    <>
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-3xl">
        &#x26A0;
      </div>
      <h1 className="mt-6 text-2xl font-bold">{title}</h1>
      <p className="mt-3 max-w-md text-neutral-400">{message}</p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/auth/signin"
          className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-neutral-950 transition hover:bg-emerald-400"
        >
          Try Again
        </Link>
        <Link
          href="/"
          className="rounded-lg border border-neutral-700 px-6 py-3 font-semibold text-neutral-300 transition hover:border-neutral-500"
        >
          Go Home
        </Link>
      </div>
    </>
  );
}

export default function AuthErrorPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Suspense>
        <ErrorContent />
      </Suspense>
    </main>
  );
}
