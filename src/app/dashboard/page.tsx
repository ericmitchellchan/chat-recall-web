"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

interface Upload {
  id: string;
  filename: string;
  status: string;
  conversations_imported: number;
  messages_imported: number;
  created_at: string;
}

interface Stats {
  total_conversations: number;
  total_messages: number;
  total_uploads: number;
  last_upload_at: string | null;
  subscription_status: string;
  trial_ends_at: string | null;
  trial_days_remaining: number | null;
  storage_conversations: number;
  recent_uploads: Upload[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081";

export default function DashboardPage() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!session) return;
    fetchStats();
  }, [session]);

  async function fetchStats() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/stats`, {
        headers: {
          Authorization: `Bearer ${session?.accessToken || ""}`,
        },
      });
      if (!res.ok) throw new Error(`Failed to load stats: ${res.status}`);
      setStats(await res.json());
    } catch (err: any) {
      setError(err.message || "Failed to load dashboard.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Your conversation history at a glance.
        </p>
        <LoadingSpinner className="mt-16" />
      </div>
    );
  }

  if (error && !stats) {
    return (
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-1 text-sm text-neutral-400">
          Your conversation history at a glance.
        </p>
        <div className="mt-8 max-w-2xl">
          <Card>
            <p className="text-sm text-red-400">{error}</p>
            <div className="mt-4">
              <Button variant="secondary" onClick={fetchStats}>
                Retry
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const isTrial =
    stats?.subscription_status === "trialing" ||
    stats?.subscription_status === "trial";
  const isActive = stats?.subscription_status === "active";
  const needsSub =
    !isActive &&
    !isTrial &&
    stats?.subscription_status !== "past_due";

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-1 text-sm text-neutral-400">
        Your conversation history at a glance.
      </p>

      {/* Trial banner */}
      {isTrial && stats?.trial_days_remaining != null && (
        <div className="mt-6 flex items-center justify-between rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-4">
          <div>
            <p className="font-medium text-emerald-400">
              Free trial &mdash; {stats.trial_days_remaining} day
              {stats.trial_days_remaining !== 1 ? "s" : ""} remaining
            </p>
            <p className="mt-0.5 text-sm text-neutral-400">
              Subscribe to keep your data after the trial ends.
            </p>
          </div>
          <Link href="/dashboard/billing">
            <Button variant="primary">Subscribe</Button>
          </Link>
        </div>
      )}

      {/* Expired / needs subscription banner */}
      {needsSub && (
        <div className="mt-6 flex items-center justify-between rounded-xl border border-yellow-500/20 bg-yellow-500/5 px-5 py-4">
          <div>
            <p className="font-medium text-yellow-400">
              {stats?.subscription_status === "cancelled"
                ? "Subscription cancelled"
                : "No active subscription"}
            </p>
            <p className="mt-0.5 text-sm text-neutral-400">
              Subscribe to access your conversations via MCP.
            </p>
          </div>
          <Link href="/dashboard/billing">
            <Button variant="primary">Subscribe</Button>
          </Link>
        </div>
      )}

      {/* Stat cards */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <p className="text-sm text-neutral-400">Conversations</p>
          <p className="mt-1 text-3xl font-bold">
            {stats?.total_conversations?.toLocaleString() ?? "0"}
          </p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-400">Messages</p>
          <p className="mt-1 text-3xl font-bold">
            {stats?.total_messages?.toLocaleString() ?? "0"}
          </p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-400">Uploads</p>
          <p className="mt-1 text-3xl font-bold">
            {stats?.total_uploads ?? 0}
          </p>
        </Card>
      </div>

      {/* MCP endpoint quick access */}
      {isActive && (
        <div className="mt-6">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-semibold">MCP Endpoint</h2>
                <code className="mt-1 block text-sm text-neutral-400">
                  https://mcp.chatrecall.ai
                </code>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={() =>
                    navigator.clipboard.writeText("https://mcp.chatrecall.ai")
                  }
                >
                  Copy
                </Button>
                <Link href="/guide">
                  <Button variant="secondary">Setup Guide</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Recent uploads */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent Uploads</h2>
          <Link href="/dashboard/upload">
            <Button variant="secondary">Upload New</Button>
          </Link>
        </div>

        {stats?.recent_uploads && stats.recent_uploads.length > 0 ? (
          <div className="mt-4 space-y-3">
            {stats.recent_uploads.map((upload) => (
              <Card key={upload.id}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-neutral-200">
                      {upload.filename}
                    </p>
                    <p className="mt-0.5 text-sm text-neutral-500">
                      {upload.conversations_imported} conversations &middot;{" "}
                      {upload.messages_imported.toLocaleString()} messages
                      &middot;{" "}
                      {new Date(upload.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      upload.status === "completed"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : upload.status === "failed"
                          ? "bg-red-500/10 text-red-400"
                          : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {upload.status}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-4">
            <Card>
              <h2 className="text-lg font-semibold">Getting started</h2>
              <p className="mt-2 text-sm text-neutral-400">
                Upload your ChatGPT export to get started. Go to ChatGPT
                Settings &gt; Data Controls &gt; Export Data, then upload the
                JSON file here.
              </p>
              <div className="mt-4">
                <Link href="/dashboard/upload">
                  <Button variant="primary">Upload Conversations</Button>
                </Link>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
