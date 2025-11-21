import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/trading-places-simulator-1.png";

const quickLinks = [
  { to: "/scenario", label: "Run a scenario", tone: "bg-[var(--brand-blue)] text-[var(--brand-dark)]" },
  { to: "/workspace/report", label: "Download report", tone: "bg-[var(--brand-pink)] text-white" },
  { to: "/workspace/pulse", label: "Culture pulse", tone: "bg-white text-[var(--brand-dark)] border border-[var(--brand-blue)]" },
];

const signals = [
  { title: "Understanding", value: "4.2/5", desc: "You mirrored needs in last dialogue loop." },
  { title: "Empathy signaled", value: "4.0/5", desc: "Tone choices reduced friction at the till." },
  { title: "Clarity", value: "4.5/5", desc: "You narrated next steps and timelines." },
];

const timeline = [
  { label: "Today", item: "Roleplayed return dispute with de-escalation" },
  { label: "Yesterday", item: "Captured culture pulse notes on clarity" },
  { label: "Mon", item: "Exported PDF snapshot for team review" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--brand-bg)] pt-24 pb-16 px-6">
      <div className="rounded-3xl bg-gradient-to-r from-[var(--brand-dark)] to-[#00505d] text-white p-8 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Trading Places Logo"
            className="w-16 h-16 object-contain neon-glow"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-[var(--brand-blue)] font-semibold">
              Empathy studio
            </p>
            <h1 className="text-4xl font-bold">Trading Places Dashboard</h1>
            <p className="text-sm text-white/80 mt-2 max-w-2xl">
              Track your practice, jump into scenarios, and export a report when you’re ready to share progress.
            </p>
          </div>
        </div>
        <Link
          to="/workspace/report"
          className="px-5 py-3 rounded-xl bg-white text-[var(--brand-dark)] font-semibold shadow-md hover:scale-[1.02]"
        >
          Export PDF
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-[var(--brand-dark)]">Practice signals</h2>
              <Link
                to="/scenario"
                className="text-sm font-semibold text-[var(--brand-blue)] hover:underline"
              >
                Jump to scenario →
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {signals.map((sig) => (
                <div
                  key={sig.title}
                  className="rounded-2xl border border-slate-200 bg-[var(--brand-blue)]/5 p-4 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.35)]"
                >
                  <p className="text-xs uppercase tracking-[0.08em] text-[var(--brand-dark)] font-semibold">
                    {sig.title}
                  </p>
                  <p className="text-2xl font-bold text-[var(--brand-dark)] mt-2">
                    {sig.value}
                  </p>
                  <p className="text-sm text-slate-600 mt-1">{sig.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6">
            <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-4">Recent moves</h2>
            <div className="space-y-3">
              {timeline.map((entry) => (
                <div
                  key={entry.item}
                  className="flex gap-3 items-start border border-slate-100 rounded-2xl p-4 bg-[var(--brand-blue)]/5"
                >
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[var(--brand-dark)] border border-slate-200">
                    {entry.label}
                  </span>
                  <p className="text-sm text-slate-700">{entry.item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5">
            <h3 className="text-lg font-bold text-[var(--brand-dark)]">Quick actions</h3>
            <p className="text-sm text-slate-600 mt-1">Move between the core areas of the workspace.</p>
            <div className="flex flex-col gap-3 mt-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-4 py-3 rounded-xl font-semibold shadow-sm hover:scale-[1.01] transition ${item.tone}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[var(--brand-blue)]/15 to-white border border-[var(--brand-blue)]/30 p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.08em] font-semibold text-[var(--brand-dark)]">
              Culture pulse
            </p>
            <h4 className="text-lg font-bold text-[var(--brand-dark)] mt-1">
              Pick a focus before you roleplay
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• Lead with curiosity → ask one clarifying question.</li>
              <li>• Signal empathy → mirror an emotion before offering options.</li>
              <li>• State clarity → narrate the next two steps out loud.</li>
            </ul>
            <Link
              to="/workspace/pulse"
              className="inline-block mt-4 text-sm font-semibold text-[var(--brand-blue)] hover:underline"
            >
              See pulse guide →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
