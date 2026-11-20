import React, { useState } from 'react';
import { FinancialStory } from '../../types';
import { HISTORICAL_ANALOGUES } from '../../data/historicalScenarios';
import { Sparkles, Send, BookOpen, AlertCircle } from 'lucide-react';

interface Props {
  onAddStory: (story: FinancialStory) => void;
}

export const CustomStoryInput: React.FC<Props> = ({ onAddStory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [headline, setHeadline] = useState('');
  const [source, setSource] = useState('');
  const [content, setContent] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const presets = [
    {
      title: 'Breaking: Central Bank Signals "Emergency Liquidity Review" as Shadow Banking Losses Surface',
      source: 'Global Financial Daily',
      content:
        'A confidential report circulated among monetary authorities warns of severe counterparty strains in private credit funds. Regulators are preparing emergency liquidity swap lines to stave off a cascading freeze in interbank lending markets. Investors should brace for violent liquidity dislocations!',
    },
    {
      title: 'Department of Energy Restricts Critical Battery Minerals: EV Carmakers Face Catastrophic Shortages',
      source: 'Automotive & Energy Wire',
      content:
        'New domestic content quotas will bar automotive battery manufacturers from sourcing rare earth elements from non-FTA countries starting next quarter. Carmakers will suffer crippling production stops and vehicle sticker prices will surge by 30%.',
    },
  ];

  const handleAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!headline || !content) return;

    setIsAnalyzing(true);

    // Simulate instant AI deconstruction pipeline
    setTimeout(() => {
      const emotiveWords = ['emergency', 'catastrophic', 'freeze', 'violent', 'dislocations', 'crippling', 'losses', 'crushing'];
      const foundEmotives = emotiveWords.filter((w) =>
        `${headline} ${content}`.toLowerCase().includes(w)
      ).length;

      const sensationalism = Math.min(95, 60 + foundEmotives * 8);

      const newStory: FinancialStory = {
        id: `custom-${Date.now()}`,
        title: headline,
        source: source || 'Independent Media Outlet',
        authorOrHost: 'Staff Financial Contributor',
        publishedAt: new Date().toISOString().split('T')[0],
        contentType: 'article',
        originalExcerpt: content,
        assetClasses: ['equities', 'macro_fx', 'bonds'],
        tickers: ['SPY', 'HYG', 'US10Y', 'TLT'],
        bias: {
          sensationalismScore: sensationalism,
          institutionalConflict:
            'Unverified unnamed sources citing confidential regulatory discussions without official FOIA or Federal Register notices.',
          sourceLeaning: 'doom_bear',
          omissionScore: 75,
          verifiableDataRatio: 38,
          emotiveWordingCount: Math.max(8, foundEmotives * 3),
        },
        facts: [
          {
            id: `f-${Date.now()}-1`,
            claimOrHeadline: headline,
            agendaOrFraming: 'Using alarmist vocabulary to provoke panic selling and generate clickthrough engagement.',
            auditableFact:
              'Official Fed Discount Window borrowing and Bank Term Funding facilities show normal seasonal liquidity demand with no emergency draws above 90-day averages.',
            verificationSource: 'Federal Reserve H.4.1 Factors Affecting Reserve Balances',
            omittedContext:
              'Regulatory reviews of private credit happen semi-annually under the Financial Stability Oversight Council (FSOC) mandate.',
            verdict: 'misleading_framing',
          },
        ],
        historicalAnalogues: [
          HISTORICAL_ANALOGUES[1], // SVB 2023
          HISTORICAL_ANALOGUES[4], // COVID 2020
        ],
        strategy: {
          id: `strat-${Date.now()}`,
          headlineSummary: 'Verify Interbank Repo Spreads Before Reacting to Unnamed Regulatory Rumors',
          baseCase: {
            probability: 65,
            thesis:
              'Routine regulatory oversight is being sensationalized by financial press. Interbank credit spreads remain healthy. Volatility creates buying opportunities.',
            playbook: [
              'Monitor Secured Overnight Financing Rate (SOFR) and high-yield spreads (HYG OAS).',
              'If spreads stay below 400bps, accumulate resilient quality cash flow assets on dips.',
            ],
          },
          stressCase: {
            probability: 25,
            thesis:
              'Private credit fund redemption gating causes localized collateral liquidation in leveraged loans.',
            playbook: ['Trim high-yield speculative debt; hold high-grade short Treasuries (SHY).'],
          },
          bullSurprise: {
            probability: 10,
            thesis: 'Regulators clarify that capital buffers are already robust; markets stage relief rally.',
            playbook: ['Add high-beta financial tech and credit asset managers.'],
          },
          invalidationTriggers: ['SOFR spikes >25bps above the Fed Funds target rate.'],
          antiBiasPreMortem: [
            {
              cognitiveTrap: 'Panic Attribution to Unnamed Sources',
              warning: 'Reacting to headlines quoting "unnamed officials" before verifiable data prints.',
              debiasingAction: 'Always wait for primary regulatory docket filings on FederalRegister.gov.',
            },
          ],
        },
        sentimentVsReality: {
          mediaHeadlineSentiment: 'panic',
          underlyingDataReality: 'sound_fundamentals',
          divergenceDegree: 82,
        },
      };

      onAddStory(newStory);
      setIsAnalyzing(false);
      setIsOpen(false);
      setHeadline('');
      setSource('');
      setContent('');
    }, 700);
  };

  const loadPreset = (preset: typeof presets[0]) => {
    setHeadline(preset.title);
    setSource(preset.source);
    setContent(preset.content);
  };

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 shadow-lg backdrop-blur">
      {!isOpen ? (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Deconstruct Your Own News, Article or Video</h4>
              <p className="text-xs text-slate-400">
                Paste any headline or transcript to run instant bias detection and fact distillation.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2 shadow-lg transition-all whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5" /> Analyze Custom Story
          </button>
        </div>
      ) : (
        <form onSubmit={handleAnalyze} className="space-y-4 pt-1">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Custom News Deconstruction Engine
            </h4>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              Cancel
            </button>
          </div>

          {/* Quick Presets */}
          <div className="flex items-center gap-2 overflow-x-auto text-xs pb-1">
            <span className="text-slate-500 text-[11px] font-mono shrink-0">Try Sample:</span>
            {presets.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => loadPreset(p)}
                className="px-2.5 py-1 rounded bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 truncate max-w-xs text-[11px]"
              >
                {p.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 space-y-1">
              <label className="text-[11px] font-mono text-slate-400">Headline / Video Title *</label>
              <input
                type="text"
                required
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="e.g. Fed warns of imminent liquidity crisis..."
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-slate-400">Source / Outlet</label>
              <input
                type="text"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                placeholder="e.g. Bloomberg / CNBC / YouTube"
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-mono text-slate-400">
              Article Text / Transcript Excerpt *
            </label>
            <textarea
              required
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste the raw paragraphs, quote, or video transcript here..."
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-400 hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isAnalyzing}
              className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Deconstructing Bias & Facts...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Deconstruct & Add Story
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
