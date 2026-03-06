const features = [
  {
    title: "Full-Text Search",
    description:
      "Search across thousands of conversations instantly. Find that one answer from months ago in seconds.",
    icon: "&#x1F50D;",
  },
  {
    title: "Thread Organization",
    description:
      "Group related conversations into threads. Keep your research, decisions, and context organized.",
    icon: "&#x1F9F5;",
  },
  {
    title: "Multi-Source Import",
    description:
      "Import from ChatGPT, Claude Code, local files, and Notion. All your AI conversations in one place.",
    icon: "&#x1F4E5;",
  },
  {
    title: "MCP Integration",
    description:
      "Connect directly to Claude via MCP. Search your history right from your AI conversations.",
    icon: "&#x26A1;",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Everything you need to remember
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
          Chat Recall indexes your entire conversation history and makes it
          searchable from any AI tool.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-6"
            >
              <span
                className="text-2xl"
                dangerouslySetInnerHTML={{ __html: f.icon }}
              />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
