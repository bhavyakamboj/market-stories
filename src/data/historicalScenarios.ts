import { HistoricalAnalogue } from '../types';

export const HISTORICAL_ANALOGUES: HistoricalAnalogue[] = [
  {
    id: 'dotcom-telecom-capex-2001',
    eventName: '2001 Telecom & Dot-Com CapEx Overbuild',
    year: '2000 - 2002',
    similarityScore: 84,
    catalystDescription:
      'Massive overinvestment in fiber optic cables and server infrastructure before consumer monetisation models matured. Cisco, Lucent, and Nortel fell 80-90% as orders collapsed.',
    marketReaction: {
      day7: -4.2,
      day30: -11.5,
      day90: -22.0,
      day365: -38.4,
      summary: 'Speculative tech imploded while value stocks and dividend payers held up remarkably well over a 3-year bear market.',
    },
    assetPerformance: {
      sp500: -44.0,
      bondsOrYields: '10Y Yield fell from 6.5% to 4.0%',
      goldOrCommodities: +22.5,
      cryptoOrSpecTech: -82.0,
    },
    theCrowdMistake:
      'Assuming that because the internet was the future, every internet-related infrastructure stock was worth any valuation. Then, throwing out good companies with bad ones during the 2002 trough.',
    winningMove:
      'Holding fortress-balance-sheet cash cows (e.g., Berkshire Hathaway gained +30% during this period) and buying secular winners (Amazon, Microsoft) at 80% discounts in late 2002.',
    keyLesson:
      'Infrastructure buildouts front-run utility by 3-5 years. Differentiate hardware shovel sellers from recurring software margin compounders.',
  },
  {
    id: 'svb-bank-crisis-2023',
    eventName: '2023 Regional Banking Crisis & BTFP Creation',
    year: 'March 2023',
    similarityScore: 92,
    catalystDescription:
      'Silicon Valley Bank and Signature Bank collapsed in 72 hours due to unhedged held-to-maturity Treasury bond losses and rapid digital bank runs. The Fed stepped in with emergency BTFP liquidity.',
    marketReaction: {
      day7: -3.8,
      day30: +5.2,
      day90: +11.8,
      day365: +29.5,
      summary: 'Initial panic selling in financials gave way to a historic tech rally fueled by stealth central bank balance-sheet expansion.',
    },
    assetPerformance: {
      sp500: +24.2,
      bondsOrYields: '2Y Yield crashed 100bps in 3 days (biggest since 1987)',
      goldOrCommodities: +14.6,
      cryptoOrSpecTech: +85.0,
    },
    theCrowdMistake:
      'Equating SVB to the 2008 Lehman crisis and dumping risk assets into cash right before the Fed created a backdoor liquidity valve.',
    winningMove:
      'Aggressively buying Mega-Cap Tech (QQQ) and Bitcoin as counter-banking-crisis liquidity beneficiaries.',
    keyLesson:
      'When the central bank guarantees all deposits and opens emergency loan windows, liquidity flows straight into pristine tech and scarce monetary assets.',
  },
  {
    id: 'trade-war-tantrum-2018',
    eventName: '2018 US-China Tariff Escalation & Fed Quantitative Tightening',
    year: '2018',
    similarityScore: 89,
    catalystDescription:
      'Section 301 tariffs rolled out against $250B of Chinese imports alongside Fed Chair Powell declaring balance-sheet runoff was "on autopilot". Market plunged nearly 20% by Christmas Eve.',
    marketReaction: {
      day7: -2.1,
      day30: -6.4,
      day90: -14.2,
      day365: +18.8,
      summary: 'A brutal Q4 2018 correction that reversed instantly in January 2019 when Powell surrendered and signaled rate pauses.',
    },
    assetPerformance: {
      sp500: -6.2,
      bondsOrYields: '10Y Yield peaked at 3.24% then collapsed to 1.9%',
      goldOrCommodities: +2.1,
      cryptoOrSpecTech: -73.0,
    },
    theCrowdMistake:
      'Extrapolating trade tariffs as permanent global depression catalysts and selling at the December 2018 bottom.',
    winningMove:
      'Accumulating domestic US cash-rich equities and duration bonds as soon as the Federal Reserve signaled its dovish pivot.',
    keyLesson:
      'Tariff headlines trigger violent 10-15% multiple contractions, but policy pivots always precede systemic recovery. Buy the headline climax.',
  },
  {
    id: 'stagflation-oil-shock-1973',
    eventName: '1973-1974 OPEC Oil Embargo & Cost-Push Shock',
    year: '1973 - 1974',
    similarityScore: 78,
    catalystDescription:
      'OPEC halted crude shipments to Western allies, quadrupling oil prices from $3 to $12 per barrel while CPI skyrocketed into double digits. S&P 500 dropped nearly 48%.',
    marketReaction: {
      day7: -3.5,
      day30: -8.1,
      day90: -18.7,
      day365: -41.2,
      summary: 'Two full years of grinding stagflation where traditional 60/40 stock and bond portfolios failed simultaneously.',
    },
    assetPerformance: {
      sp500: -48.2,
      bondsOrYields: 'Yields surged to 8%',
      goldOrCommodities: +135.0,
    },
    theCrowdMistake:
      'Staying anchored in paper fixed income bonds and "Nifty Fifty" blue-chip consumer stocks that had no pricing power against raw material inflation.',
    winningMove:
      'Heavy allocation to physical commodities, gold, oil producers, and companies with real asset collateral and pricing power.',
    keyLesson:
      'In a cost-push commodity shock, financial assets contract while tangible physical resources capture the margin premium.',
  },
  {
    id: 'covid-liquidity-bazooka-2020',
    eventName: 'March 2020 COVID Panic & Unlimited Quantitative Easing',
    year: '2020',
    similarityScore: 82,
    catalystDescription:
      'Global lockdowns halted economies, causing the fastest 30% drop in stock market history. The Fed initiated open-ended bond buying and Congress passed the CARES Act.',
    marketReaction: {
      day7: -12.4,
      day30: +18.5,
      day90: +39.2,
      day365: +74.8,
      summary: 'The shortest bear market in human history, followed by an unprecedented all-asset speculative surge.',
    },
    assetPerformance: {
      sp500: +67.9,
      bondsOrYields: 'Fed slashed policy rate to 0-0.25%',
      goldOrCommodities: +25.1,
      cryptoOrSpecTech: +380.0,
    },
    theCrowdMistake:
      'Waiting for "things to get back to normal" or economic data to improve before buying. Economic data was catastrophic in April/May 2020 while markets hit new highs.',
    winningMove:
      'Buying on March 23, 2020, the exact day the Federal Reserve declared unlimited secondary market bond and credit purchases.',
    keyLesson:
      'Markets bottom on peak pessimism, not when the economy is healed. Central bank liquidity bazookas overpower current earnings declines.',
  }
];

