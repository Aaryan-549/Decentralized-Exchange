import express from "express";

const app = express();
app.use(express.json());
let ETH_balance = 200;
let USDC_balance = 700000;

// app.post("/add-liquidity", (req, res) => {

// })
app.post("/buy-asset", (req, res) => {
    const quantity = req.body.quantity;
    const updatedEthQuantiy = ETH_balance - quantity;
    const updatedUSDCBalance = ETH_balance * USDC_balance / updatedEthQuantiy;
    updatedEthQuantiy;
    const paidAmpont = updatedUSDCBalance - USDC_balance;
    
    ETH_balance = updatedEthQuantiy;
    USDC_balance = updatedUSDCBalance;
    res.json({
        message: `You paid ${paidAmpont} USDC for ${quantity} ETH`,
    })
})
app.post("/sell-asset", (req, res) => {
    const quantity = req.body.quantity;
    const updatedUSDCBalance = USDC_balance + quantity;
    const updatedEthQuantiy = ETH_balance * USDC_balance/ updatedUSDCBalance;
    updatedEthQuantiy;
    const gottenUSDC = updatedUSDCBalance - USDC_balance;
    
    ETH_balance = updatedEthQuantiy;
    USDC_balance = updatedUSDCBalance;
    res.json({
        message: `You got ${gottenUSDC} USDC for ${quantity} ETH`,
})
})

console.log("Server starting...");  // Add this before app.listen()
app.listen(3000);