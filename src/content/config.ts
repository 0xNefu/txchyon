import { defineCollection, z } from 'astro:content';

// Define all categories with their metadata
export const blogCategories = [
  'getting-started',
  'security-privacy', 
  'trading-investing',
  'defi-yield',
  'airdrop-farming',
  'infrastructure-tech',
  'tools-automation',
  'research-analysis',
  'regulatory-tax',
  'portfolio-management'
] as const;

export type BlogCategory = typeof blogCategories[number];

// Define subcategories for each main category
export const subcategories: Record<BlogCategory, string[]> = {
  'getting-started': [
    'Basics & Terminology',
    'First Purchase Guides', 
    'Wallet Setup Tutorials',
    'Crypto Psychology',
    'Common Mistakes'
  ],
  'security-privacy': [
    'Hardware Wallets',
    'Software Wallets',
    'Seed Phrase Management',
    'Transaction Security',
    'Privacy Tools & Techniques',
    'Scam Prevention',
    'Multi-Sig & Inheritance'
  ],
  'trading-investing': [
    'Spot Trading',
    'Derivatives',
    'Technical Analysis',
    'On-Chain Analysis',
    'Memecoins & NFTs',
    'Venture Investing',
    'Exit Strategies'
  ],
  'defi-yield': [
    'DEXs & Swapping',
    'Liquidity Providing',
    'Lending & Borrowing',
    'Yield Aggregators',
    'Restaking & LSTs',
    'Structured Products',
    'Cross-Chain Yield'
  ],
  'airdrop-farming': [
    'Wallet Strategy',
    'Points Systems',
    'Eligibility Optimization',
    'Gas Optimization',
    'Multi-Chain Farming',
    'Retroactive Analysis',
    'Tool & Bot Setup'
  ],
  'infrastructure-tech': [
    'Layer 1s',
    'Layer 2s & Rollups',
    'Oracles',
    'Bridges',
    'ZK Technology',
    'AI x Crypto',
    'DePIN & RWAs'
  ],
  'tools-automation': [
    'Trading Bots',
    'Analytics Platforms',
    'Portfolio Trackers',
    'Alert Systems',
    'Automation Scripts',
    'API Integration',
    'Custom Dashboard Builds'
  ],
  'research-analysis': [
    'Due Diligence Framework',
    'Tokenomics Analysis',
    'Team & Backer Analysis',
    'Competitor Analysis',
    'Market Fit Assessment',
    'Risk Assessment Templates'
  ],
  'regulatory-tax': [
    'Global Regulations',
    'Tax Reporting',
    'Entity Formation',
    'Banking Solutions',
    'Compliance Tools',
    'Legal Structures',
    'Audit & Accounting'
  ],
  'portfolio-management': [
    'Allocation Strategies',
    'Rebalancing Methods',
    'Risk Management',
    'Performance Tracking',
    'Tax-Loss Harvesting',
    'Estate Planning'
  ]
};

// Main blog collection
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    // Required fields
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    
    // Category system - FIXED: Use categories (plural) not category
    categories: z.array(z.enum(blogCategories)).or(z.enum(blogCategories)),
    subcategory: z.string().optional(),
    
    // SEO & organization
    tags: z.array(z.string()).min(1).max(10).default([]),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).default('intermediate'),
    
    // Content features
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    author: z.string().default('NefuTrades'),
    
    // Visuals
    coverImage: image().optional(),
    coverAlt: z.string().optional(),
    
    // Updates
    updatedDate: z.date().optional(),
    
    // Advanced
    readingTime: z.number().optional(),
    externalLink: z.string().url().optional(),
    
    // Series support (for multi-part articles)
    series: z.object({
      name: z.string(),
      part: z.number(),
      total: z.number().optional(),
    }).optional(),
  }),
});

// Export all collections - FIXED: Use 'posts' to match your folder name
export const collections = {
  'posts': blogCollection,  // CHANGED FROM 'blog' TO 'posts'
  'pages': defineCollection({ type: 'content' }),
  'authors': defineCollection({ type: 'data' }),
  'about': defineCollection({ type: 'content' }),
  'contact': defineCollection({ type: 'content' }),
};

// Helper functions
export const categoryMetadata: Record<BlogCategory, { title: string; description: string; color: string }> = {
  'getting-started': {
    title: 'Getting Started',
    description: 'Beginner guides and first steps in crypto',
    color: '#3B82F6'
  },
  'security-privacy': {
    title: 'Security & Privacy',
    description: 'Protect your assets and maintain privacy',
    color: '#10B981'
  },
  'trading-investing': {
    title: 'Trading & Investing',
    description: 'Markets, strategies, and investment analysis',
    color: '#F59E0B'
  },
  'defi-yield': {
    title: 'DeFi & Yield',
    description: 'Decentralized finance and passive income strategies',
    color: '#8B5CF6'
  },
  'airdrop-farming': {
    title: 'Airdrop Farming',
    description: 'Maximize airdrop eligibility and rewards',
    color: '#EC4899'
  },
  'infrastructure-tech': {
    title: 'Infrastructure & Tech',
    description: 'Blockchain technology and infrastructure deep dives',
    color: '#06B6D4'
  },
  'tools-automation': {
    title: 'Tools & Automation',
    description: 'Productivity tools and automation strategies',
    color: '#84CC16'
  },
  'research-analysis': {
    title: 'Research & Analysis',
    description: 'Due diligence frameworks and analytical methodologies',
    color: '#EF4444'
  },
  'regulatory-tax': {
    title: 'Regulatory & Tax',
    description: 'Legal compliance and tax optimization',
    color: '#6366F1'
  },
  'portfolio-management': {
    title: 'Portfolio Management',
    description: 'Wealth building and portfolio optimization',
    color: '#14B8A6'
  }
};