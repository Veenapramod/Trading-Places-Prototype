import { useMemo, useState } from "react";

const dialogueScenario = {
  title: "Tone at the Till: Live Dialogue",
  setup:
    "Roleplay a short exchange at the checkout. Swap roles between customer and manager to see how tone and word choice change the outcome.",
  lines: [
    {
      role: "customer",
      persona: "Aisha",
      text: "Hi, I'm back about the headphones. I was told they’d be exchanged, but service said they’d only repair them.",
      cue: "Name the emotion you hear before explaining process.",
      options: [
        {
          label: "Lead with apology and invite details",
          effect: {
            Understanding: 0.5,
            "Empathy signaled": 1,
            "Clarity of next steps": 0.5,
          },
        },
        {
          label: "Ask for receipt immediately",
          effect: {
            Understanding: -0.5,
            "Empathy signaled": -1,
            "Clarity of next steps": 0,
          },
        },
        {
          label: "Say 'policy is policy'",
          effect: {
            Understanding: -1,
            "Empathy signaled": -1,
            "Clarity of next steps": -0.5,
          },
        },
      ],
    },
    {
      role: "manager",
      persona: "Marcus",
      text: "I’m sorry you’ve had to come back and wait in the line. I want to understand what was promised so we can make it right.",
      cue: "Validate and invite clarity without defensiveness.",
      options: [
        {
          label: "Mirror back frustration and ask what was promised",
          effect: {
            Understanding: 0.5,
            "Empathy signaled": 1,
            "Clarity of next steps": 0.5,
          },
        },
        {
          label: "Jump to explaining store policy",
          effect: {
            Understanding: -0.5,
            "Empathy signaled": -0.5,
            "Clarity of next steps": 0.5,
          },
        },
        {
          label: "Offer to bring another staffer",
          effect: {
            Understanding: 0,
            "Empathy signaled": 0.5,
            "Clarity of next steps": 0,
          },
        },
      ],
    },
    {
      role: "customer",
      persona: "Aisha",
      text: "I just don’t want to be stuck waiting weeks. The store said I could swap today.",
      cue: "Listen for the need (time) not just the policy conflict.",
      options: [
        {
          label: "Name the need for speed and restate promise",
          effect: {
            Understanding: 1,
            "Empathy signaled": 0.5,
            "Clarity of next steps": 0.5,
          },
        },
        {
          label: "Offer a coupon but keep repair",
          effect: {
            Understanding: -0.5,
            "Empathy signaled": 0,
            "Clarity of next steps": 0.5,
          },
        },
        {
          label: "Say 'waiting is standard'",
          effect: {
            Understanding: -1,
            "Empathy signaled": -0.5,
            "Clarity of next steps": -0.5,
          },
        },
      ],
    },
    {
      role: "manager",
      persona: "Marcus",
      text: "Got it. Speed matters to you. We can either swap today for the same model, or repair and give you a charger on loan while you wait. Which feels better?",
      cue: "Offer choices and invite them to choose.",
      options: [
        {
          label: "Offer two options and ask which feels better",
          effect: {
            Understanding: 0.5,
            "Empathy signaled": 0.5,
            "Clarity of next steps": 1,
          },
        },
        {
          label: "Offer one option you prefer",
          effect: {
            Understanding: -0.5,
            "Empathy signaled": -0.5,
            "Clarity of next steps": 0.5,
          },
        },
        {
          label: "Delay decision and check with back office",
          effect: {
            Understanding: 0,
            "Empathy signaled": -0.5,
            "Clarity of next steps": -1,
          },
        },
      ],
    },
    {
      role: "customer",
      persona: "Aisha",
      text: "Let’s swap today. I can’t be without them this week.",
      cue: "Reflect back the choice to ensure alignment.",
      options: [
        {
          label: "Confirm swap and timeline out loud",
          effect: {
            Understanding: 0.5,
            "Empathy signaled": 0.5,
            "Clarity of next steps": 1,
          },
        },
        {
          label: "Nod and start typing without saying next steps",
          effect: {
            Understanding: -0.5,
            "Empathy signaled": -0.5,
            "Clarity of next steps": -1,
          },
        },
        {
          label: "Offer upsell while processing",
          effect: {
            Understanding: -0.5,
            "Empathy signaled": -0.5,
            "Clarity of next steps": 0,
          },
        },
      ],
    },
    {
      role: "manager",
      persona: "Marcus",
      text: "Great, I’ll process the exchange now. It will take about five minutes. I’ll also email a confirmation so you have it in writing.",
      cue: "Narrate next steps and timelines so trust stays high.",
      options: [
        {
          label: "Narrate steps with time and documentation",
          effect: {
            Understanding: 0.5,
            "Empathy signaled": 0.5,
            "Clarity of next steps": 1,
          },
        },
        {
          label: "Just say 'one sec' and walk away",
          effect: {
            Understanding: -1,
            "Empathy signaled": -1,
            "Clarity of next steps": -1,
          },
        },
        {
          label: "Ask another associate to handle without context",
          effect: {
            Understanding: -0.5,
            "Empathy signaled": -0.5,
            "Clarity of next steps": -0.5,
          },
        },
      ],
    },
  ],
  metrics: ["Understanding", "Empathy signaled", "Clarity of next steps"],
};

