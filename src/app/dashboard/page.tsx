import Card from "@/components/ui/Card";

export const metadata = {
  title: "Dashboard — Chat Recall",
};

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-1 text-sm text-neutral-400">
        Your conversation history at a glance.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <p className="text-sm text-neutral-400">Conversations</p>
          <p className="mt-1 text-3xl font-bold">—</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-400">Messages</p>
          <p className="mt-1 text-3xl font-bold">—</p>
        </Card>
        <Card>
          <p className="text-sm text-neutral-400">Sources</p>
          <p className="mt-1 text-3xl font-bold">—</p>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <h2 className="text-lg font-semibold">Getting started</h2>
          <p className="mt-2 text-sm text-neutral-400">
            Upload your ChatGPT export to get started. Go to ChatGPT Settings
            &gt; Data Controls &gt; Export Data, then upload the JSON file here.
          </p>
        </Card>
      </div>
    </div>
  );
}
