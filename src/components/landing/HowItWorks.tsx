const steps = [
  {
    step: "1",
    title: "Export your data",
    description:
      "Download your ChatGPT conversation history from Settings > Data Controls > Export Data.",
  },
  {
    step: "2",
    title: "Upload to Chat Recall",
    description:
      "Upload the JSON export. We parse, index, and make every message full-text searchable.",
  },
  {
    step: "3",
    title: "Connect to Claude",
    description:
      "Add Chat Recall as an MCP connector in Claude. Search your history directly from conversations.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Three steps to total recall
        </h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-xl font-bold text-emerald-400">
                {s.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
