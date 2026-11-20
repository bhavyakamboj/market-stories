import { FinancialStory } from '../types';
import { HISTORICAL_ANALOGUES } from './historicalScenarios';
import { POLICY_VECTORS } from './policyData';

export const MOCK_STORIES: FinancialStory[] = [
  {
    id: 'ai-capex-bubble-narrative',
    title: 'The $1 Trillion AI CapEx Bubble: "Hyperscalers Building A Black Hole With No ROI"',
    source: 'Wall Street Headline Digest & Cable Business Network',
    authorOrHost: 'Senior Tech Equities Contributor',
    publishedAt: '2024-10-18',
    contentType: 'article',
    originalExcerpt:
      'Silicon Valley is setting fire to shareholder capital. With Microsoft, Alphabet, Meta, and Amazon projected to spend over $200B in 2024 alone on NVIDIA chips and data centers, where is the revenue? Wall Street analysts are sounding the emergency alarm: GenAI enterprise software revenue is a drop in the ocean compared to this historic burn rate. A dot-com crash 2.0 is already unfolding!',
    assetClasses: ['equities'],
    tickers: ['NVDA', 'MSFT', 'GOOGL', 'AMZN', 'QQQ'],
    bias: {
      sensationalismScore: 88,
      institutionalConflict:
        'Major sell-side desks publishing bearish research notes had previously trimmed tech overweights to hedge high-beta market risk; headline relies heavily on selective 1-quarter software monetisation metrics.',
      sourceLeaning: 'doom_bear',
      omissionScore: 82,
      verifiableDataRatio: 34,
      emotiveWordingCount: 17,
    },
    facts: [
      {
        id: 'f1',
        claimOrHeadline: 'Hyperscalers are lighting money on fire with zero revenue to show for GenAI.',
        agendaOrFraming: 'Framing massive capital expenditure as speculative waste, ignoring cloud infrastructure utilization and margin durability.',
        auditableFact:
          'Microsoft Azure reported 33% revenue growth (with 8 percentage points directly attributable to AI services). Google Cloud reported $11.35B in revenue (+35% YoY) with operating margins rising from 3.2% to 17.1%.',
        verificationSource: 'SEC Form 10-Q (MSFT & GOOGL Q3 2024 Filings)',
        omittedContext:
          'CapEx is funded 100% by operating cash flows (over $100B combined annual FCF), not junk debt or dilution like in the 2000 dot-com era.',
        verdict: 'misleading_framing',
      },
      {
        id: 'f2',
        claimOrHeadline: 'NVIDIA GPU demand is experiencing a catastrophic cliff drop as buyers pull back.',
        agendaOrFraming: 'Creating panic about inventory glut to trigger short-term options volatility.',
        auditableFact:
          'Blackwell GPU supply is sold out for the next 12 months with TSMC packaging capacity running at 100% utilization.',
        verificationSource: 'TSMC Monthly Revenue Reports & NVIDIA Investor Day Transcript',
        omittedContext:
          'Cloud customers report internal compute deficits; demand is supply-constrained, not demand-exhausted.',
        verdict: 'debunked',
      },
      {
        id: 'f3',
        claimOrHeadline: 'Depreciation costs will decimate hyperscaler profit margins over the next 24 months.',
        agendaOrFraming: 'Mathematically sound accounting concern, but exaggerated without recognizing extended 5-year server lifecycle depreciation schedules.',
        auditableFact:
          'Accelerated computing servers amortize over 4-6 years. Hyperscalers have already booked high gross margins (68-70%) absorbing current depreciation.',
        verificationSource: 'FASB Accounting Standard Codification ASC 360',
        omittedContext:
          'Hyperscalers have reduced corporate general & administrative headcount to offset server hardware depreciation expenses.',
        verdict: 'selective_truth',
      },
    ],
    historicalAnalogues: [
      HISTORICAL_ANALOGUES[0], // 2001 Dot Com CapEx
      HISTORICAL_ANALOGUES[1], // 2023 SVB / Liquidity
    ],
    policyVector: POLICY_VECTORS[0], // BIS Export controls
    strategy: {
      id: 'strat-ai-capex',
      headlineSummary: 'Separate Free-Cash-Flow Hyperscalers From Speculative Unfunded Neoclouds',
      baseCase: {
        probability: 60,
        thesis:
          'CapEx remains resilient because cloud titans have pristine balance sheets and compute scarcity is an existential competitive moat. Multiples compress modestly on hardware but expand on software leaders.',
        playbook: [
          'Maintain core allocation in high-FCF hyperscalers (GOOGL, MSFT) that self-fund CapEx.',
          'Take advantage of emotional 8-12% pullbacks in semiconductor leaders with booked backlogs (NVDA, TSM).',
          'Trim unprofitable AI SaaS startups lacking proprietary model distribution.',
        ],
      },
      stressCase: {
        probability: 25,
        thesis:
          'Enterprise enterprise spending slows in non-tech sectors; hyperscalers announce sequential CapEx deceleration for 2026, leading to a 20-25% cyclical drawdown across semiconductor supply chain.',
        playbook: [
          'Hedge semiconductor exposure via long put spreads on SMH.',
          'Rotate capital into defensive low-beta cash flow compounders (Healthcare, Utilities, Infrastructure).',
        ],
      },
      bullSurprise: {
        probability: 15,
        thesis:
          'Autonomous agents and multimodal enterprise deployments hit productivity inflection; ARR multiplies faster than CapEx growth.',
        playbook: [
          'Add high-operating-leverage AI productivity software platforms.',
          'Overweight power infrastructure and electrical grid suppliers supporting data center megawatts.',
        ],
      },
      invalidationTriggers: [
        'Hyperscaler combined Operating Cash Flow turns negative or drops >20% YoY.',
        'TSMC fab utilization drops below 80% on 3nm/4nm nodes.',
        'Major Tier-1 cloud provider announces official multi-billion cancellation of Blackwell/Rubin purchase orders.',
      ],
      antiBiasPreMortem: [
        {
          cognitiveTrap: 'Narrative Fallacy & Dot-Com Analogy Trap',
          warning: 'Assuming every tech infrastructure spend must repeat the 2000 disaster without looking at cash flows.',
          debiasingAction: 'Check operating cash flow vs debt ratios. In 2000, Cisco clients paid with vendor debt; in 2024, Big Tech sits on $300B+ in cash.',
        },
        {
          cognitiveTrap: 'Recency Bias on Headline Volatility',
          warning: 'Panic selling during a 10% media-induced tech dip only to buy back higher when earnings beat.',
          debiasingAction: 'Set pre-determined valuation limit orders based on PEG ratios rather than headline sentiment.',
        },
      ],
    },
    sentimentVsReality: {
      mediaHeadlineSentiment: 'panic',
      underlyingDataReality: 'sound_fundamentals',
      divergenceDegree: 78,
    },
  },
  {
    id: 'fed-inflation-stagflation-panic',
    title: 'Fed Rate Cut Freeze & "Sticky Inflation" Alarm: Financial Pundits Warn of 1970s Double-Dip Hell',
    source: 'Macro Commentary Daily & Cable Morning Broadcast',
    authorOrHost: 'Macro Desk Anchor',
    publishedAt: '2024-11-04',
    contentType: 'video',
    originalExcerpt:
      'Inflation is roaring back and the Federal Reserve is completely cornered! Core services and energy are spiking, meaning interest rates will need to stay "higher for an eternity". The bond market is in full revolt, yields are surging to 5%, and a catastrophic recession will decimate both stocks and 401(k) portfolios. Cash is the only safe haven!',
    assetClasses: ['bonds', 'equities', 'macro_fx'],
    tickers: ['TLT', 'SPY', 'DXY', 'US10Y', 'GLD'],
    bias: {
      sensationalismScore: 84,
      institutionalConflict:
        'Sponsored segments funded by retail gold dealers and short-duration cash asset managers pushing high-fee structured cash deposits.',
      sourceLeaning: 'doom_bear',
      omissionScore: 76,
      verifiableDataRatio: 42,
      emotiveWordingCount: 15,
    },
    facts: [
      {
        id: 'f2-1',
        claimOrHeadline: 'Inflation is re-accelerating uncontrollably toward 1970s double-digit stagflation.',
        agendaOrFraming: 'Using one-month headline CPI bump to declare multi-year policy failure.',
        auditableFact:
          'Headline CPI is hovering between 2.4% - 2.8% (down from 9.1% peak in June 2022). Core PCE (the Fed preferred metric) is tracking at 2.7% annualized.',
        verificationSource: 'US Bureau of Labor Statistics (BLS) CPI Report & BEA PCE Release',
        omittedContext:
          'Housing & Shelter CPI uses lagged survey data (OER) that takes 12-18 months to reflect real-time private market rent indices (Zillow/ApartmentList show 0.5% rent growth).',
        verdict: 'misleading_framing',
      },
      {
        id: 'f2-2',
        claimOrHeadline: 'The 10-Year Treasury yield surge to 4.4% means the bond market is predicting runaway inflation.',
        agendaOrFraming: 'Attributing yield movements purely to inflation fear rather than economic growth resilience and Treasury debt issuance dynamics.',
        auditableFact:
          '10-Year Breakeven Inflation rate remains anchored between 2.2% - 2.35%, proving long-term inflation expectations are firmly within historical bounds.',
        verificationSource: 'Federal Reserve Bank of St. Louis (FRED 10Y Breakeven)',
        omittedContext:
          'Real yields (TIPS) rose due to blowout GDP prints (+2.8% annualized), reflecting growth strength rather than currency debasement panic.',
        verdict: 'selective_truth',
      },
    ],
    historicalAnalogues: [
      HISTORICAL_ANALOGUES[3], // 1973 Oil Shock & Stagflation
      HISTORICAL_ANALOGUES[2], // 2018 QT & Rate hike tantrum
    ],
    policyVector: POLICY_VECTORS[2], // Fed QT taper
    strategy: {
      id: 'strat-fed-macro',
      headlineSummary: 'Exploit Real Yield Spikes; Avoid Holding Long-Term Excess Zero-Yield Cash',
      baseCase: {
        probability: 55,
        thesis:
          'US economy remains in a resilient nominal growth regime. Central bank is moving toward neutral policy rates (3.50% - 4.00%), not emergency tightening. Yield spikes represent bond buying opportunities.',
        playbook: [
          'DCA into intermediate duration Treasuries (IEF / 5-7Y) when 10Y yield crosses 4.40%.',
          'Favor high-quality companies with pricing power and high Return on Invested Capital (ROIC).',
          'Maintain gold hedge (5-10%) against long-term fiscal debt debasement.',
        ],
      },
      stressCase: {
        probability: 30,
        thesis:
          'Geopolitical energy supply disruptions push WTI crude above $95/barrel, delaying rate easing until late 2025 and compressing equity multiples.',
        playbook: [
          'Overweight Energy sector (XLE) and industrial commodities.',
          'Reduce speculative high-debt small-cap exposure.',
        ],
      },
      bullSurprise: {
        probability: 15,
        thesis:
          'Productivity surge from digitization suppresses unit labor costs; inflation drops below 2% faster than expected, sparking a violent bond rally.',
        playbook: [
          'Extend bond duration aggressively (TLT).',
          'Leverage interest-rate-sensitive real estate and solar equities.',
        ],
      },
      invalidationTriggers: [
        '5-Year Forward Inflation Expectation Rate breaks above 3.0% on FRED.',
        'US Unemployment rate spikes above 5.0% in consecutive months (triggering the Sahm Rule).',
      ],
      antiBiasPreMortem: [
        {
          cognitiveTrap: 'Loss Aversion & Cash Hoarding',
          warning: 'Parking money in cash at 4.5% while inflation-adjusted equities and real assets deliver superior multi-year compounding.',
          debiasingAction: 'Review real returns: Cash after taxes and 2.5% inflation yields under 1.5% net, while index earnings yields compound with dividend growth.',
        },
      ],
    },
    sentimentVsReality: {
      mediaHeadlineSentiment: 'panic',
      underlyingDataReality: 'normal_cooling',
      divergenceDegree: 85,
    },
  },
  {
    id: 'global-tariff-trade-war-disruption',
    title: 'Trade War 2.0: "Universal Tariffs Will Trigger Global Depression & Cripple Supply Chains"',
    source: 'International Financial Review & Editorial Op-Ed',
    authorOrHost: 'Global Trade Policy Analyst',
    publishedAt: '2024-11-12',
    contentType: 'article',
    originalExcerpt:
      'Sweeping across-the-board tariffs of 10% to 20% on all global trading partners, alongside 60% levies on Asian imports, will dismantle three decades of globalization. Auto prices will skyrocket by $8,000 per vehicle, consumer discretionary spending will grind to an immediate halt, and retaliatory tariffs from the EU and China will decimate American agriculture and aerospace!',
    assetClasses: ['equities', 'macro_fx', 'commodities'],
    tickers: ['F', 'GM', 'CAT', 'BA', 'FXI', 'EURUSD'],
    bias: {
      sensationalismScore: 79,
      institutionalConflict:
        'Published by an import-dependent corporate lobby think tank with substantial multinational corporate donor sponsorship.',
      sourceLeaning: 'doom_bear',
      omissionScore: 68,
      verifiableDataRatio: 45,
      emotiveWordingCount: 14,
    },
    facts: [
      {
        id: 'f3-1',
        claimOrHeadline: 'A blanket 10-20% tariff will directly increase US consumer prices dollar-for-dollar.',
        agendaOrFraming: 'Treating tariff statutory rates as 100% passed through to consumer prices, omitting currency offsets and supply substitution.',
        auditableFact:
          'During the 2018-2019 Section 301 tariffs, the US Dollar (DXY) appreciated by 8.5%, significantly cheapening foreign import costs in local currency terms, while Chinese exporters lowered FOB pricing to preserve market share.',
        verificationSource: 'Federal Reserve Bank of New York Staff Report #890 & IMF Trade Working Paper',
        omittedContext:
          'Statutory tariff announcements are frequently opening negotiating positions; historically, final enacted tariffs contain extensive exemptions for critical inputs and bilateral carve-outs.',
        verdict: 'misleading_framing',
      },
      {
        id: 'f3-2',
        claimOrHeadline: 'Domestic manufacturing will instantly boom and create millions of factory jobs within months.',
        agendaOrFraming: 'Pro-tariff political propaganda framing complex capital-intensive reshoring as an overnight process.',
        auditableFact:
          'Constructing modern semiconductor fabs, battery facilities, or automated tooling plants requires 3 to 5 years of permitting, cleanroom certification, and specialized engineering labor.',
        verificationSource: 'National Association of Manufacturers (NAM) Capital Expenditure Survey',
        omittedContext:
          'Tariffs on raw intermediate materials (steel, aluminum) raise manufacturing input costs for downstream domestic fabricators before new local mills come online.',
        verdict: 'selective_truth',
      },
    ],
    historicalAnalogues: [
      HISTORICAL_ANALOGUES[2], // 2018 Trade War Tantrum
    ],
    policyVector: POLICY_VECTORS[0], // BIS Semi controls & Tariffs
    strategy: {
      id: 'strat-tariffs-macro',
      headlineSummary: 'Long Domestic Moats and Onshoring Infrastructure; Short High-Import Margin Exporters',
      baseCase: {
        probability: 65,
        thesis:
          'Tariff rhetoric causes front-loaded inventory building followed by bilateral exemptions. The US Dollar strengthens, pressuring emerging market currencies while domestic automation and construction equipment leaders outperform.',
        playbook: [
          'Overweight domestic US reshoring leaders: electrical equipment, industrial automation, domestic waste/materials.',
          'Underweight consumer electronics and footwear retail companies with >50% supply exposure to unhedged single-country Asian imports.',
          'Long US Dollar (USD) relative to export-dependent currencies (EUR, CNH).',
        ],
      },
      stressCase: {
        probability: 25,
        thesis:
          'Hardline enforcement with zero exemptions triggers broad retaliation on US agricultural and aircraft exports, compressing S&P 500 profit margins by 3-5%.',
        playbook: [
          'Short or buy protective puts on multinational industrial exporters (CAT, BA).',
          'Long Gold and physical commodities insulated from export bans.',
        ],
      },
      bullSurprise: {
        probability: 10,
        thesis:
          'Threat of tariffs forces immediate bilateral trade agreements with key allies, resulting in reduced foreign non-tariff barriers for US services.',
        playbook: [
          'Aggressively buy oversold European and Asian equities trading at single-digit forward P/E multiples.',
        ],
      },
      invalidationTriggers: [
        'World Trade Organization or bilateral agreements enact immediate sweeping tariff freezes.',
        'US Dollar weakens >5% following tariff enactment (contradicting historical monetary transmission).',
      ],
      antiBiasPreMortem: [
        {
          cognitiveTrap: 'Political Confirmation Bias',
          warning: 'Allowing personal feelings about politicians to dictate portfolio asset allocation.',
          debiasingAction: 'Ignore partisan commentary; track actual customs collection revenue and corporate pricing elasticity data on 10-K filings.',
        },
      ],
    },
    sentimentVsReality: {
      mediaHeadlineSentiment: 'panic',
      underlyingDataReality: 'cyclical_overheat',
      divergenceDegree: 72,
    },
  },
  {
    id: 'crypto-regulatory-crackdown-extinction',
    title: 'SEC Digital Asset Crackdown: "The End of Cryptocurrency and Decentralized Finance in America"',
    source: 'Crypto News Portal & Financial Media Syndicate',
    authorOrHost: 'Digital Currency Editor',
    publishedAt: '2024-09-24',
    contentType: 'article',
    originalExcerpt:
      'With Wells notices raining down on leading decentralized exchanges and regulatory enforcement actions expanding across staking protocols, the government is executing Operation Choke Point 2.0. Digital assets are being driven offshore permanently, and retail investors holding altcoins risk holding worthless tokens as US liquidity evaporates!',
    assetClasses: ['crypto'],
    tickers: ['BTC', 'ETH', 'SOL', 'COIN'],
    bias: {
      sensationalismScore: 86,
      institutionalConflict:
        'Funded by offshore crypto casinos and venture funds looking to justify offshore token unlocks without complying with investor disclosure rules.',
      sourceLeaning: 'retail_hype',
      omissionScore: 74,
      verifiableDataRatio: 40,
      emotiveWordingCount: 19,
    },
    facts: [
      {
        id: 'f4-1',
        claimOrHeadline: 'The SEC is outlawing all crypto trading and closing down US access to Bitcoin.',
        agendaOrFraming: 'Conflating regulatory enforcement on unregistered retail token offerings with the legal status of decentralized commodities.',
        auditableFact:
          'The SEC officially approved 11 Spot Bitcoin ETFs and 8 Spot Ethereum ETFs in 2024, operated by BlackRock, Fidelity, and Franklin Templeton, which collectively hold over $70 Billion in audited net asset value.',
        verificationSource: 'SEC Release No. 34-99306 & Form 8-A Registration Statements',
        omittedContext:
          'Regulatory scrutiny targets centralized entities using customer deposits for proprietary trading or issuing unregistered speculative securities with centralized admin keys, not core decentralized protocols.',
        verdict: 'misleading_framing',
      },
      {
        id: 'f4-2',
        claimOrHeadline: 'Institutional capital is fleeing crypto assets permanently due to enforcement lawsuits.',
        agendaOrFraming: 'Ignoring historic institutional inflows and sovereign wealth interest.',
        auditableFact:
          'Institutional crypto inflows in 2024 exceeded $28 Billion—shattering the 2021 bull market record—driven by pension funds, registered investment advisors (RIAs), and university endowments.',
        verificationSource: 'CoinShares Weekly Fund Flows & Morningstar Institutional Asset Allocation Data',
        omittedContext:
          'Bipartisan legislation (FIT21) passed the US House of Representatives with 71 Democratic votes, demonstrating a clear legislative shift toward statutory clarity.',
        verdict: 'debunked',
      },
    ],
    historicalAnalogues: [
      HISTORICAL_ANALOGUES[1], // 2023 SVB & Banking Liquidity
      HISTORICAL_ANALOGUES[4], // 2020 March Liquidity Bazooka
    ],
    policyVector: POLICY_VECTORS[3], // FIT21 Crypto Framework
    strategy: {
      id: 'strat-crypto-policy',
      headlineSummary: 'Focus on Sovereign & Institutional Grade Digital Assets; Avoid Unregistered Speculative Tokens',
      baseCase: {
        probability: 70,
        thesis:
          'Regulatory enforcement acts as an institutional cleaning mechanism. Low-quality speculative tokens bleed value, while Bitcoin and Ethereum cement their position as regulated alternative reserve assets.',
        playbook: [
          'Keep 80-90% of crypto asset exposure concentrated in institutional-grade commodities (BTC, ETH).',
          'Accumulate regulated picks-and-shovels infrastructure (Coinbase, regulated custodians) during enforcement-driven selloffs.',
          'Utilize self-custody cold storage to mitigate counterparty and regulatory intermediary risk.',
        ],
      },
      stressCase: {
        probability: 20,
        thesis:
          'Adverse court rulings classify staking rewards as investment contracts, creating tax reporting complexity that temporarily suppresses institutional staking yields.',
        playbook: [
          'Rotate from liquid staking derivatives into native Bitcoin spot exposure.',
        ],
      },
      bullSurprise: {
        probability: 10,
        thesis:
          'Passage of comprehensive statutory crypto market structure legislation (FIT21) and statutory stablecoin bill, unlocking $100B+ in corporate balance sheet allocations.',
        playbook: [
          'Add high-throughput decentralized finance settlement layers (SOL, top DeFi protocols).',
        ],
      },
      invalidationTriggers: [
        'Global spot Bitcoin ETF net outflows exceed $5B continuously for 60 consecutive trading days.',
        'Cryptographic vulnerability discovered in SHA-256 or core consensus clients.',
      ],
      antiBiasPreMortem: [
        {
          cognitiveTrap: 'Herd Panic at the Bottom of Regulatory Cycles',
          warning: 'Selling spot crypto assets when headlines proclaim "crypto is dead", precisely when institutional accumulation is at record highs.',
          debiasingAction: 'Monitor on-chain accumulation wallets holding >1,000 BTC vs retail exchange inflows. Smart money accumulates into regulatory headlines.',
        },
      ],
    },
    sentimentVsReality: {
      mediaHeadlineSentiment: 'panic',
      underlyingDataReality: 'liquidity_rebound',
      divergenceDegree: 88,
    },
  },
  {
    id: 'opec-crude-supply-shock',
    title: 'OPEC+ Surprise Production Cuts: "Oil Set for $120/bbl, Sparking Crushing Transportation Shock"',
    source: 'Commodity Pulse Weekly & Energy Desk',
    authorOrHost: 'Energy Markets Chief Strategist',
    publishedAt: '2024-10-02',
    contentType: 'analyst_note',
    originalExcerpt:
      'A secret cartel pact between Riyadh and Moscow will slash another 1.2 million barrels per day from global crude output. Analysts are scrambling to raise price targets to $120. Airlines will hemorrhage cash, trucking fleets will fail, and consumer gas pump prices will breach $5/gallon before the holidays!',
    assetClasses: ['commodities', 'equities'],
    tickers: ['USO', 'XLE', 'CVX', 'DAL', 'BNO'],
    bias: {
      sensationalismScore: 78,
      institutionalConflict:
        'Commodity trading desk had taken long call options in Brent futures prior to releasing speculative research note to corporate clients.',
      sourceLeaning: 'institutional_bull',
      omissionScore: 71,
      verifiableDataRatio: 48,
      emotiveWordingCount: 13,
    },
    facts: [
      {
        id: 'f5-1',
        claimOrHeadline: 'Global crude markets face an immediate physical deficit of 1.2M barrels per day.',
        agendaOrFraming: 'Quoting paper production quota announcements without verifying actual OPEC+ member adherence or non-OPEC production growth.',
        auditableFact:
          'US crude oil production hit a record 13.4 million barrels per day, while Guyana and Brazil added over 800,000 bpd of new non-OPEC supply, neutralizing nearly 70% of announced cuts.',
        verificationSource: 'US Energy Information Administration (EIA) Short-Term Energy Outlook',
        omittedContext:
          'OPEC+ nations consistently over-produce relative to their quotas due to sovereign fiscal budget breakeven pressures (e.g. Iraq and Kazakhstan producing above target).',
        verdict: 'misleading_framing',
      },
    ],
    historicalAnalogues: [
      HISTORICAL_ANALOGUES[3], // 1973 Oil Shock
    ],
    strategy: {
      id: 'strat-oil-shock',
      headlineSummary: 'Play Downstream Margin Expansion Rather Than Chasing Front-Month Crude Futures',
      baseCase: {
        probability: 60,
        thesis:
          'Crude oil remains range-bound between $68 and $82 as non-OPEC supply offsets cartel discipline. Upstream energy producers generate massive cash returns through buybacks and dividends without requiring $100 oil.',
        playbook: [
          'Hold low-breakeven Permian Basin operators (e.g. producers with sub-$40 breakeven) collecting 8-10% shareholder yields.',
          'Do not chase unhedged commodity futures or levered energy ETFs on headline spikes.',
        ],
      },
      stressCase: {
        probability: 25,
        thesis:
          'Critical maritime choke points (Strait of Hormuz, Bab el-Mandeb) face sustained military blockades, causing temporary physical spot freight premiums.',
        playbook: [
          'Buy tanker shipping equities (FRO, STNG) benefiting from elongated maritime detour routes.',
        ],
      },
      bullSurprise: {
        probability: 15,
        thesis:
          'Global manufacturing PMI enters synchronised expansion while cartel maintains compliance, pushing Brent crude sustainably above $90.',
        playbook: [
          'Long offshore deepwater drillers and oilfield services (SLB, BKR).',
        ],
      },
      invalidationTriggers: [
        'US commercial crude inventories build unexpectedly by >5 million barrels for 3 consecutive weeks.',
      ],
      antiBiasPreMortem: [
        {
          cognitiveTrap: 'Headline Extrapolation Trap',
          warning: 'Assuming every oil supply headline means $150 oil like 2008 or 1973.',
          debiasingAction: 'Always examine global non-OPEC supply elasticities and refinery crack spreads before trading energy.',
        },
      ],
    },
    sentimentVsReality: {
      mediaHeadlineSentiment: 'bullish',
      underlyingDataReality: 'normal_cooling',
      divergenceDegree: 68,
    },
  },
];
