import React from 'react';
import { UserPreferences } from '../types';
import { Sliders, Sparkles, TrendingUp, ShieldCheck, Compass, BookOpen, Landmark, Activity } from 'lucide-react';

interface Props {
  preferences: UserPreferences;
  onOpenPersonalize: () => void;
  activeTab: 'stories' | 'history' | 'policy';
  onSelectTab: (tab: 'stories' | 'history' | 'policy') => void;
}

export const Header: React.FC<Props> = ({
  preferences,
  onOpenPersonalize,
  activeTab,
  onSelectTab,
}) => {
  const styleDisplayMap = {
    macro_swing: 'Macro Swing Trader',
    deep_value: 'Deep Value & Contrarian',
    long_term_dca: 'Long-Term DCA Accumulator',
    event_driven: 'Event-Driven / Policy Specialist',
  };

  const tickers = [
    { name: 'S&P 500', val: '5,882.4', change: '+0.42%', up: true },
    { name: 'US 10Y', val: '4.38%', change: '+3 bps', up: false },
    { name: 'BTC/USD', val: '$91,420', change: '+2.85%', up: true },
    { name: 'Gold', val: '$2,648/oz', change: '+0.15%', up: true },
    { name: 'DXY (USD)', val: '106.6', change: '-0.12%', up: true },
    { name: 'VIX Volatility', val: '14.8', change: '-4.2%', up: true },
  ];

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
      {/* Top Real-Time Macro Ticker Bar */}
      <div className="border-b border-slate-800/60 bg-slate-950/90 py-1.5 px-4 overflow-x-auto text-[11px] font-mono">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 min-w-max">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-slate-300">MARKET TRUTH FEED</span>
          </div>

          <div className="flex items-center gap-6">
            {tickers.map((t, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="text-slate-400">{t.name}:</span>
                <span className="text-slate-200 font-semibold">{t.val}</span>
                <span className={t.up ? 'text-emerald-400' : 'text-rose-400'}>{t.change}</span>
              </div>
            ))}
          </div>

          <div className="text-slate-500 text-[10px]">
            UNBIASED DATA ENGINE • VERITAS
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 text-white font-black text-xl">
            M
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-extrabold tracking-tight text-white">
                MarketStories
              </h1>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                AI DECONSTRUCT
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Deconstruct Narratives • Distill Facts • Learn From History
            </p>
          </div>
        </div>

        {/* View Tabs */}
        <nav className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800 text-xs font-medium">
          <button
            onClick={() => onSelectTab('stories')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === 'stories'
                ? 'bg-blue-600 text-white shadow-md font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" /> Deconstruction Feed
          </button>
          <button
            onClick={() => onSelectTab('history')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === 'history'
                ? 'bg-blue-600 text-white shadow-md font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" /> Historical Scenarios
          </button>
          <button
            onClick={() => onSelectTab('policy')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
              activeTab === 'policy'
                ? 'bg-blue-600 text-white shadow-md font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
            }`}
          >
            <Landmark className="w-3.5 h-3.5" /> Policy & Regulation
          </button>
        </nav>

        {/* User Persona & Customization Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPersonalize}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/80 text-xs transition-all shadow-sm group"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <div className="text-left">
              <span className="text-[10px] text-slate-500 font-mono block leading-none">
                MANDATE
              </span>
              <span className="font-semibold text-slate-200 group-hover:text-blue-300">
                {styleDisplayMap[preferences.investmentStyle]}
              </span>
            </div>
            <Sliders className="w-3.5 h-3.5 text-slate-400 ml-1 group-hover:text-blue-400" />
          </button>
        </div>
      </div>
    </header>
  );
};