const scenarioLibrary = [
  {
    id: "return-line",
    title: "Weekend Rush: Return Dispute",
    context:
      "Crowded store on a Saturday afternoon. You’re juggling a line of customers while a return dispute escalates.",
    empathyFocus: ["Active listening", "Validating emotions", "De-escalation"],
    customer: {
      name: "Aisha (customer)",
      beats: [
        "Arrives frustrated: 'I was told these would be exchanged, not repaired.'",
        "Feels ignored as the line grows and staff whisper.",
        "Needs reassurance that policy won’t override her situation.",
      ],
    },
    manager: {
      name: "Marcus (manager on duty)",
      beats: [
        "Balancing policy with flexibility under pressure.",
        "Signals understanding before explaining options.",
        "Offers a path that keeps dignity intact for everyone in line.",
      ],
    },
    agreement: [
      "Acknowledge the wait and frustration before talking policy.",
      "Offer two options that respect the customer's time.",
      "Narrate next steps so the line hears calm, not conflict.",
    ],
  },
  {
    id: "accessibility",
    title: "Accessibility Request: Meeting Setup",
    context:
      "Customer needs a quiet space for a consultation call; the only available room is booked for an internal huddle.",
    empathyFocus: ["Assume positive intent", "Shared problem-solving", "Transparency"],
    customer: {
      name: "Dev (customer)",
      beats: [
        "States noise triggers migraines and asks for a private spot.",
        "Feels brushed off when told everything is booked.",
        "Wants to know you’re trying rather than being redirected.",
      ],
    },
    manager: {
      name: "Sam (floor lead)",
      beats: [
        "Explains constraints without defensiveness.",
        "Invites compromise: short-term alternative plus a timed swap.",
        "Checks comfort level and follows up after the call.",
      ],
    },
    agreement: [
      "Use 'let’s solve this together' language.",
      "Offer a near-term fix and a concrete time for the better option.",
      "Follow up to confirm the accommodation met the need.",
    ],
  },
];

