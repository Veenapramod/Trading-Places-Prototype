import React from "react";
import jsPDF from "jspdf";

export default function Report() {
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Trading Places - Empathy Report", 14, 20);
    doc.setFontSize(12);
    doc.text("Snapshot of your roleplay practice", 14, 30);
    doc.text("- Scenario practice highlights", 14, 45);
    doc.text("- Dialogue empathy signals", 14, 55);
    doc.text("- Culture pulse notes", 14, 65);
    doc.save("trading-places-report.pdf");
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold text-[var(--brand-dark)] mb-4">
        Report & PDF Export
      </h1>
      <p className="text-gray-700 mb-6">
        Download a quick PDF snapshot of your practice. Expand later with live metrics.
      </p>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-[var(--brand-dark)]">
            What’s included
          </h2>
          <ul className="list-disc pl-4 text-sm text-slate-700 space-y-1 mt-2">
            <li>Scenario highlights and agreements practiced</li>
            <li>Dialogue empathy signals and choices</li>
            <li>Culture pulse reflections you capture</li>
          </ul>
        </div>
        <button
          onClick={handleDownload}
          className="px-5 py-3 rounded-xl bg-[var(--brand-blue)] text-[var(--brand-dark)] font-semibold shadow-md hover:scale-[1.01]"
        >
          Download PDF
        </button>
        <p className="text-xs text-slate-500">
          This lightweight export uses client-side PDF generation. Replace with a
          server export when ready.
        </p>
      </div>
    </div>
  );
}
