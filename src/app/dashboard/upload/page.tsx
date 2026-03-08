"use client";

import { useState, useCallback, useRef } from "react";
import { useSession } from "next-auth/react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

type UploadState = "idle" | "dragging" | "uploading" | "processing" | "done" | "error";

export default function UploadPage() {
  const { data: session } = useSession();
  const [state, setState] = useState<UploadState>("idle");
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<{ conversations: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validTypes = [
    "application/json",
    "application/zip",
    "application/x-zip-compressed",
  ];
  const validExtensions = [".json", ".zip"];

  function isValidFile(f: File): boolean {
    if (validTypes.includes(f.type)) return true;
    return validExtensions.some((ext) => f.name.toLowerCase().endsWith(ext));
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setState("idle");
    const dropped = e.dataTransfer.files[0];
    if (!dropped) return;
    if (!isValidFile(dropped)) {
      setError("Please upload a .json or .zip file from your ChatGPT export.");
      setState("error");
      return;
    }
    setFile(dropped);
    setError(null);
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = e.target.files?.[0];
      if (!selected) return;
      if (!isValidFile(selected)) {
        setError("Please upload a .json or .zip file from your ChatGPT export.");
        setState("error");
        return;
      }
      setFile(selected);
      setError(null);
    },
    []
  );

  async function handleUpload() {
    if (!file || !session) return;

    setState("uploading");
    setProgress(0);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:8081";

      const res = await fetch(`${apiUrl}/upload`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${(session as any).accessToken || ""}`,
        },
      });

      if (!res.ok) {
        const body = await res.text();
        throw new Error(body || `Upload failed: ${res.status}`);
      }

      setState("processing");
      setProgress(100);

      const data = await res.json();
      setResult({ conversations: data.conversations_imported ?? 0 });
      setState("done");
    } catch (err: any) {
      setError(err.message || "Upload failed. Please try again.");
      setState("error");
    }
  }

  function reset() {
    setState("idle");
    setFile(null);
    setProgress(0);
    setError(null);
    setResult(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Upload</h1>
      <p className="mt-1 text-sm text-neutral-400">
        Import your ChatGPT conversation history.
      </p>

      <div className="mt-8 max-w-2xl">
        {/* Instructions */}
        <Card className="mb-6">
          <h2 className="font-semibold">How to export from ChatGPT</h2>
          <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-neutral-400">
            <li>
              Go to{" "}
              <span className="text-neutral-200">
                ChatGPT &gt; Settings &gt; Data Controls
              </span>
            </li>
            <li>
              Click{" "}
              <span className="text-neutral-200">Export Data</span>
            </li>
            <li>Wait for the email from OpenAI with a download link</li>
            <li>Download the .zip file and upload it here</li>
          </ol>
        </Card>

        {/* Drop zone */}
        {state !== "done" && (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setState("dragging");
            }}
            onDragLeave={() => setState(file ? "idle" : "idle")}
            onDrop={handleDrop}
            onClick={() => inputRef.current?.click()}
            className={`cursor-pointer rounded-xl border-2 border-dashed p-12 text-center transition ${
              state === "dragging"
                ? "border-emerald-500 bg-emerald-500/5"
                : error
                  ? "border-red-500/50 bg-red-500/5"
                  : "border-neutral-700 hover:border-neutral-500"
            }`}
          >
            <input
              ref={inputRef}
              type="file"
              accept=".json,.zip"
              onChange={handleFileSelect}
              className="hidden"
            />

            {state === "uploading" || state === "processing" ? (
              <div>
                <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-neutral-600 border-t-emerald-500" />
                <p className="mt-4 text-sm text-neutral-300">
                  {state === "uploading"
                    ? "Uploading..."
                    : "Processing conversations..."}
                </p>
                <div className="mx-auto mt-3 h-1.5 w-48 overflow-hidden rounded-full bg-neutral-800">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ) : file ? (
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-2xl text-emerald-400">
                  {file.name.endsWith(".zip") ? "\u{1F4E6}" : "\u{1F4C4}"}
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-200">
                  {file.name}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  {(file.size / 1024 / 1024).toFixed(1)} MB
                </p>
              </div>
            ) : (
              <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-2xl text-neutral-400">
                  {"\u2191"}
                </div>
                <p className="mt-3 text-sm font-medium text-neutral-200">
                  Drop your ChatGPT export here
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  or click to browse &mdash; accepts .json or .zip
                </p>
              </div>
            )}
          </div>
        )}

        {/* Error message */}
        {error && (
          <p className="mt-3 text-sm text-red-400">{error}</p>
        )}

        {/* Upload button */}
        {file && state !== "uploading" && state !== "processing" && state !== "done" && (
          <div className="mt-4 flex gap-3">
            <Button onClick={handleUpload}>Upload</Button>
            <Button variant="secondary" onClick={reset}>
              Cancel
            </Button>
          </div>
        )}

        {/* Success */}
        {state === "done" && result && (
          <Card className="mt-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xl text-emerald-400">
                {"\u2713"}
              </div>
              <div>
                <h3 className="font-semibold text-neutral-100">
                  Import complete
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  {result.conversations.toLocaleString()} conversations imported
                  and indexed. They&apos;re now searchable via your MCP
                  connection.
                </p>
                <div className="mt-4 flex gap-3">
                  <Button onClick={reset}>Upload another</Button>
                  <Button
                    variant="secondary"
                    onClick={() => (window.location.href = "/dashboard")}
                  >
                    Go to Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