function EmpathyGauge({ label, score, onChange }) {
  const tone =
    score >= 4 ? "bg-emerald-500" : score >= 3 ? "bg-amber-400" : "bg-rose-500";
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-slate-700">{label}</h4>
        <span className="text-xs font-semibold text-slate-500">
          Empathy level: {score}/5
        </span>
      </div>
      <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${tone} transition-all duration-200`}
          style={{ width: `${(score / 5) * 100}%` }}
        />
      </div>
      <input
        aria-label={`${label} empathy level`}
        type="range"
        min="1"
        max="5"
        step="1"
        value={score}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[var(--brand-blue)]"
      />
      <p className="text-xs text-slate-500 mt-2">
        Shift the slider after you roleplay to reflect how understood the other
        person would feel.
      </p>
    </div>
  );
}

function Beats({ title, beats }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-4">
      <h4 className="text-sm font-semibold text-slate-700 mb-3">{title}</h4>
      <ul className="space-y-2 text-sm text-slate-600">
        {beats.map((line, idx) => (
          <li key={idx} className="flex gap-3 items-start">
            <span className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-blue)]" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MetricBar({ label, value }) {
  const tone =
    value >= 4 ? "bg-emerald-500" : value >= 3 ? "bg-amber-400" : "bg-rose-500";
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <span>{label}</span>
        <span>{value}/5</span>
      </div>
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div
          className={`h-full ${tone} transition-all duration-200`}
          style={{ width: `${(value / 5) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default function Scenario() {
  const [activeId, setActiveId] = useState(scenarioLibrary[0].id);
  const [notes, setNotes] = useState("");
  const [scores, setScores] = useState(() =>
    Object.fromEntries(
      scenarioLibrary.map((s) => [s.id, { customer: 3, manager: 3 }])
    )
  );
  const [activeDialogueRole, setActiveDialogueRole] = useState("manager");
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [dialogueSelections, setDialogueSelections] = useState(
    Array(dialogueScenario.lines.length).fill(null)
  );
  const [dialogueScores, setDialogueScores] = useState({
    Understanding: 3,
    "Empathy signaled": 3,
    "Clarity of next steps": 3,
  });

  const scenario = useMemo(
    () => scenarioLibrary.find((item) => item.id === activeId) ?? scenarioLibrary[0],
    [activeId]
  );

  const dialogueLine = dialogueScenario.lines[dialogueIndex];
  const dialogueProgress = Math.round(
    ((dialogueIndex + 1) / dialogueScenario.lines.length) * 100
  );
  const connectionScore =
    Math.round(
      (Object.values(dialogueScores).reduce((a, b) => a + b, 0) /
        dialogueScenario.metrics.length) *
        10
    ) / 10;

  const updateScore = (role, value) => {
    setScores((prev) => ({
      ...prev,
      [scenario.id]: { ...prev[scenario.id], [role]: value },
    }));
  };

  const recalcDialogueScores = (selections) => {
    const base = { Understanding: 3, "Empathy signaled": 3, "Clarity of next steps": 3 };
    selections.forEach((choice, idx) => {
      if (choice == null) return;
      const effect = dialogueScenario.lines[idx].options[choice].effect;
      Object.entries(effect).forEach(([metric, delta]) => {
        base[metric] = Math.min(5, Math.max(1, base[metric] + delta));
      });
    });
    setDialogueScores(base);
  };

  const handleSelectOption = (optionIdx) => {
    setDialogueSelections((prev) => {
      const next = [...prev];
      next[dialogueIndex] = optionIdx;
      recalcDialogueScores(next);
      return next;
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-[var(--brand-blue)]/20 rounded-2xl flex items-center justify-center neon-glow">
          <span className="text-2xl">🎭</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-[var(--brand-blue)] uppercase tracking-[0.08em]">
            Roleplay Scenarios
          </p>
          <h1 className="text-3xl font-bold text-[var(--brand-dark)]">
            Practice empathy as a customer and a manager
          </h1>
          <p className="text-slate-600 mt-2">
            Swap perspectives, set empathy targets, and script the beats for each
            role so both people feel heard.
          </p>
        </div>
      </div>

      <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 mb-8 space-y-5">
        <div className="flex flex-wrap items-center gap-3 justify-between">
          <div>
            <p className="text-xs font-semibold text-[var(--brand-pink)] uppercase tracking-[0.08em]">
              Dialogue practice
            </p>
            <h2 className="text-xl font-bold text-[var(--brand-dark)]">
              {dialogueScenario.title}
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-3xl">
              {dialogueScenario.setup}
            </p>
          </div>
          <div className="flex gap-2">
            {["customer", "manager"].map((role) => (
              <button
                key={role}
                onClick={() => setActiveDialogueRole(role)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
                  activeDialogueRole === role
                    ? "bg-[var(--brand-dark)] text-white shadow-lg neon-glow"
                    : "bg-white text-[var(--brand-dark)] border-slate-200 hover:border-[var(--brand-blue)]"
                }`}
              >
                Play as {role}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 p-5 bg-[var(--brand-blue)]/5 shadow-[0_14px_38px_-20px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-semibold text-slate-500">
                Line {dialogueIndex + 1} of {dialogueScenario.lines.length}
              </div>
              <div className="w-40 h-2 bg-white/70 rounded-full overflow-hidden border border-white/60">
                <div
                  className="h-full bg-[var(--brand-blue)] transition-all duration-200"
                  style={{ width: `${dialogueProgress}%` }}
                />
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-2 text-[var(--brand-dark)]">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/80 border border-white/60">
                  You’re speaking as: {activeDialogueRole === "manager" ? "Marcus (manager)" : "Aisha (customer)"}
                </span>
                <span className="text-xs text-slate-600">
                  Match tone to empathy cues as you deliver the next line.
                </span>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      dialogueLine.role === "manager"
                        ? "bg-[var(--brand-blue)]/15 text-[var(--brand-dark)]"
                        : "bg-[var(--brand-pink)]/15 text-[var(--brand-dark)]"
                    }`}
                  >
                    {dialogueLine.persona} — {dialogueLine.role}
                  </span>
                  {dialogueIndex === dialogueScenario.lines.length - 1 && (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--brand-pink)]">
                      Closing the loop
                    </span>
                  )}
                </div>
                <p className="text-lg font-semibold text-[var(--brand-dark)] leading-relaxed">
                  “{dialogueLine.text}”
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  Empathy cue: {dialogueLine.cue}
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-semibold text-slate-600">
                    Choose your response approach:
                  </p>
                  <div className="space-y-2">
                    {dialogueLine.options.map((opt, idx) => {
                      const isActive = dialogueSelections[dialogueIndex] === idx;
                      return (
                        <button
                          key={opt.label}
                          onClick={() => handleSelectOption(idx)}
                          className={`w-full text-left px-4 py-3 rounded-xl border transition-all ${
                            isActive
                              ? "bg-[var(--brand-blue)]/10 border-[var(--brand-blue)] text-[var(--brand-dark)] shadow-md"
                              : "bg-white border-slate-200 text-slate-700 hover:border-[var(--brand-blue)]"
                          }`}
                        >
                          <span className="block text-sm font-semibold">{opt.label}</span>
                          <span className="block text-xs text-slate-600">
                            Impact → U:{opt.effect.Understanding > 0 ? "+" : ""}
                            {opt.effect.Understanding} | E:
                            {opt.effect["Empathy signaled"] > 0 ? "+" : ""}
                            {opt.effect["Empathy signaled"]} | C:
                            {opt.effect["Clarity of next steps"] > 0 ? "+" : ""}
                            {opt.effect["Clarity of next steps"]}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    setDialogueIndex((prev) =>
                      prev + 1 < dialogueScenario.lines.length ? prev + 1 : prev
                    )
                  }
                  disabled={
                    dialogueIndex === dialogueScenario.lines.length - 1 ||
                    dialogueSelections[dialogueIndex] == null
                  }
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    dialogueIndex === dialogueScenario.lines.length - 1 ||
                    dialogueSelections[dialogueIndex] == null
                      ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                      : "bg-[var(--brand-blue)] text-[var(--brand-dark)] shadow-md hover:scale-[1.01]"
                  }`}
                >
                  Next line
                </button>
                <button
                  onClick={() => {
                    setDialogueIndex(0);
                    const reset = Array(dialogueScenario.lines.length).fill(null);
                    setDialogueSelections(reset);
                    setDialogueScores({
                      Understanding: 3,
                      "Empathy signaled": 3,
                      "Clarity of next steps": 3,
                    });
                  }}
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-white text-[var(--brand-dark)] border border-slate-200 hover:border-[var(--brand-blue)]"
                >
                  Restart dialogue
                </button>
                {dialogueIndex === dialogueScenario.lines.length - 1 && (
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    ✓ Conversation complete — rate your delivery below.
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[var(--brand-dark)]">
              How did you sound?
            </h3>
            <p className="text-sm text-slate-600">
              After finishing the script, your choices update the signals you sent.
              Replay and pick different options to see empathy move.
            </p>
            <div className="space-y-4">
              {dialogueScenario.metrics.map((metric) => (
                <MetricBar key={metric} label={metric} value={dialogueScores[metric]} />
              ))}
            </div>
            <div className="rounded-2xl border border-dashed border-[var(--brand-blue)]/60 p-4 bg-[var(--brand-blue)]/10 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-[var(--brand-dark)]">
                  Your portrayal score
                </span>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white text-[var(--brand-dark)] border border-slate-200">
                  {connectionScore}/5 connection
                </span>
              </div>
              <div className="space-y-2">
                {dialogueScenario.metrics.map((metric) => (
                  <MetricBar key={metric} label={metric} value={dialogueScores[metric]} />
                ))}
              </div>
              <p className="text-xs text-slate-600">
                If a bar is low, replay that line focusing on the empathy cue to raise
                the score.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {scenarioLibrary.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            className={`px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
              item.id === scenario.id
                ? "bg-[var(--brand-dark)] text-white shadow-lg neon-glow"
                : "bg-white text-[var(--brand-dark)] border-slate-200 hover:border-[var(--brand-blue)]"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-[var(--brand-blue)] uppercase tracking-[0.08em]">
                  Context
                </p>
                <h2 className="text-2xl font-bold text-[var(--brand-dark)]">
                  {scenario.title}
                </h2>
                <p className="text-slate-600 mt-2 leading-relaxed">
                  {scenario.context}
                </p>
              </div>
              <div className="hidden md:flex gap-2">
                {scenario.empathyFocus.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[var(--brand-blue)]/15 text-[var(--brand-dark)] text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Beats title={scenario.customer.name} beats={scenario.customer.beats} />
              <Beats title={scenario.manager.name} beats={scenario.manager.beats} />
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">
                Empathy check-ins
              </h3>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--brand-pink)] text-white">
                Measure how understood each role feels
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <EmpathyGauge
                label="Customer perspective"
                score={scores[scenario.id].customer}
                onChange={(value) => updateScore("customer", value)}
              />
              <EmpathyGauge
                label="Manager perspective"
                score={scores[scenario.id].manager}
                onChange={(value) => updateScore("manager", value)}
              />
            </div>
            <div className="rounded-2xl border border-dashed border-[var(--brand-blue)]/50 p-4 bg-[var(--brand-blue)]/5">
              <p className="text-sm font-semibold text-[var(--brand-dark)] mb-2">
                Shared agreements to model aloud
              </p>
              <ul className="grid sm:grid-cols-3 gap-2 text-sm text-slate-700">
                {scenario.agreement.map((line, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 bg-white rounded-xl border border-slate-100 p-3 shadow-[0_6px_16px_-12px_rgba(0,0,0,0.25)]"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-pink)]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5">
            <h3 className="text-lg font-bold text-[var(--brand-dark)]">
              Roleplay prompts
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Read these aloud in pairs. Swap roles after the first pass and
              adjust the empathy sliders.
            </p>
            <div className="mt-4 space-y-3">
              <div className="p-4 rounded-2xl bg-[var(--brand-blue)]/10 border border-[var(--brand-blue)]/40">
                <p className="text-xs font-semibold text-[var(--brand-blue)] uppercase tracking-[0.08em]">
                  As the customer
                </p>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>State your need in one sentence.</li>
                  <li>Share an emotion using “I feel…”</li>
                  <li>Ask for one concrete action right now.</li>
                </ul>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--brand-pink)]/10 border border-[var(--brand-pink)]/40">
                <p className="text-xs font-semibold text-[var(--brand-pink)] uppercase tracking-[0.08em]">
                  As the manager
                </p>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>Mirror back what you heard before offering solutions.</li>
                  <li>Offer two options; check which feels better.</li>
                  <li>Close with a time-bound next step.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5 space-y-3">
            <h3 className="text-lg font-bold text-[var(--brand-dark)]">
              Reflection notes
            </h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={6}
              placeholder="What shifted when you swapped roles? Where did empathy rise or drop?"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/30 text-sm text-slate-700 p-3 outline-none"
            />
            <p className="text-xs text-slate-500">
              Capture phrases that made the other role feel seen. These become
              reusable scripts for real interactions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
