import React, { useState } from 'react';
import { FinancialStory } from '../../types';
import { ShieldAlert, CheckCircle2, History, Compass, ArrowRight, Eye, AlertTriangle } from 'lucide-react';

interface Props {
  story: FinancialStory;
}

export const NarrativeFlowDiagram: React.FC<Props> = ({ story }) => {
  const [activeStep, setActiveStep] = useState<number>(2); // Default to Facts

  const steps = [
    {
      id: 0,
      title: 'Media Headline & Spin',
      subtitle: 'The Emotional Hook',
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
      color: 'border-amber-500/40 bg-amber-950/20 text-amber-200',
      badge: `${story.bias.sensationalismScore}/100 Sensationalism`,
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-slate-900/80 rounded-lg border border-amber-500/30">
            <p className="text-sm italic text-amber-100 font-serif">"{story.originalExcerpt}"</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Source:</span> {story.source}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-600"></span>
            <span className="font-semibold text-slate-300">Tone:</span> {story.sentimentVsReality.mediaHeadlineSentiment.toUpperCase()}
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: 'Uncovered Agenda & Conflict',
      subtitle: 'Why Was It Framed This Way?',
      icon: <ShieldAlert className="w-5 h-5 text-rose-400" />,
      color: 'border-rose-500/40 bg-rose-950/20 text-rose-200',
      badge: 'Conflict Flagged',
      content: (
        <div className="space-y-3">
          <p className="text-sm text-slate-200 leading-relaxed">
            {story.bias.institutionalConflict}
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400 block mb-1">Omission Score</span>
              <span className="text-base font-bold text-rose-400">{story.bias.omissionScore}% Context Withheld</span>
            </div>
            <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
              <span className="text-slate-400 block mb-1">Source Alignment</span>
              <span className="text-base font-bold text-slate-200 capitalize">{story.bias.sourceLeaning.replace('_', ' ')}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Distilled Auditable Facts',
      subtitle: 'The Hard Verifiable Truth',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      color: 'border-emerald-500/40 bg-emerald-950/20 text-emerald-200',
      badge: `${story.bias.verifiableDataRatio}% Hard Data Ratio`,
      content: (
        <div className="space-y-3">
          {story.facts.map((fact) => (
            <div key={fact.id} className="p-3 bg-slate-900/80 rounded-lg border border-emerald-500/30 text-xs space-y-1.5">
              <div className="flex items-center justify-between font-semibold text-slate-200">
                <span>Verified Data Point:</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-mono">
                  {fact.verdict.toUpperCase().replace('_', ' ')}
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">{fact.auditableFact}</p>
              <div className="text-[11px] text-emerald-400/90 font-mono flex items-center gap-1 pt-1">
                <Eye className="w-3.5 h-3.5" /> Source: {fact.verificationSource}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 3,
      title: 'Historical Analogue',
      subtitle: 'When Did We See This Before?',
      icon: <History className="w-5 h-5 text-blue-400" />,
      color: 'border-blue-500/40 bg-blue-950/20 text-blue-200',
      badge: `${story.historicalAnalogues[0]?.similarityScore}% Historical Rhyme`,
      content: (
        <div className="space-y-3 text-xs">
          <div className="font-semibold text-sm text-blue-300">
            {story.historicalAnalogues[0]?.eventName} ({story.historicalAnalogues[0]?.year})
          </div>
          <p className="text-slate-300 leading-relaxed">
            {story.historicalAnalogues[0]?.catalystDescription}
          </p>
          <div className="p-2.5 rounded bg-amber-950/30 border border-amber-500/30 text-amber-200">
            <span className="font-semibold block text-amber-400 mb-0.5">The Crowd's Mistake:</span>
            {story.historicalAnalogues[0]?.theCrowdMistake}
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Actionable Decision',
      subtitle: 'Calculated Strategy',
      icon: <Compass className="w-5 h-5 text-purple-400" />,
      color: 'border-purple-500/40 bg-purple-950/20 text-purple-200',
      badge: `${story.strategy.baseCase.probability}% Base Probability`,
      content: (
        <div className="space-y-3 text-xs">
          <div className="font-semibold text-sm text-purple-300">
            {story.strategy.headlineSummary}
          </div>
          <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
            {story.strategy.baseCase.playbook.map((step, idx) => (
              <li key={idx} className="leading-relaxed">{step}</li>
            ))}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-2">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold">
            Interactive Infographic
          </span>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            The Truth Deconstruction Pipeline
          </h3>
          <p className="text-xs text-slate-400">
            Click any phase to navigate from emotional headline to unbiased execution.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono">
          <span className="text-slate-400">Divergence Index:</span>
          <span className="text-rose-400 font-bold">{story.sentimentVsReality.divergenceDegree}%</span>
        </div>
      </div>

      {/* Pipeline Navigation Nodes */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-5">
        {steps.map((step, index) => {
          const isSelected = activeStep === index;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`p-3 rounded-xl border text-left transition-all duration-200 relative flex flex-col justify-between ${
                isSelected
                  ? `${step.color} shadow-lg ring-2 ring-offset-2 ring-offset-slate-950 ring-blue-500/50`
                  : 'border-slate-800 bg-slate-950/60 hover:bg-slate-800/60 text-slate-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                  {step.icon}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                  Phase {index + 1}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-xs leading-tight mb-0.5 text-slate-100">{step.title}</h4>
                <p className="text-[10px] text-slate-400 truncate">{step.subtitle}</p>
              </div>
              {isSelected && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-blue-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive */}
      <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-5 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
              {steps[activeStep].icon}
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                {steps[activeStep].title}
                <span className="text-xs px-2 py-0.5 rounded-full font-mono bg-slate-800 text-blue-400">
                  {steps[activeStep].badge}
                </span>
              </div>
              <div className="text-xs text-slate-400">{steps[activeStep].subtitle}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {activeStep > 0 && (
              <button
                onClick={() => setActiveStep((prev) => prev - 1)}
                className="px-2.5 py-1 text-xs rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300"
              >
                Previous
              </button>
            )}
            {activeStep < steps.length - 1 && (
              <button
                onClick={() => setActiveStep((prev) => prev + 1)}
                className="px-2.5 py-1 text-xs rounded bg-blue-600 hover:bg-blue-500 text-white font-medium flex items-center gap-1 shadow"
              >
                Next <ArrowRight className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {steps[activeStep].content}
      </div>
    </div>
  );
};

