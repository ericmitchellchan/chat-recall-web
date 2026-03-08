"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Card from "@/components/ui/Card";
import { useState } from "react";

function CopyBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="group relative">
      <pre className="overflow-x-auto rounded-lg bg-neutral-950 p-4 text-xs leading-relaxed text-neutral-300">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-400 opacity-0 transition hover:text-neutral-200 group-hover:opacity-100"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default function GuidePage() {
  const { data: session } = useSession();

  const endpoint = session
    ? "https://mcp.chatrecall.ai"
    : "https://mcp.chatrecall.ai";

  const claudeDesktopConfig = `{
  "mcpServers": {
    "chat-recall": {
      "url": "${endpoint}"
    }
  }
}`;

  const claudeCodeConfig = `{
  "mcpServers": {
    "chat-recall": {
      "url": "${endpoint}"
    }
  }
}`;

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300"
      >
        &larr; Back to home
      </Link>

      <h1 className="text-3xl font-bold">Connect to Claude</h1>
      <p className="mt-2 text-neutral-400">
        Follow these steps to connect your Chat Recall history to Claude via
        MCP. Once connected, Claude can search your full conversation history
        automatically.
      </p>

      <div className="mt-10 space-y-8">
        {/* Step 1 */}
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-bold text-emerald-400">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">Upload your history</h2>
              <p className="mt-1 text-sm text-neutral-400">
                If you haven&apos;t already, export your ChatGPT data and upload
                it to Chat Recall.
              </p>
              <div className="mt-3">
                <Link
                  href="/dashboard/upload"
                  className="inline-flex items-center gap-2 rounded-lg bg-neutral-800 px-4 py-2 text-sm font-medium transition hover:bg-neutral-700"
                >
                  Go to Upload &rarr;
                </Link>
              </div>
            </div>
          </div>
        </Card>

        {/* Step 2: Claude.ai */}
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-bold text-emerald-400">
              2a
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">
                Option A: Claude.ai (web)
              </h2>
              <p className="mt-1 text-sm text-neutral-400">
                Connect Chat Recall as an MCP integration in Claude.ai.
              </p>
              <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-neutral-400">
                <li>
                  Open{" "}
                  <span className="text-neutral-200">
                    Claude.ai &gt; Settings &gt; Integrations
                  </span>
                </li>
                <li>
                  Click{" "}
                  <span className="text-neutral-200">
                    Add Integration
                  </span>
                </li>
                <li>
                  Enter your Chat Recall MCP endpoint URL:
                </li>
              </ol>
              <div className="mt-3">
                <CopyBlock code={endpoint} />
              </div>
              <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-neutral-400" start={4}>
                <li>
                  Authorize the connection when prompted
                </li>
                <li>
                  You should see a green{" "}
                  <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-xs text-emerald-400">
                    Chat Recall connected
                  </span>{" "}
                  badge
                </li>
              </ol>
            </div>
          </div>
        </Card>

        {/* Step 2b: Claude Code */}
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-bold text-emerald-400">
              2b
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">
                Option B: Claude Code (CLI)
              </h2>
              <p className="mt-1 text-sm text-neutral-400">
                Add Chat Recall to your Claude Code MCP configuration.
              </p>
              <p className="mt-3 text-sm text-neutral-400">
                Add this to your{" "}
                <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-xs text-neutral-300">
                  ~/.claude/settings.json
                </code>
                :
              </p>
              <div className="mt-3">
                <CopyBlock code={claudeCodeConfig} />
              </div>
            </div>
          </div>
        </Card>

        {/* Step 2c: Claude Desktop */}
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-bold text-emerald-400">
              2c
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">
                Option C: Claude Desktop
              </h2>
              <p className="mt-1 text-sm text-neutral-400">
                Add Chat Recall to your Claude Desktop configuration.
              </p>
              <p className="mt-3 text-sm text-neutral-400">
                Add this to your{" "}
                <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-xs text-neutral-300">
                  claude_desktop_config.json
                </code>
                :
              </p>
              <div className="mt-3">
                <CopyBlock code={claudeDesktopConfig} />
              </div>
              <p className="mt-2 text-xs text-neutral-500">
                File location: macOS{" "}
                <code className="text-neutral-400">
                  ~/Library/Application Support/Claude/claude_desktop_config.json
                </code>
                , Windows{" "}
                <code className="text-neutral-400">
                  %APPDATA%\Claude\claude_desktop_config.json
                </code>
              </p>
            </div>
          </div>
        </Card>

        {/* Step 3: Verify */}
        <Card>
          <div className="flex items-start gap-4">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-bold text-emerald-400">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold">Verify the connection</h2>
              <p className="mt-1 text-sm text-neutral-400">
                Try asking Claude something you discussed in ChatGPT. For
                example:
              </p>
              <div className="mt-3">
                <CopyBlock code={`"What did I discuss with ChatGPT about [your topic]?"`} />
              </div>
              <p className="mt-3 text-sm text-neutral-400">
                Claude should pull context from your Chat Recall history with
                source tags showing where the information came from.
              </p>
            </div>
          </div>
        </Card>

        {/* Troubleshooting */}
        <Card>
          <h2 className="text-lg font-semibold">Troubleshooting</h2>
          <div className="mt-4 space-y-4 text-sm text-neutral-400">
            <div>
              <p className="font-medium text-neutral-300">
                Claude says it can&apos;t find Chat Recall tools
              </p>
              <p className="mt-1">
                Make sure the MCP endpoint URL is correct and you&apos;ve
                authorized the connection. Try disconnecting and reconnecting.
              </p>
            </div>
            <div>
              <p className="font-medium text-neutral-300">
                Authorization fails
              </p>
              <p className="mt-1">
                Check that your Chat Recall subscription is active. Expired
                trials return a 403 error.{" "}
                <Link
                  href="/dashboard"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  Check your account status
                </Link>
                .
              </p>
            </div>
            <div>
              <p className="font-medium text-neutral-300">
                No results returned
              </p>
              <p className="mt-1">
                Ensure you&apos;ve uploaded your ChatGPT export. Check
                the{" "}
                <Link
                  href="/dashboard"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  dashboard
                </Link>{" "}
                to confirm conversations are imported.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
