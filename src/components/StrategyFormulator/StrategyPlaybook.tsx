import React, { useState } from 'react';
import { DecisionStrategy } from '../../types';
import { Target, AlertTriangle, ShieldCheck, CheckSquare, Zap, Activity, HelpCircle } from 'lucide-react';

interface Props {
  strategy: DecisionStrategy;
}

export const StrategyPlaybook: React.FC<Props> = ({ strategy }) => {
  const [activeCase, setActiveCase] = useState<'base' | 'stress' | 'bull'>('base');
  const [checkedChecklist, setCheckedChecklist] = useState<Record<number, boolean>>({});

  const toggleCheck = (idx: number) => {
    setCheckedChecklist((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
        <div>
          <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider">
            Probabilistic Action Framework
          </span>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            Actionable Strategy & Decision Playbook
          </h3>
          <p className="text-xs text-slate-400">
            Converting unbiased historical & fundamental facts into risk-managed execution.
          </p>
        </div>
        <div className="text-xs font-mono px-3 py-1 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300">
          Core Thesis: {strategy.headlineSummary}
        </div>
      </div>

      {/* Scenario Probability Tabs */}
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={() => setActiveCase('base')}
          className={`p-3 rounded-xl border text-left transition-all ${
            activeCase === 'base'
              ? 'bg-blue-600/20 border-blue-500 shadow-md ring-1 ring-blue-500/50'
              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/50'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-white">Base Case</span>
            <span className="text-xs font-mono font-bold text-blue-400">
              {strategy.baseCase.probability}%
            </span>
          </div>
          <p className="text-[11px] text-slate-400 line-clamp-1">Expected Path</p>
        </button>

        <button
          onClick={() => setActiveCase('stress')}
          className={`p-3 rounded-xl border text-left transition-all ${
            activeCase === 'stress'
              ? 'bg-rose-600/20 border-rose-500 shadow-md ring-1 ring-rose-500/50'
              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/50'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-white">Stress / Bear</span>
            <span className="text-xs font-mono font-bold text-rose-400">
              {strategy.stressCase.probability}%
            </span>
          </div>
          <p className="text-[11px] text-slate-400 line-clamp-1">Downside Invalidation</p>
        </button>

        <button
          onClick={() => setActiveCase('bull')}
          className={`p-3 rounded-xl border text-left transition-all ${
            activeCase === 'bull'
              ? 'bg-emerald-600/20 border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/50'
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-white">Bull Surprise</span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              {strategy.bullSurprise.probability}%
            </span>
          </div>
          <p className="text-[11px] text-slate-400 line-clamp-1">Upside Acceleration</p>
        </button>
      </div>

      {/* Active Case Playbook Details */}
      <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
        {activeCase === 'base' && (
          <>
            <div className="text-xs font-semibold text-blue-300">
              Thesis: {strategy.baseCase.thesis}
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Execution Playbook Actions:
              </span>
              {strategy.baseCase.playbook.map((action, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                  <Target className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {activeCase === 'stress' && (
          <>
            <div className="text-xs font-semibold text-rose-300">
              Thesis: {strategy.stressCase.thesis}
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Stress Defense & Hedging Protocols:
              </span>
              {strategy.stressCase.playbook.map((action, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400 mt-0.5 shrink-0" />
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {activeCase === 'bull' && (
          <>
            <div className="text-xs font-semibold text-emerald-300">
              Thesis: {strategy.bullSurprise.thesis}
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                Upside Exploitation Playbook:
              </span>
              {strategy.bullSurprise.playbook.map((action, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                  <Zap className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{action}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Invalidation Rules */}
      <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-2">
        <span className="text-[11px] font-mono font-bold text-amber-400 uppercase flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5" /> Hard Invalidation Triggers (When to Exit / Revise)
        </span>
        <ul className="space-y-1 text-slate-300 list-disc list-inside">
          {strategy.invalidationTriggers.map((trigger, idx) => (
            <li key={idx} className="leading-relaxed font-mono text-[11px] text-amber-200/90">{trigger}</li>
          ))}
        </ul>
      </div>

      {/* Anti-Bias Pre-Mortem Guardrail Checklist */}
      <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 text-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-bold text-purple-300 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-purple-400" />
            Anti-Bias Behavioral Pre-Mortem Checklist
          </span>
          <span className="text-[10px] font-mono text-slate-400">
            Don't Repeat History
          </span>
        </div>
        <p className="text-[11px] text-slate-400">
          Before taking action, verify that you are not falling into standard psychological market traps:
        </p>

        <div className="space-y-2">
          {strategy.antiBiasPreMortem.map((item, idx) => {
            const isChecked = !!checkedChecklist[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleCheck(idx)}
                className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                  isChecked
                    ? 'bg-purple-900/30 border-purple-500/50 text-slate-200'
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {}}
                    className="mt-0.5 rounded border-slate-700 text-purple-600 focus:ring-purple-500"
                  />
                  <div>
                    <span className="font-bold text-slate-200 block text-xs mb-0.5">
                      {item.cognitiveTrap}
                    </span>
                    <p className="text-[11px] text-slate-400 mb-1">{item.warning}</p>
                    <div className="text-[11px] text-purple-300 font-mono">
                      ✓ Debiasing rule: {item.debiasingAction}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

