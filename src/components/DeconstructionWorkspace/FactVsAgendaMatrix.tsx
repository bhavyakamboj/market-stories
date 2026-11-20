import React, { useState } from 'react';
import { DeconstructedFact } from '../../types';
import { CheckCircle, AlertOctagon, HelpCircle, FileCheck2, Filter, ExternalLink } from 'lucide-react';

interface Props {
  facts: DeconstructedFact[];
}

export const FactVsAgendaMatrix: React.FC<Props> = ({ facts }) => {
  const [filter, setFilter] = useState<'all' | 'misleading_framing' | 'debunked' | 'selective_truth'>('all');

  const filteredFacts = filter === 'all' ? facts : facts.filter((f) => f.verdict === filter);

  const getVerdictBadge = (verdict: DeconstructedFact['verdict']) => {
    switch (verdict) {
      case 'debunked':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
            <AlertOctagon className="w-3.5 h-3.5" /> Debunked By Hard Data
          </span>
        );
      case 'misleading_framing':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <HelpCircle className="w-3.5 h-3.5" /> Misleading Framing / Spin
          </span>
        );
      case 'selective_truth':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
            <FileCheck2 className="w-3.5 h-3.5" /> Cherry-Picked / Selective
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <CheckCircle className="w-3.5 h-3.5" /> Factual & Supported
          </span>
        );
    }
  };

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-slate-800 gap-3">
        <div>
          <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
            Deconstruction Grid
          </span>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            The Agenda vs Fact Matrix
          </h3>
          <p className="text-xs text-slate-400">
            Side-by-side audit of sensationalized narratives against verifiable primary sources.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 rounded-lg border transition-colors ${
              filter === 'all'
                ? 'bg-blue-600/30 border-blue-500 text-blue-200 font-bold'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
            }`}
          >
            All ({facts.length})
          </button>
          <button
            onClick={() => setFilter('misleading_framing')}
            className={`px-2.5 py-1 rounded-lg border transition-colors ${
              filter === 'misleading_framing'
                ? 'bg-amber-600/30 border-amber-500 text-amber-200 font-bold'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
            }`}
          >
            Misleading
          </button>
          <button
            onClick={() => setFilter('debunked')}
            className={`px-2.5 py-1 rounded-lg border transition-colors ${
              filter === 'debunked'
                ? 'bg-rose-600/30 border-rose-500 text-rose-200 font-bold'
                : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
            }`}
          >
            Debunked
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredFacts.map((fact) => (
          <div
            key={fact.id}
            className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 transition-all hover:border-slate-700 space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="text-sm font-semibold text-slate-200 font-mono">
                Claim: "{fact.claimOrHeadline}"
              </h4>
              {getVerdictBadge(fact.verdict)}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {/* Media Spin & Agenda Column */}
              <div className="p-3 rounded-lg bg-rose-950/10 border border-rose-500/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-rose-400 font-bold block">
                  Media Spin / Hidden Agenda:
                </span>
                <p className="text-slate-300 leading-relaxed">{fact.agendaOrFraming}</p>
              </div>

              {/* Verified Auditable Fact Column */}
              <div className="p-3 rounded-lg bg-emerald-950/10 border border-emerald-500/20 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                  Auditable Primary Data:
                </span>
                <p className="text-slate-200 leading-relaxed font-medium">{fact.auditableFact}</p>
                <div className="text-[11px] text-emerald-400/90 font-mono pt-1">
                  Primary Source: {fact.verificationSource}
                </div>
              </div>
            </div>

            {/* Omitted Critical Context */}
            {fact.omittedContext && (
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
                <span className="font-semibold text-amber-400 block mb-0.5">
                  Context Left Out by Author:
                </span>
                {fact.omittedContext}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

