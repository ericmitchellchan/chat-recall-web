"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="flex h-14 items-center justify-between border-b border-neutral-800 px-6">
      <Link href="/dashboard" className="flex items-center gap-2">
        <span className="text-lg font-bold">Chat Recall</span>
        <span className="text-neutral-500">&#x1F6E1;</span>
      </Link>

      {session?.user && (
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 rounded-lg px-2 py-1 transition hover:bg-neutral-800"
          >
            {session.user.image ? (
              <img
                src={session.user.image}
                alt=""
                className="h-7 w-7 rounded-full"
              />
            ) : (
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 text-xs font-bold text-emerald-400">
                {(session.user.name || session.user.email || "?")[0].toUpperCase()}
              </div>
            )}
            <span className="hidden text-sm sm:inline">
              {session.user.name || session.user.email}
            </span>
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-1 w-48 rounded-lg border border-neutral-800 bg-neutral-900 py-1 shadow-xl">
              <Link
                href="/dashboard/settings"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800"
              >
                Settings
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="block w-full px-4 py-2 text-left text-sm text-neutral-300 hover:bg-neutral-800"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
