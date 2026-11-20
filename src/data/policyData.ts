import { PolicyVector } from '../types';

export const POLICY_VECTORS: PolicyVector[] = [
  {
    id: 'bis-export-controls-semi',
    title: 'Advanced AI Accelerator & HBM Export Restriction Mandate',
    governingBody: 'Bureau of Industry and Security (BIS) / US Dept of Commerce',
    effectiveDate: 'Q4 2024 / Updated Guidance',
    status: 'enacted',
    category: 'tariffs_trade',
    summary:
      'Prohibits export of advanced computing chips with interconnect bandwidth over specified thresholds to restricted jurisdictions without bespoke individual license exemptions.',
    transmissionMechanism:
      'Direct revenue capping on restricted regional segments -> Acceleration of sovereign cloud infrastructure in Western/Allied nations -> Premium pricing power for domestic fabrication suppliers.',
    winners: [
      { target: 'Domestic US Cloud & Hyperscalers', reason: 'Consolidates cutting-edge computing hardware allocation domestically', upsideScore: 82 },
      { target: 'Packaging & Foundry Equipment (ASML, AMAT)', reason: 'Subsidized fab construction in US and Europe boosts capex backlog', upsideScore: 78 }
    ],
    losers: [
      { target: 'Chinese Cloud Vendors & Hardware Assemblers', reason: 'Severe compute deficit hampers large-scale frontier model training', downsideRisk: 88 },
      { target: 'Unhedged Hardware Component Exporters', reason: 'Lost 20-25% baseline revenue from previously accessible Chinese markets', downsideRisk: 65 }
    ]
  },
  {
    id: 'doj-big-tech-antitrust',
    title: 'DOJ Digital Ad-Tech & Search Distribution Antitrust Rulings',
    governingBody: 'US Department of Justice & Federal Courts',
    effectiveDate: 'Enforcement Phase 2024-2025',
    status: 'under_litigation',
    category: 'antitrust_reg',
    summary:
      'Federal court rulings declaring exclusive default search distribution contracts illegal, contemplating behavioral remedies, mandatory interoperability, or divestment of browser/OS defaults.',
    transmissionMechanism:
      'Eliminates billions in annual default fee transfers -> Frees open browser/OEM distribution channels -> Shifts ad-revenue pricing power toward independent discovery engines.',
    winners: [
      { target: 'Independent Ad Exchanges & AI Search Startups', reason: 'Breakup of default distribution contracts opens immediate market share', upsideScore: 76 },
      { target: 'Consumer Hardware OEMs (Apple, Samsung)', reason: 'Potential ability to auction multi-engine search placement to highest AI bidder', upsideScore: 71 }
    ],
    losers: [
      { target: 'Legacy Search Monopolies', reason: 'Erosion of default search moat and margin pressure on traffic acquisition costs', downsideRisk: 74 }
    ]
  },
  {
    id: 'fed-liquidity-qt-taper',
    title: 'Federal Reserve Balance Sheet Runoff Tapering (QT Slowdown)',
    governingBody: 'Federal Open Market Committee (FOMC)',
    effectiveDate: 'Ongoing Policy Vector',
    status: 'enacted',
    category: 'monetary',
    summary:
      'Fed reduced monthly Treasury redemption cap from $60B to $25B to prevent overnight repo spikes and preserve commercial bank reserve balances.',
    transmissionMechanism:
      'Reduces Treasury issuance absorption pressure on private primary dealers -> Dampens yield volatility on 10Y benchmarks -> Loosens financial conditions for high-multiple growth equities.',
    winners: [
      { target: 'Duration Fixed Income & Mortgages', reason: 'Lower Treasury supply dumping relieves upward pressure on long rates', upsideScore: 79 },
      { target: 'Growth & High-Beta Tech Equities', reason: 'Lower discount rate risk expands valuation multiples', upsideScore: 84 }
    ],
    losers: [
      { target: 'Ultra-Short Cash Equivalents', reason: 'Taper signals approaching yield floor for front-end money market funds', downsideRisk: 42 }
    ]
  },
  {
    id: 'crypto-fit21-stablecoin-framework',
    title: 'Financial Innovation and Technology for 21st Century Act (FIT21)',
    governingBody: 'US Congress & CFTC/SEC Regulatory Joint Taskforce',
    effectiveDate: 'Legislative Action / Committee Markups',
    status: 'proposed',
    category: 'crypto_legislation',
    summary:
      'Establishes explicit statutory boundary between digital commodities (CFTC) and investment contracts (SEC), creating regulated token issuance and bank-compliant stablecoin standards.',
    transmissionMechanism:
      'Provides safe-harbor institutional rails -> Eliminates legal ambiguity for Tier-1 US asset managers and retirement funds -> Sparks bank deposit tokenization.',
    winners: [
      { target: 'Institutional Grade Layer-1s (BTC, ETH, SOL)', reason: 'CFTC commodity designation unlocks spot ETF derivatives and staking yields', upsideScore: 91 },
      { target: 'Regulated Custodians & Prime Brokers', reason: 'Enormous fee explosion from mainstream corporate balance sheet allocations', upsideScore: 87 }
    ],
    losers: [
      { target: 'Offshore Unregistered Exchanges', reason: 'Capital flight toward compliant US regulated electronic venues', downsideRisk: 80 },
      { target: 'Predatory Token Launchpads & Memecoin Rugs', reason: 'Mandatory statutory disclosure and liability rules crush unregulated token emissions', downsideRisk: 95 }
    ]
  }
];
