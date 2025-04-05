# DEX Simulator (Constant Product AMM)

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4%2B-blue)](https://www.typescriptlang.org/)

A minimal implementation of a constant product automated market maker (x*y=k) based on [Web Dev Simplified's tutorial](https://www.youtube.com/watch?v=Wb6MmUa0bu0).

## 🚀 Quick Start

1. **Install dependencies**
```bash
npm install
Run in development mode

bash
Copy
npm run dev
📚 API Reference
Buy ETH
http
Copy
POST /buy-asset
Content-Type: application/json

{
  "quantity": 1.5
}
Sell ETH
http
Copy
POST /sell-asset
Content-Type: application/json

{
  "quantity": 1
}
💻 Development
Command	Action
npm run build	Compile TypeScript to JS
npm start	Run production server
npm run dev	Auto-reload development server
📊 Initial Pool State
typescript
Copy
ETH: 200
USDC: 700,000
📝 Learning Resources
AMM Math Explained

⚠️ Disclaimer
This is an educational prototype. Not for production use.

Copy

### Method 2: Terminal Command (Linux/macOS)
Run this in your project root:
```bash
cat > README.md << 'EOL'
[PASTE THE ENTIRE TEMPLATE ABOVE HERE]
EOL