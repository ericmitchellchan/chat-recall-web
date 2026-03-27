"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function SettingsPage() {
  const { data: session } = useSession();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteInput, setDeleteInput] = useState("");
  const [deleting, setDeleting] = useState(false);

  const user = session?.user;

  async function handleDeleteAccount() {
    if (deleteInput !== "DELETE") return;
    setDeleting(true);

    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081";
      await fetch(`${apiUrl}/account`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session?.accessToken || ""}`,
        },
      });
      signOut({ callbackUrl: "/" });
    } catch {
      setDeleting(false);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="mt-1 text-sm text-neutral-400">
        Manage your account and preferences.
      </p>

      <div className="mt-8 max-w-2xl space-y-6">
        {/* Profile */}
        <Card>
          <h2 className="font-semibold">Profile</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-4">
              {user?.image ? (
                <img
                  src={user.image}
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-xl font-bold text-emerald-400">
                  {(user?.name || user?.email || "?")[0].toUpperCase()}
                </div>
              )}
              <div>
                <p className="font-medium text-neutral-100">
                  {user?.name || "—"}
                </p>
                <p className="text-sm text-neutral-400">
                  {user?.email || "—"}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* MCP Endpoint */}
        <Card>
          <h2 className="font-semibold">MCP Endpoint</h2>
          <p className="mt-1 text-sm text-neutral-400">
            Use this URL to connect Chat Recall to Claude via MCP.
          </p>
          <div className="mt-3 flex items-center gap-2">
            <code className="flex-1 rounded-lg bg-neutral-950 px-4 py-2.5 text-sm text-neutral-300">
              https://mcp.chatrecall.ai
            </code>
            <Button
              variant="secondary"
              onClick={() =>
                navigator.clipboard.writeText("https://mcp.chatrecall.ai")
              }
            >
              Copy
            </Button>
          </div>
          <p className="mt-2 text-xs text-neutral-500">
            See the{" "}
            <a
              href="/guide"
              className="text-emerald-400 hover:text-emerald-300"
            >
              setup guide
            </a>{" "}
            for step-by-step instructions.
          </p>
        </Card>

        {/* Data Export */}
        <Card>
          <h2 className="font-semibold">Export Data</h2>
          <p className="mt-1 text-sm text-neutral-400">
            Download your full conversation archive as JSON. No lock-in — your
            data is always yours.
          </p>
          <div className="mt-4">
            <Button variant="secondary">Download Archive</Button>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-500/20">
          <h2 className="font-semibold text-red-400">Danger Zone</h2>

          {!showDeleteConfirm ? (
            <>
              <p className="mt-1 text-sm text-neutral-400">
                Permanently delete your account and all associated data. This
                action is immediate and cannot be undone.
              </p>
              <div className="mt-4">
                <Button
                  variant="danger"
                  onClick={() => setShowDeleteConfirm(true)}
                >
                  Delete Account
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="mt-2 text-sm text-neutral-400">
                This will permanently delete:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-400">
                <li>All uploaded conversations</li>
                <li>All threads and messages</li>
                <li>Your search index</li>
                <li>Your account and profile</li>
              </ul>
              <p className="mt-3 text-sm text-neutral-300">
                Type{" "}
                <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-xs text-red-400">
                  DELETE
                </code>{" "}
                to confirm:
              </p>
              <div className="mt-2 flex gap-3">
                <input
                  value={deleteInput}
                  onChange={(e) => setDeleteInput(e.target.value)}
                  placeholder="DELETE"
                  className="w-32 rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm placeholder-neutral-600 outline-none transition focus:border-red-500"
                />
                <Button
                  variant="danger"
                  disabled={deleteInput !== "DELETE" || deleting}
                  onClick={handleDeleteAccount}
                >
                  {deleting ? "Deleting..." : "Confirm Delete"}
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setDeleteInput("");
                  }}
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}
