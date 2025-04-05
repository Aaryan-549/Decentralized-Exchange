# DEX Simulator (Constant Product AMM)

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4%2B-blue)](https://www.typescriptlang.org/)

A minimal implementation of a constant product automated market maker (x*y=k), inspired by common decentralized exchange mechanics like Uniswap.

---

## 🧰 Tech Stack

- **Node.js** 18+
- **TypeScript** 4+
- **Express.js** – for REST API routing

---

## 🚀 Quick Start

1. **Install dependencies**
```bash
npm install
```

2. **Run in development mode**
```bash
npm run dev
```

---

## 📚 API Reference

### 💰 Buy ETH
```http
POST /buy-asset
Content-Type: application/json

{
  "quantity": 1.5
}
```

### 💸 Sell ETH
```http
POST /sell-asset
Content-Type: application/json

{
  "quantity": 1
}
```

---

## 💻 Development Commands

| Command         | Action                         |
|-----------------|--------------------------------|
| npm run build   | Compile TypeScript to JS       |
| npm start       | Run production server          |
| npm run dev     | Auto-reload development server |

---

## 📊 Initial Pool State
```typescript
ETH: 200
USDC: 700_000
```

---

## 📝 Learning Resources

- [AMM Math Explained](#)
- [Understanding Constant Product AMMs (x * y = k)](#)

---

## ⚠️ Disclaimer

This is an educational prototype. **Not intended for production use.**
