import React from 'react';
import { FinancialStory } from '../../types';
import { AlertTriangle, ShieldAlert, CheckCircle2, ChevronRight, TrendingUp, Layers, Calendar, ExternalLink } from 'lucide-react';

interface Props {
  story: FinancialStory;
  isSelected: boolean;
  onSelect: () => void;
}

export const StoryCard: React.FC<Props> = ({ story, isSelected, onSelect }) => {
  const getBiasPill = (score: number) => {
    if (score >= 80) {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/30">
          Severe Bias ({score}/100)
        </span>
      );
    }
    if (score >= 60) {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
          High Bias ({score}/100)
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
        Moderate ({score}/100)
      </span>
    );
  };

  return (
    <div
      onClick={onSelect}
      className={`rounded-2xl p-4 cursor-pointer transition-all border backdrop-blur relative overflow-hidden group ${
        isSelected
          ? 'bg-slate-900/90 border-blue-500 shadow-xl ring-1 ring-blue-500/40'
          : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/75'
      }`}
    >
      {/* Top Meta Line */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
          <span className="font-semibold text-slate-300">{story.source}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3 text-slate-500" />
            {story.publishedAt}
          </span>
        </div>
        {getBiasPill(story.bias.sensationalismScore)}
      </div>

      {/* Title */}
      <h3 className="font-bold text-sm text-white group-hover:text-blue-300 transition-colors leading-snug mb-2">
        {story.title}
      </h3>

      {/* Excerpt */}
      <p className="text-xs text-slate-400 line-clamp-2 mb-3 leading-relaxed">
        {story.originalExcerpt}
      </p>

      {/* Badges / Metrics footer */}
      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/80 text-xs">
        <div className="flex items-center gap-1.5">
          {story.tickers.slice(0, 3).map((ticker) => (
            <span
              key={ticker}
              className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-cyan-300"
            >
              {ticker}
            </span>
          ))}
          {story.tickers.length > 3 && (
            <span className="text-[10px] text-slate-500 font-mono">
              +{story.tickers.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="text-slate-400">
            Divergence: <strong className="text-rose-400">{story.sentimentVsReality.divergenceDegree}%</strong>
          </span>
          <span className="flex items-center gap-0.5 text-blue-400 group-hover:translate-x-0.5 transition-transform font-semibold">
            Audit <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};
