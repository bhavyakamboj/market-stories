import React, { useState } from 'react';
import { FinancialStory, UserPreferences, AssetClass } from '../../types';
import { StoryCard } from '../DeconstructionWorkspace/StoryCard';
import { CustomStoryInput } from '../DeconstructionWorkspace/CustomStoryInput';
import { NarrativeFlowDiagram } from '../Infographics/NarrativeFlowDiagram';
import { BiasRadarChart } from '../Infographics/BiasRadarChart';
import { HistoricalTrajectoryChart } from '../Infographics/HistoricalTrajectoryChart';
import { PolicyRippleMap } from '../Infographics/PolicyRippleMap';
import { FactVsAgendaMatrix } from '../DeconstructionWorkspace/FactVsAgendaMatrix';
import { StrategyPlaybook } from '../StrategyFormulator/StrategyPlaybook';
import { Filter, Sparkles, SlidersHorizontal, Layers, CheckCircle } from 'lucide-react';

interface Props {
  stories: FinancialStory[];
  preferences: UserPreferences;
  onAddStory: (newStory: FinancialStory) => void;
  onOpenPersonalize: () => void;
}

export const MainDashboard: React.FC<Props> = ({
  stories,
  preferences,
  onAddStory,
  onOpenPersonalize,
}) => {
  const [selectedStoryId, setSelectedStoryId] = useState<string>(stories[0]?.id || '');
  const [selectedAssetFilter, setSelectedAssetFilter] = useState<AssetClass | 'all'>('all');

  // Filter stories based on asset filter and user preferences
  const filteredStories = stories.filter((story) => {
    // Check if story intersects with user's configured asset classes
    const intersectsUserPreference = story.assetClasses.some((ac) =>
      preferences.activeAssetClasses.includes(ac)
    );
    if (!intersectsUserPreference && preferences.activeAssetClasses.length > 0) {
      return false;
    }

    // Specific asset filter pill
    if (selectedAssetFilter !== 'all') {
      return story.assetClasses.includes(selectedAssetFilter);
    }
    return true;
  });

  const activeStory = stories.find((s) => s.id === selectedStoryId) || filteredStories[0] || stories[0];

  const assetNames: Record<AssetClass, string> = {
    equities: 'Equities',
    crypto: 'Crypto',
    commodities: 'Commodities',
    bonds: 'Bonds & Yields',
    macro_fx: 'Macro FX',
  };

  return (
    <div className="space-y-6">
      {/* Custom Story Input Widget */}
      <CustomStoryInput onAddStory={onAddStory} />

      {/* Asset Class Filter Pills & Dashboard Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-800 gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-mono">
          <span className="text-slate-500 flex items-center gap-1 mr-1 text-[11px]">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          <button
            onClick={() => setSelectedAssetFilter('all')}
            className={`px-3 py-1 rounded-xl transition-colors ${
              selectedAssetFilter === 'all'
                ? 'bg-blue-600 text-white font-bold'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Mandates ({stories.length})
          </button>
          {preferences.activeAssetClasses.map((ac) => (
            <button
              key={ac}
              onClick={() => setSelectedAssetFilter(ac)}
              className={`px-3 py-1 rounded-xl transition-colors ${
                selectedAssetFilter === ac
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {assetNames[ac]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-mono text-[11px] text-emerald-400 flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" /> Audited Stories: {filteredStories.length}
          </span>
          <button
            onClick={onOpenPersonalize}
            className="text-[11px] text-blue-400 hover:text-blue-300 font-mono flex items-center gap-1 underline underline-offset-2"
          >
            Adjust Dashboard
          </button>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Story Feed (4 cols on lg) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Active Financial Stories
            </span>
            <span className="text-[11px] font-mono text-slate-500">
              Sorted by Recency
            </span>
          </div>

          <div className="space-y-3 max-h-[1100px] overflow-y-auto pr-1">
            {filteredStories.map((story) => (
              <StoryCard
                key={story.id}
                story={story}
                isSelected={story.id === activeStory?.id}
                onSelect={() => setSelectedStoryId(story.id)}
              />
            ))}

            {filteredStories.length === 0 && (
              <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-center space-y-2">
                <p className="text-xs text-slate-400">
                  No stories match your current asset filter.
                </p>
                <button
                  onClick={() => setSelectedAssetFilter('all')}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold"
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Deep Deconstruction & Decision Suite (8 cols on lg) */}
        {activeStory ? (
          <div className="lg:col-span-8 space-y-6">
            {/* 1. Infographic Pipeline Flow (if enabled) */}
            {preferences.activeWidgets.infographicFlow && (
              <NarrativeFlowDiagram story={activeStory} />
            )}

            {/* 2. Bias Radar & Sentiment vs Reality Diagnostic (if enabled) */}
            {preferences.activeWidgets.biasRadar && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BiasRadarChart bias={activeStory.bias} />

                {/* Sentiment Dislocation Breakdown */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur flex flex-col justify-between">
                  <div className="pb-3 border-b border-slate-800">
                    <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                      Sentiment Dislocation Audit
                    </span>
                    <h3 className="text-base font-bold text-white">
                      Headline Emotion vs Fundamental Reality
                    </h3>
                  </div>

                  <div className="space-y-4 my-3">
                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                      <div className="flex items-center justify-between text-slate-400 font-mono text-[11px]">
                        <span>Media Headline Framing:</span>
                        <span className="font-bold uppercase text-rose-400">
                          {activeStory.sentimentVsReality.mediaHeadlineSentiment}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400 font-mono text-[11px]">
                        <span>Underlying Hard Data Reality:</span>
                        <span className="font-bold uppercase text-emerald-400">
                          {activeStory.sentimentVsReality.underlyingDataReality.replace('_', ' ')}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-300">Divergence Severity:</span>
                        <span className="font-bold text-rose-400">
                          {activeStory.sentimentVsReality.divergenceDegree}% Out of Sync
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-rose-600 rounded-full"
                          style={{ width: `${activeStory.sentimentVsReality.divergenceDegree}%` }}
                        />
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed italic">
                      "Financial media is incentivized to maximize dwell time and panic clicks, whereas capital allocators must trade the underlying fundamental delta."
                    </p>
                  </div>

                  <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800">
                    Target Assets: {activeStory.tickers.join(', ')}
                  </div>
                </div>
              </div>
            )}

            {/* 3. The Agenda vs Fact Matrix (if enabled) */}
            {preferences.activeWidgets.factVsAgenda && (
              <FactVsAgendaMatrix facts={activeStory.facts} />
            )}

            {/* 4. Historical Precedents & Trajectories (if enabled) */}
            {preferences.activeWidgets.historicalRhymes && (
              <HistoricalTrajectoryChart analogues={activeStory.historicalAnalogues} />
            )}

            {/* 5. Policy & Regulatory Impact Flow (if enabled) */}
            {preferences.activeWidgets.policyRadar && activeStory.policyVector && (
              <PolicyRippleMap policy={activeStory.policyVector} />
            )}

            {/* 6. Actionable Strategy & Decision Playbook (if enabled) */}
            {preferences.activeWidgets.strategyPlaybook && (
              <StrategyPlaybook strategy={activeStory.strategy} />
            )}
          </div>
        ) : (
          <div className="lg:col-span-8 p-12 rounded-2xl bg-slate-900/40 border border-slate-800 text-center">
            <p className="text-slate-400 text-sm">Select a story to audit.</p>
          </div>
        )}
      </div>
    </div>
  );
};
