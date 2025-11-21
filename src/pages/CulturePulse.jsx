export default function CulturePulse() {
  const signals = [
    { title: "Curiosity", description: "Ask for context before assuming intent." },
    { title: "Inclusion", description: "Invite quieter voices to share perspectives." },
    { title: "Clarity", description: "State next steps and timelines out loud." },
  ];

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <p className="text-xs font-semibold text-[var(--brand-blue)] uppercase tracking-[0.08em]">
          Culture pulse
        </p>
        <h1 className="text-3xl font-bold text-[var(--brand-dark)]">Understanding Culture Pulse</h1>
        <p className="text-slate-600 mt-2">
          Track the behaviors that keep teams psychologically safe. Use these signals
          alongside your scenarios.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {signals.map((signal) => (
          <div
            key={signal.title}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]"
          >
            <h3 className="text-lg font-semibold text-[var(--brand-dark)]">{signal.title}</h3>
            <p className="text-sm text-slate-600 mt-2">{signal.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-[var(--brand-blue)]/60 bg-[var(--brand-blue)]/10 p-5 space-y-3">
        <h3 className="text-lg font-semibold text-[var(--brand-dark)]">
          How to use this
        </h3>
        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>Before a scenario, pick one signal to emphasize.</li>
          <li>During dialogue, note phrases that raise or lower that signal.</li>
          <li>Afterward, capture a short reflection to build team norms.</li>
        </ul>
      </div>
    </div>
  );
}
