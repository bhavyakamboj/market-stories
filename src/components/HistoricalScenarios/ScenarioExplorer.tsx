import React, { useState } from 'react';
import { HISTORICAL_ANALOGUES } from '../../data/historicalScenarios';
import { HistoricalAnalogue } from '../../types';
import { Search, History, ShieldAlert, Award, ArrowUpRight, ArrowDownRight, Lightbulb, Brain } from 'lucide-react';

export const ScenarioExplorer: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedScenario, setSelectedScenario] = useState<HistoricalAnalogue>(HISTORICAL_ANALOGUES[0]);

  const filtered = HISTORICAL_ANALOGUES.filter(
    (h) =>
      h.eventName.toLowerCase().includes(search.toLowerCase()) ||
      h.catalystDescription.toLowerCase().includes(search.toLowerCase()) ||
      h.theCrowdMistake.toLowerCase().includes(search.toLowerCase())
  );

  const cognitiveBiases = [
    {
      name: 'Narrative Fallacy',
      desc: 'Creating simple, emotionally compelling cause-and-effect stories out of complex, chaotic market randomness.',
      antidote: 'Insist on auditable numbers and balance sheets over pundit storytelling.',
    },
    {
      name: 'Recency Bias',
      desc: 'Believing whatever happened in the last 6 months (boom or bust) represents the permanent new normal.',
      antidote: 'Zoom out to 10-year, 20-year and 50-year valuation cycles.',
    },
    {
      name: 'Panic Capitulation (Loss Aversion)',
      desc: 'The psychological pain of a 20% drop feels twice as intense as the pleasure of a 20% gain, driving investors to sell at cycle bottoms.',
      antidote: 'Pre-commit to systematic DCA rules when market sentiment reaches extreme fear.',
    },
    {
      name: 'Extrapolating Cyclical Highs as Secular',
      desc: 'Assuming a peak commodity price or temporary corporate margin windfall will continue indefinitely.',
      antidote: 'Remember capitalism attracts competition: excess profit margins always invite capital that lowers prices.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <History className="w-4 h-4" /> The Historical Memory Engine
          </span>
          <h2 className="text-2xl font-extrabold text-white mt-1">
            "Those Who Cannot Remember the Past Are Condemned to Repeat It"
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Explore deep historical market catalysts, panic headlines, the mistakes the crowd made, and the strategic actions that preserved and compounded capital.
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search dotcom, SVB, 1973..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Scenario Selection List */}
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block">
            Archived Historical Catalysts ({filtered.length})
          </span>
          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {filtered.map((item) => {
              const isSelected = selectedScenario.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedScenario(item)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500 shadow-lg ring-1 ring-cyan-500/40'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-cyan-400">{item.year}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                      Match {item.similarityScore}%
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{item.eventName}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.catalystDescription}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Scenario Deep Dive */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-800 gap-2">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                  Historical Catalyst Study
                </span>
                <h3 className="text-xl font-bold text-white">{selectedScenario.eventName}</h3>
                <span className="text-xs text-slate-400 font-mono">Era: {selectedScenario.year}</span>
              </div>
            </div>

            {/* Catalyst Context */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                The Historical Shock Context:
              </span>
              <p className="text-sm text-slate-200 leading-relaxed">
                {selectedScenario.catalystDescription}
              </p>
            </div>

            {/* Market Reaction Horizons */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                How Financial Assets Reacted Over Time:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-400 block mb-1">Day 7 Panic</span>
                  <span className={`text-base font-bold font-mono ${selectedScenario.marketReaction.day7 >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {selectedScenario.marketReaction.day7 > 0 ? `+${selectedScenario.marketReaction.day7}%` : `${selectedScenario.marketReaction.day7}%`}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-400 block mb-1">Day 30 Capitulation</span>
                  <span className={`text-base font-bold font-mono ${selectedScenario.marketReaction.day30 >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {selectedScenario.marketReaction.day30 > 0 ? `+${selectedScenario.marketReaction.day30}%` : `${selectedScenario.marketReaction.day30}%`}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-400 block mb-1">Day 90 Realization</span>
                  <span className={`text-base font-bold font-mono ${selectedScenario.marketReaction.day90 >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {selectedScenario.marketReaction.day90 > 0 ? `+${selectedScenario.marketReaction.day90}%` : `${selectedScenario.marketReaction.day90}%`}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center">
                  <span className="text-[10px] font-mono text-slate-400 block mb-1">Day 365 1-Year</span>
                  <span className={`text-base font-bold font-mono ${selectedScenario.marketReaction.day365 >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {selectedScenario.marketReaction.day365 > 0 ? `+${selectedScenario.marketReaction.day365}%` : `${selectedScenario.marketReaction.day365}%`}
                  </span>
                </div>
              </div>
            </div>

            {/* The Crowd's Mistake vs Winning Move */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-rose-400">
                  <ShieldAlert className="w-4 h-4" /> The Mistake the Crowd Made
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedScenario.theCrowdMistake}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-emerald-400">
                  <Award className="w-4 h-4" /> The Proven Winning Move
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedScenario.winningMove}
                </p>
              </div>
            </div>

            {/* Key Timeless Lesson */}
            <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/30 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono font-bold text-blue-300 uppercase block mb-0.5">
                  The Timeless Historical Rule
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-serif italic">
                  "{selectedScenario.keyLesson}"
                </p>
              </div>
            </div>
          </div>

          {/* Cognitive Bias Immunity Guardrails */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 shadow-xl space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <h4 className="text-sm font-bold text-white">
                Behavioral Guardrails: The 4 Traps That Burn Retail Investors
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cognitiveBiases.map((bias, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                  <span className="font-bold text-purple-300 block">{bias.name}</span>
                  <p className="text-slate-400 leading-relaxed text-[11px]">{bias.desc}</p>
                  <div className="text-[11px] text-emerald-400 font-mono pt-1">
                    ✓ Antidote: {bias.antidote}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

