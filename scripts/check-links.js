// scripts/check-links.js
import brokenLinkChecker from 'broken-link-checker';

const { SiteChecker } = brokenLinkChecker;

const siteChecker = new SiteChecker(
  {
    excludeExternalLinks: false,
    excludeInternalLinks: false,
    filterLevel: 1,
    acceptedSchemes: ['http', 'https'],
    excludedKeywords: [], // Add any paths to exclude
    maxSocketsPerHost: 1,
    maxSockets: 10,
    rateLimit: 100, // ms delay between requests
  },
  {
    link: (result) => {
      if (result.broken) {
        console.log(`❌ BROKEN: ${result.url.original}`);
        console.log(`   Found on: ${result.base.original}`);
        console.log(`   Status: ${result.http.response?.statusCode || 'No response'}`);
      }
    },
    end: () => {
      console.log('✅ Link checking completed!');
      process.exit(0);
    },
    error: (error) => {
      console.error('⚠️  Error:', error);
    }
  }
);

// Start checking - replace with your site URL
console.log('🔍 Starting broken link check...');
siteChecker.enqueue('http://localhost:4321');