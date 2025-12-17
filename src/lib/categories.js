// src/lib/categories.js - COMPLETE 10 PILLARS VERSION
export const CATEGORY_HIERARCHY = {
  "getting-started": {
    name: "Getting Started",
    description: "Beginner guides to cryptocurrency, wallets, and your first purchase",
    icon: "🚀",
    subcategories: {
      "basics": "Basics & Terminology",
      "first-purchase": "First Purchase Guides",
      "wallet-setup": "Wallet Setup Tutorials",
      "psychology": "Crypto Psychology",
      "common-mistakes": "Common Mistakes"
    }
  },
  
  "security-privacy": {  // CHANGED FROM "security" to "security-privacy"
    name: "Security & Privacy",
    description: "Protect your crypto assets with hardware wallets, security guides, and scam prevention",
    icon: "🔐",
    subcategories: {
      "hardware-wallets": "Hardware Wallets",
      "software-wallets": "Software Wallets",
      "seed-phrase": "Seed Phrase Management",
      "transaction-security": "Transaction Security",
      "privacy-tools": "Privacy Tools & Techniques",
      "scam-prevention": "Scam Prevention",
      "multi-sig": "Multi-Sig & Inheritance"
    }
  },
  
  "trading-investing": {
    name: "Trading & Investing",
    description: "Spot trading, derivatives, technical analysis, and venture investing",
    icon: "📈",
    subcategories: {
      "spot-trading": "Spot Trading",
      "derivatives": "Derivatives (Perps, Futures, Options)",
      "technical-analysis": "Technical Analysis",
      "on-chain-analysis": "On-Chain Analysis",
      "memecoins-nfts": "Memecoins & NFTs",
      "venture-investing": "Venture Investing",
      "exit-strategies": "Exit Strategies"
    }
  },
  
  "defi-yield": {
    name: "DeFi & Yield",
    description: "DEXs, liquidity providing, lending, and yield strategies",
    icon: "🏦",
    subcategories: {
      "dexs-swapping": "DEXs & Swapping",
      "liquidity-providing": "Liquidity Providing",
      "lending-borrowing": "Lending & Borrowing",
      "yield-aggregators": "Yield Aggregators",
      "restaking-lsts": "Restaking & LSTs",
      "structured-products": "Structured Products",
      "cross-chain-yield": "Cross-Chain Yield"
    }
  },
  
  "airdrop-farming": {
    name: "Airdrop Farming",
    description: "Wallet strategy, points systems, and optimization techniques",
    icon: "🎁",
    subcategories: {
      "wallet-strategy": "Wallet Strategy",
      "points-systems": "Points Systems",
      "eligibility-optimization": "Eligibility Optimization",
      "gas-optimization": "Gas Optimization",
      "multi-chain-farming": "Multi-Chain Farming",
      "retroactive-analysis": "Retroactive Analysis",
      "tool-bot-setup": "Tool & Bot Setup"
    }
  },
  
  "infrastructure-tech": {
    name: "Infrastructure & Tech",
    description: "Layer 1/2s, oracles, bridges, ZK tech, and AI x Crypto",
    icon: "⚙️",
    subcategories: {
      "layer-1s": "Layer 1s",
      "layer-2s-rollups": "Layer 2s & Rollups",
      "oracles": "Oracles",
      "bridges": "Bridges",
      "zk-technology": "ZK Technology",
      "ai-x-crypto": "AI x Crypto",
      "depin-rwas": "DePIN & RWAs"
    }
  },
  
  "tools-automation": {
    name: "Tools & Automation",
    description: "Trading bots, analytics, portfolio trackers, and automation scripts",
    icon: "🛠️",
    subcategories: {
      "trading-bots": "Trading Bots",
      "analytics-platforms": "Analytics Platforms",
      "portfolio-trackers": "Portfolio Trackers",
      "alert-systems": "Alert Systems",
      "automation-scripts": "Automation Scripts",
      "api-integration": "API Integration",
      "custom-dashboard-builds": "Custom Dashboard Builds"
    }
  },
  
  "research-analysis": {
    name: "Research & Analysis",
    description: "Due diligence, tokenomics analysis, and risk assessment",
    icon: "🔬",
    subcategories: {
      "due-diligence-framework": "Due Diligence Framework",
      "tokenomics-analysis": "Tokenomics Analysis",
      "team-backer-analysis": "Team & Backer Analysis",
      "competitor-analysis": "Competitor Analysis",
      "market-fit-assessment": "Market Fit Assessment",
      "risk-assessment-templates": "Risk Assessment Templates"
    }
  },
  
  "regulatory-tax": {
    name: "Regulatory & Tax",
    description: "Global regulations, tax reporting, compliance, and legal structures",
    icon: "⚖️",
    subcategories: {
      "global-regulations": "Global Regulations",
      "tax-reporting": "Tax Reporting",
      "entity-formation": "Entity Formation",
      "banking-solutions": "Banking Solutions",
      "compliance-tools": "Compliance Tools",
      "legal-structures": "Legal Structures",
      "audit-accounting": "Audit & Accounting"
    }
  },
  
  "portfolio-management": {
    name: "Portfolio Management",
    description: "Allocation strategies, risk management, and performance tracking",
    icon: "💼",
    subcategories: {
      "allocation-strategies": "Allocation Strategies",
      "rebalancing-methods": "Rebalancing Methods",
      "risk-management": "Risk Management",
      "performance-tracking": "Performance Tracking",
      "tax-loss-harvesting": "Tax-Loss Harvesting",
      "estate-planning": "Estate Planning"
    }
  }
};

// Helper: Get display name
export function getCategoryDisplay(categoryPath) {
  if (!categoryPath) return '';
  
  const [pillar, sub] = categoryPath.split('/');
  const pillarData = CATEGORY_HIERARCHY[pillar];
  
  if (!pillarData) return categoryPath;
  
  if (sub && pillarData.subcategories[sub]) {
    return pillarData.name + " > " + pillarData.subcategories[sub];
  }
  
  return pillarData.name;
}