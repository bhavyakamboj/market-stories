import React, { useState } from 'react';
import { POLICY_VECTORS } from '../../data/policyData';
import { PolicyVector } from '../../types';
import { Landmark, ArrowRight, TrendingUp, TrendingDown, ShieldAlert, Filter, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';

export const PolicyDashboard: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyVector>(POLICY_VECTORS[0]);

  const filtered = selectedCategory === 'all'
    ? POLICY_VECTORS
    : POLICY_VECTORS.filter((p) => p.category === selectedCategory);

  const categoryLabels: Record<string, string> = {
    all: 'All Policies',
    monetary: 'Monetary & Central Banks',
    fiscal_subsidy: 'Fiscal & Industrial Acts',
    tariffs_trade: 'Tariffs & Trade Decrees',
    antitrust_reg: 'Antitrust & Competition',
    crypto_legislation: 'Digital Assets & FinTech',
  };

  return (
    <div className="space-y-6">
      {/* Policy Header */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Scale className="w-4 h-4" /> Sovereign & Regulatory Radar
          </span>
          <h2 className="text-2xl font-extrabold text-white mt-1">
            Government Policy & Regulation Impact Transmission
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Track legislative bills, executive orders, central bank balance sheets, and antitrust rulings. Dissect who captures the subsidies and who bears the margin compression.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {Object.keys(categoryLabels).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-colors ${
                selectedCategory === cat
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Policy Vector List */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
            Active Regulatory Vectors ({filtered.length})
          </span>
          <div className="space-y-2">
            {filtered.map((item) => {
              const isSelected = selectedPolicy.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedPolicy(item)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-amber-500 shadow-lg ring-1 ring-amber-500/40'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-blue-300 border border-slate-800 truncate">
                      {item.governingBody}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold uppercase shrink-0">
                      {item.status.replace('_', ' ')}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 leading-snug">{item.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Policy Deep Dive */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
              <div>
                <span className="text-xs font-mono text-amber-400 font-bold uppercase">
                  Policy Transmission Audit
                </span>
                <h3 className="text-xl font-bold text-white leading-tight">{selectedPolicy.title}</h3>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mt-1">
                  <span>Author: {selectedPolicy.governingBody}</span>
                  <span>•</span>
                  <span>Effective: {selectedPolicy.effectiveDate}</span>
                </div>
              </div>
            </div>

            {/* Decree Summary */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Policy Mandate / Statutory Summary:
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedPolicy.summary}
              </p>
            </div>

            {/* Capital Transmission Mechanism */}
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30">
              <span className="text-xs font-mono font-bold text-blue-300 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                <ArrowRight className="w-4 h-4 text-blue-400" /> Economic Transmission Mechanism
              </span>
              <p className="text-xs text-slate-200 font-mono leading-relaxed">
                {selectedPolicy.transmissionMechanism}
              </p>
            </div>

            {/* Winners & Losers Exposure Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Beneficiaries */}
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between font-bold text-sm text-emerald-400">
                  <span className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" /> Capital Inflow Winners
                  </span>
                  <span className="text-xs font-mono bg-emerald-500/20 px-2 py-0.5 rounded">Tailwind</span>
                </div>
                <div className="space-y-2">
                  {selectedPolicy.winners.map((winner, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                      <div className="flex items-center justify-between font-bold text-slate-100 mb-0.5">
                        <span>{winner.target}</span>
                        <span className="text-emerald-400 font-mono">+{winner.upsideScore}%</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{winner.reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Losers */}
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-3">
                <div className="flex items-center justify-between font-bold text-sm text-rose-400">
                  <span className="flex items-center gap-1.5">
                    <TrendingDown className="w-4 h-4" /> Margin Compression Losers
                  </span>
                  <span className="text-xs font-mono bg-rose-500/20 px-2 py-0.5 rounded">Headwind</span>
                </div>
                <div className="space-y-2">
                  {selectedPolicy.losers.map((loser, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 text-xs">
                      <div className="flex items-center justify-between font-bold text-slate-100 mb-0.5">
                        <span>{loser.target}</span>
                        <span className="text-rose-400 font-mono">-{loser.downsideRisk}%</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{loser.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
