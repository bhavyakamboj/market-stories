import React from 'react';
import { UserPreferences, AssetClass, InvestmentStyle } from '../types';
import { Sliders, X, Check, Eye, Shield, Activity, DollarSign, Layers } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  preferences: UserPreferences;
  onUpdatePreferences: (newPrefs: UserPreferences) => void;
}

export const PersonalizationModal: React.FC<Props> = ({
  isOpen,
  onClose,
  preferences,
  onUpdatePreferences,
}) => {
  if (!isOpen) return null;

  const toggleAssetClass = (ac: AssetClass) => {
    const exists = preferences.activeAssetClasses.includes(ac);
    let updated: AssetClass[];
    if (exists) {
      if (preferences.activeAssetClasses.length === 1) return; // Keep at least one
      updated = preferences.activeAssetClasses.filter((a) => a !== ac);
    } else {
      updated = [...preferences.activeAssetClasses, ac];
    }
    onUpdatePreferences({
      ...preferences,
      activeAssetClasses: updated,
    });
  };

  const setStyle = (style: InvestmentStyle) => {
    onUpdatePreferences({
      ...preferences,
      investmentStyle: style,
    });
  };

  const toggleWidget = (widgetKey: keyof UserPreferences['activeWidgets']) => {
    onUpdatePreferences({
      ...preferences,
      activeWidgets: {
        ...preferences.activeWidgets,
        [widgetKey]: !preferences.activeWidgets[widgetKey],
      },
    });
  };

  const assetClassOptions: { id: AssetClass; label: string; desc: string }[] = [
    { id: 'equities', label: 'Equities & Tech', desc: 'S&P 500, Nasdaq, Hyperscalers, Cyclicals' },
    { id: 'crypto', label: 'Crypto & Digital Assets', desc: 'Bitcoin, Ethereum, L1s, Web3 Infrastructure' },
    { id: 'commodities', label: 'Commodities & Energy', desc: 'Crude Oil, Gold, Silver, Critical Minerals' },
    { id: 'bonds', label: 'Fixed Income & Rates', desc: '10Y/2Y Yields, Duration, Credit Spreads' },
    { id: 'macro_fx', label: 'Macro FX & Currencies', desc: 'US Dollar (DXY), Global Trade Pairs' },
  ];

  const styleOptions: { id: InvestmentStyle; label: string; desc: string; badge: string }[] = [
    {
      id: 'macro_swing',
      label: 'Macro Swing Trader',
      desc: 'Focus on liquidity shifts, central bank rhetoric, and headline dislocations over weeks to months.',
      badge: 'Liquidity & Momentum',
    },
    {
      id: 'deep_value',
      label: 'Deep Value & Contrarian',
      desc: 'Hunt for extreme pessimism where stock prices detach from actual audited free cash flows.',
      badge: 'Cash Flow & Moats',
    },
    {
      id: 'long_term_dca',
      label: 'Long-Term DCA Accumulator',
      desc: 'Filter out transient noise, focusing on 3-5 year secular tailwinds and historical drawdown recoveries.',
      badge: 'Secular Compounding',
    },
    {
      id: 'event_driven',
      label: 'Event-Driven / Policy Specialist',
      desc: 'Exploit specific catalysts: regulatory decrees, antitrust rulings, tariffs, and executive actions.',
      badge: 'Catalysts & Regulatory',
    },
  ];

  const widgetToggles: { key: keyof UserPreferences['activeWidgets']; label: string; desc: string }[] = [
    { key: 'infographicFlow', label: 'Truth Deconstruction Pipeline', desc: 'Interactive step-by-step visual narrative flow' },
    { key: 'biasRadar', label: 'Bias Diagnostic Radar', desc: 'Multi-axis polygon chart assessing sensationalism & conflict' },
    { key: 'factVsAgenda', label: 'Agenda vs Fact Matrix', desc: 'Side-by-side audit of claims vs auditable SEC/BLS filings' },
    { key: 'historicalRhymes', label: 'Historical Trajectory & Precedents', desc: 'Past crisis rhymes, crowd blunders & winning moves' },
    { key: 'policyRadar', label: 'Government Policy & Regulatory Ripple', desc: 'Policy shock transmission and sector impact mapping' },
    { key: 'strategyPlaybook', label: 'Actionable Strategy Playbook', desc: 'Probabilistic base/stress/bull cases and invalidation levels' },
    { key: 'mistakeGuardrails', label: 'Anti-Bias Psychological Checklist', desc: 'Pre-mortem cognitive trap warnings before taking action' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 shadow-2xl space-y-6 my-8 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Personalise Your Intelligence Terminal</h3>
              <p className="text-xs text-slate-400">
                Tailor dashboards to your asset mandate and cognitive investment style.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Investment Style Selection */}
        <div className="space-y-3">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 block">
            1. Investment Style / Mandate
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {styleOptions.map((opt) => {
              const isSelected = preferences.investmentStyle === opt.id;
              return (
                <div
                  key={opt.id}
                  onClick={() => setStyle(opt.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-blue-600/20 border-blue-500 shadow-md ring-1 ring-blue-500/50'
                      : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-white">{opt.label}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900 text-blue-300 border border-slate-800">
                      {opt.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{opt.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Asset Class Filter */}
        <div className="space-y-3">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block">
            2. Active Asset Classes (Select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {assetClassOptions.map((ac) => {
              const isChecked = preferences.activeAssetClasses.includes(ac.id);
              return (
                <div
                  key={ac.id}
                  onClick={() => toggleAssetClass(ac.id)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    isChecked
                      ? 'bg-emerald-950/20 border-emerald-500/50 text-white'
                      : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <h5 className="text-xs font-bold">{ac.label}</h5>
                    <p className="text-[10px] text-slate-400">{ac.desc}</p>
                  </div>
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                      isChecked
                        ? 'bg-emerald-500 border-emerald-500 text-slate-950 font-bold'
                        : 'border-slate-700'
                    }`}
                  >
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dashboard Widgets Customizer */}
        <div className="space-y-3">
          <label className="text-xs font-mono font-bold uppercase tracking-wider text-purple-400 block">
            3. Dashboard Widgets & Infographics
          </label>
          <div className="grid grid-cols-1 gap-2">
            {widgetToggles.map((w) => {
              const isActive = preferences.activeWidgets[w.key];
              return (
                <div
                  key={w.key}
                  onClick={() => toggleWidget(w.key)}
                  className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                    isActive
                      ? 'bg-slate-950 border-slate-700'
                      : 'bg-slate-950/40 border-slate-900 opacity-60'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-slate-200">{w.label}</div>
                    <div className="text-[11px] text-slate-400">{w.desc}</div>
                  </div>
                  <div
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                      isActive
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {isActive ? 'ENABLED' : 'DISABLED'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-3 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg transition-all"
          >
            Apply & Save Dashboard Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

