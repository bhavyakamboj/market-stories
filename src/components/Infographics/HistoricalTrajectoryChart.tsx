import React, { useState } from 'react';
import { HistoricalAnalogue } from '../../types';
import { TrendingUp, TrendingDown, Clock, ShieldAlert, Award, Compass } from 'lucide-react';

interface Props {
  analogues: HistoricalAnalogue[];
}

export const HistoricalTrajectoryChart: React.FC<Props> = ({ analogues }) => {
  const [selectedId, setSelectedId] = useState<string>(analogues[0]?.id || '');
  const active = analogues.find((a) => a.id === selectedId) || analogues[0];

  if (!active) return null;

  const trajectoryPoints = [
    { label: 'Day 0 (Catalyst)', val: 0, crowdAction: 'Shock Headline' },
    { label: 'Day 7 (Panic Spike)', val: active.marketReaction.day7, crowdAction: 'Indiscriminate Selling' },
    { label: 'Day 30 (Capitulation)', val: active.marketReaction.day30, crowdAction: 'Media Declares Doom' },
    { label: 'Day 90 (Smart Accumulation)', val: active.marketReaction.day90, crowdAction: 'Liquidity Rebounds' },
    { label: 'Day 365 (1Y Realization)', val: active.marketReaction.day365, crowdAction: 'Fundamentals Win Out' },
  ];

  // Calculate SVG bounds
  const width = 560;
  const height = 180;
  const paddingX = 40;
  const paddingY = 30;

  const minVal = Math.min(...trajectoryPoints.map((p) => p.val), -20);
  const maxVal = Math.max(...trajectoryPoints.map((p) => p.val), 30);
  const valRange = maxVal - minVal || 1;

  const getX = (idx: number) => paddingX + (idx / (trajectoryPoints.length - 1)) * (width - 2 * paddingX);
  const getY = (val: number) => height - paddingY - ((val - minVal) / valRange) * (height - 2 * paddingY);
  const zeroY = getY(0);

  const pointsString = trajectoryPoints.map((p, idx) => `${getX(idx)},${getY(p.val)}`).join(' ');

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-800 gap-3">
        <div>
          <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
            Empirical History Engine
          </span>
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            Historical Rhymes & Market Trajectories
          </h3>
          <p className="text-xs text-slate-400">
            How markets reacted across 1Y to similar past catalyst shocks.
          </p>
        </div>

        {/* Analogue selector pill tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {analogues.map((analogue) => (
            <button
              key={analogue.id}
              onClick={() => setSelectedId(analogue.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors whitespace-nowrap ${
                selectedId === analogue.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'bg-slate-950 text-slate-400 border border-slate-800 hover:bg-slate-800'
              }`}
            >
              {analogue.year} ({analogue.similarityScore}%)
            </button>
          ))}
        </div>
      </div>

      {/* SVG Trajectory Chart */}
      <div className="bg-slate-950/80 border border-slate-800/80 rounded-xl p-4 mb-4 relative overflow-hidden">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span className="font-mono text-cyan-300 font-semibold">{active.eventName}</span>
          <span className="font-mono">
            1-Year Net Return: <strong className={active.marketReaction.day365 >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
              {active.marketReaction.day365 > 0 ? `+${active.marketReaction.day365}%` : `${active.marketReaction.day365}%`}
            </strong>
          </span>
        </div>

        <div className="w-full overflow-x-auto">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-44">
            {/* Zero Baseline */}
            <line
              x1={paddingX}
              y1={zeroY}
              x2={width - paddingX}
              y2={zeroY}
              stroke="#475569"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            <text x={paddingX - 10} y={zeroY + 3} textAnchor="end" className="text-[10px] fill-slate-500 font-mono">
              0%
            </text>

            {/* Gradient Fill under curve */}
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Area polygon */}
            <polygon
              points={`${getX(0)},${zeroY} ${pointsString} ${getX(trajectoryPoints.length - 1)},${zeroY}`}
              fill="url(#chartGradient)"
            />

            {/* The Trajectory Line */}
            <polyline
              points={pointsString}
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Nodes on the line */}
            {trajectoryPoints.map((pt, idx) => {
              const x = getX(idx);
              const y = getY(pt.val);
              const isPositive = pt.val >= 0;
              return (
                <g key={idx}>
                  <circle cx={x} cy={y} r="5" fill="#06b6d4" stroke="#083344" strokeWidth="2" />
                  <text
                    x={x}
                    y={y - 10}
                    textAnchor="middle"
                    className={`text-[11px] font-mono font-bold ${
                      isPositive ? 'fill-emerald-400' : 'fill-rose-400'
                    }`}
                  >
                    {isPositive ? `+${pt.val}%` : `${pt.val}%`}
                  </text>
                  <text
                    x={x}
                    y={height - 8}
                    textAnchor="middle"
                    className="text-[9px] fill-slate-400 font-mono"
                  >
                    {pt.label.split(' ')[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Crowd Mistake vs Winning Move Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/30 text-rose-200">
          <div className="flex items-center gap-2 font-bold text-rose-400 mb-1">
            <ShieldAlert className="w-4 h-4" />
            The Historical Crowd Mistake
          </div>
          <p className="leading-relaxed text-slate-300">
            {active.theCrowdMistake}
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-200">
          <div className="flex items-center gap-2 font-bold text-emerald-400 mb-1">
            <Award className="w-4 h-4" />
            The Proven Winning Move
          </div>
          <p className="leading-relaxed text-slate-300">
            {active.winningMove}
          </p>
        </div>
      </div>
    </div>
  );
};
