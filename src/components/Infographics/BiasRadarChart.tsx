import React from 'react';
import { BiasMetrics } from '../../types';
import { Info, AlertCircle, ShieldCheck } from 'lucide-react';

interface Props {
  bias: BiasMetrics;
}

export const BiasRadarChart: React.FC<Props> = ({ bias }) => {
  // 5 dimensions for the radar:
  // 1. Sensationalism (0 - 100)
  // 2. Omission Degree (0 - 100)
  // 3. Emotive Intensity (0 - 100 based on count * 5 clamped)
  // 4. Institutional Conflict (arbitrary numeric mapping 75)
  // 5. Verifiable Data Deficit (100 - verifiableDataRatio)
  const emotiveIntensity = Math.min(100, bias.emotiveWordingCount * 5.5);
  const dataDeficit = Math.max(0, 100 - bias.verifiableDataRatio);
  const conflictScore = 80;

  const metrics = [
    { label: 'Sensationalism', value: bias.sensationalismScore, angle: -90 },
    { label: 'Context Omission', value: bias.omissionScore, angle: -18 },
    { label: 'Emotive Phrasing', value: emotiveIntensity, angle: 54 },
    { label: 'Conflict Risk', value: conflictScore, angle: 126 },
    { label: 'Data Deficit', value: dataDeficit, angle: 198 },
  ];

  const size = 260;
  const center = size / 2;
  const radius = 90;

  // Convert polar coordinates to Cartesian
  const getCoordinates = (value: number, angleDeg: number) => {
    const angleRad = (angleDeg * Math.PI) / 180;
    const r = (value / 100) * radius;
    const x = center + r * Math.cos(angleRad);
    const y = center + r * Math.sin(angleRad);
    return { x, y };
  };

  const polygonPoints = metrics
    .map((m) => {
      const { x, y } = getCoordinates(m.value, m.angle);
      return `${x},${y}`;
    })
    .join(' ');

  // Compute composite bias risk
  const avgRisk = Math.round(
    (bias.sensationalismScore + bias.omissionScore + emotiveIntensity + conflictScore + dataDeficit) / 5
  );

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-xl backdrop-blur flex flex-col justify-between">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider">
            Diagnostic Radar
          </span>
          <h3 className="text-base font-bold text-white flex items-center gap-1.5">
            Narrative Bias & Agenda Distortion
          </h3>
        </div>
        <div className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 ${
          avgRisk > 65
            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
            : avgRisk > 40
            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
        }`}>
          {avgRisk > 65 ? <AlertCircle className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
          Risk: {avgRisk}/100
        </div>
      </div>

      <div className="relative flex justify-center items-center my-3">
        <svg width={size} height={size} className="overflow-visible">
          {/* Background concentric reference rings */}
          {[0.25, 0.5, 0.75, 1.0].map((level, i) => (
            <circle
              key={i}
              cx={center}
              cy={center}
              r={radius * level}
              fill="none"
              stroke="#334155"
              strokeDasharray={level === 1.0 ? 'none' : '3 3'}
              strokeWidth="1"
            />
          ))}

          {/* Spokes from center */}
          {metrics.map((m, i) => {
            const end = getCoordinates(100, m.angle);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={end.x}
                y2={end.y}
                stroke="#334155"
                strokeWidth="1"
              />
            );
          })}

          {/* Polygon area for current story */}
          <polygon
            points={polygonPoints}
            fill="rgba(244, 63, 94, 0.25)"
            stroke="#f43f5e"
            strokeWidth="2"
            className="transition-all duration-500"
          />

          {/* Metric value dots and labels */}
          {metrics.map((m, i) => {
            const { x, y } = getCoordinates(m.value, m.angle);
            const labelPos = getCoordinates(125, m.angle);
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="4" fill="#fb7185" stroke="#881337" strokeWidth="1.5" />
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  className="text-[10px] font-mono fill-slate-300 font-medium"
                >
                  {m.label} ({Math.round(m.value)})
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-800/80">
        <div className="p-2 rounded bg-slate-950/70 border border-slate-800">
          <span className="text-slate-400 block text-[11px]">Hard Data Ratio:</span>
          <span className="font-mono font-bold text-emerald-400">{bias.verifiableDataRatio}% Verified</span>
        </div>
        <div className="p-2 rounded bg-slate-950/70 border border-slate-800">
          <span className="text-slate-400 block text-[11px]">Emotive Adjectives:</span>
          <span className="font-mono font-bold text-amber-400">{bias.emotiveWordingCount} Detected</span>
        </div>
      </div>
    </div>
  );
};
