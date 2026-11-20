import React, { useState } from 'react';
import { MOCK_STORIES } from './data/mockStories';
import { FinancialStory, UserPreferences } from './types';
import { Header } from './components/Header';
import { MainDashboard } from './components/Dashboard/MainDashboard';
import { ScenarioExplorer } from './components/HistoricalScenarios/ScenarioExplorer';
import { PolicyDashboard } from './components/PolicyRadar/PolicyDashboard';
import { PersonalizationModal } from './components/PersonalizationModal';

export const App: React.FC = () => {
  const [stories, setStories] = useState<FinancialStory[]>(MOCK_STORIES);
  const [activeTab, setActiveTab] = useState<'stories' | 'history' | 'policy'>('stories');
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);

  const [preferences, setPreferences] = useState<UserPreferences>({
    activeAssetClasses: ['equities', 'crypto', 'commodities', 'bonds', 'macro_fx'],
    investmentStyle: 'macro_swing',
    activeWidgets: {
      infographicFlow: true,
      biasRadar: true,
      factVsAgenda: true,
      historicalRhymes: true,
      policyRadar: true,
      strategyPlaybook: true,
      mistakeGuardrails: true,
    },
    riskTolerance: 'balanced',
  });

  const handleAddStory = (newStory: FinancialStory) => {
    setStories((prev) => [newStory, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Header & Nav */}
      <Header
        preferences={preferences}
        onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        activeTab={activeTab}
        onSelectTab={setActiveTab}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        {activeTab === 'stories' && (
          <MainDashboard
            stories={stories}
            preferences={preferences}
            onAddStory={handleAddStory}
            onOpenPersonalize={() => setIsPersonalizeOpen(true)}
          />
        )}

        {activeTab === 'history' && <ScenarioExplorer />}

        {activeTab === 'policy' && <PolicyDashboard />}
      </main>

      {/* Personalization Modal */}
      <PersonalizationModal
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
        preferences={preferences}
        onUpdatePreferences={setPreferences}
      />

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/90 py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300 font-mono">MarketStories Veritas</span>
            <span>•</span>
            <span>Unbiased Narrative Deconstruction & Historical Precedent Terminal</span>
          </div>
          <div className="text-[11px] text-slate-500">
            Learn from the past to master the present. Information for analytical purposes.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
