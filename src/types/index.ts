export type AssetClass = 'equities' | 'crypto' | 'commodities' | 'bonds' | 'macro_fx';

export type InvestmentStyle = 'macro_swing' | 'deep_value' | 'long_term_dca' | 'event_driven';

export interface BiasMetrics {
  sensationalismScore: number; // 0 - 100
  institutionalConflict: string; // Disclosure of underlying commercial interest
  sourceLeaning: 'institutional_bull' | 'doom_bear' | 'retail_hype' | 'state_agenda' | 'objective_audit';
  omissionScore: number; // 0 - 100
  verifiableDataRatio: number; // 0 - 100
  emotiveWordingCount: number;
}

export interface DeconstructedFact {
  id: string;
  claimOrHeadline: string;
  agendaOrFraming: string;
  auditableFact: string;
  verificationSource: string;
  omittedContext: string;
  verdict: 'supported' | 'misleading_framing' | 'debunked' | 'selective_truth';
}

export interface HistoricalAnalogue {
  id: string;
  eventName: string;
  year: string;
  similarityScore: number; // 0 - 100
  catalystDescription: string;
  marketReaction: {
    day7: number; // % change
    day30: number;
    day90: number;
    day365: number;
    summary: string;
  };
  assetPerformance: {
    sp500: number;
    bondsOrYields: string;
    goldOrCommodities: number;
    cryptoOrSpecTech?: number;
  };
  theCrowdMistake: string;
  winningMove: string;
  keyLesson: string;
}

export interface PolicyVector {
  id: string;
  title: string;
  governingBody: string;
  effectiveDate: string;
  status: 'enacted' | 'proposed' | 'emergency_measure' | 'under_litigation';
  category: 'monetary' | 'fiscal_subsidy' | 'tariffs_trade' | 'antitrust_reg' | 'crypto_legislation';
  summary: string;
  transmissionMechanism: string;
  winners: { target: string; reason: string; upsideScore: number }[];
  losers: { target: string; reason: string; downsideRisk: number }[];
}

export interface DecisionStrategy {
  id: string;
  headlineSummary: string;
  baseCase: {
    probability: number;
    thesis: string;
    playbook: string[];
  };
  stressCase: {
    probability: number;
    thesis: string;
    playbook: string[];
  };
  bullSurprise: {
    probability: number;
    thesis: string;
    playbook: string[];
  };
  invalidationTriggers: string[];
  antiBiasPreMortem: {
    cognitiveTrap: string;
    warning: string;
    debiasingAction: string;
  }[];
}

export interface FinancialStory {
  id: string;
  title: string;
  source: string;
  authorOrHost: string;
  publishedAt: string;
  contentType: 'article' | 'video' | 'analyst_note' | 'central_bank_speech';
  originalExcerpt: string;
  assetClasses: AssetClass[];
  tickers: string[];
  bias: BiasMetrics;
  facts: DeconstructedFact[];
  historicalAnalogues: HistoricalAnalogue[];
  policyVector?: PolicyVector;
  strategy: DecisionStrategy;
  sentimentVsReality: {
    mediaHeadlineSentiment: 'panic' | 'bearish' | 'neutral' | 'bullish' | 'euphoria';
    underlyingDataReality: 'sound_fundamentals' | 'normal_cooling' | 'liquidity_rebound' | 'cyclical_overheat';
    divergenceDegree: number; // 0 to 100 (higher means media is lying or hyping compared to data)
  };
}

export interface UserPreferences {
  activeAssetClasses: AssetClass[];
  investmentStyle: InvestmentStyle;
  activeWidgets: {
    biasRadar: boolean;
    factVsAgenda: boolean;
    historicalRhymes: boolean;
    policyRadar: boolean;
    strategyPlaybook: boolean;
    infographicFlow: boolean;
    mistakeGuardrails: boolean;
  };
  riskTolerance: 'conservative' | 'balanced' | 'aggressive';
}

