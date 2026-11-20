import React from 'react';
import { PolicyVector } from '../../types';
import { Landmark, ArrowRight, TrendingUp, TrendingDown, Shield, FileText } from 'lucide-react';

interface Props {
  policy?: PolicyVector;
}

export const PolicyRippleMap: React.FC<Props> = ({ policy }) => {
  if (!policy) {
    return (
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-xl text-center text-slate-500 text-sm">
        No immediate government policy vector linked to this event.
      </div>
    );
  }

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-slate-800 gap-2">
        <div>
          <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider">
            Sovereign & Regulatory Impact Flow
          </span>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            Policy Transmission & Asymmetric Exposure
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
            {policy.governingBody}
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
            {policy.status.replace('_', ' ')}
          </span>
        </div>
      </div>

      <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 mb-4">
        <h4 className="text-sm font-semibold text-slate-200 mb-1 flex items-center gap-1.5">
          <Landmark className="w-4 h-4 text-amber-400" />
          {policy.title}
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed">{policy.summary}</p>
      </div>

      {/* Ripple Transmission Map */}
      <div className="relative p-4 rounded-xl bg-slate-950/90 border border-slate-800/80 mb-4">
        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wide mb-2 flex items-center gap-1.5">
          <ArrowRight className="w-3.5 h-3.5 text-blue-400" /> Capital Flow Transmission Mechanism
        </div>
        <p className="text-xs text-blue-100 font-mono bg-blue-950/30 p-2.5 rounded-lg border border-blue-500/20 leading-relaxed">
          {policy.transmissionMechanism}
        </p>
      </div>

      {/* Winners vs Losers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Beneficiaries */}
        <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
          <div className="flex items-center justify-between font-bold text-emerald-400 text-xs mb-2">
            <span className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" /> Structural Beneficiaries
            </span>
            <span className="text-[10px] font-mono bg-emerald-500/20 px-2 py-0.5 rounded">Bull Exposure</span>
          </div>
          <div className="space-y-2">
            {policy.winners.map((winner, idx) => (
              <div key={idx} className="p-2 rounded bg-slate-900/60 border border-slate-800/60 text-xs">
                <div className="flex items-center justify-between font-semibold text-slate-200 mb-0.5">
                  <span>{winner.target}</span>
                  <span className="text-[10px] font-mono text-emerald-400">+{winner.upsideScore}% tailwind</span>
                </div>
                <p className="text-[11px] text-slate-400">{winner.reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Losers / Vulnerable Sectors */}
        <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30">
          <div className="flex items-center justify-between font-bold text-rose-400 text-xs mb-2">
            <span className="flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4" /> Vulnerable Sectors
            </span>
            <span className="text-[10px] font-mono bg-rose-500/20 px-2 py-0.5 rounded">Downside Risk</span>
          </div>
          <div className="space-y-2">
            {policy.losers.map((loser, idx) => (
              <div key={idx} className="p-2 rounded bg-slate-900/60 border border-slate-800/60 text-xs">
                <div className="flex items-center justify-between font-semibold text-slate-200 mb-0.5">
                  <span>{loser.target}</span>
                  <span className="text-[10px] font-mono text-rose-400">-{loser.downsideRisk}% headwind</span>
                </div>
                <p className="text-[11px] text-slate-400">{loser.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
