import "./App.css";
import React from "react";
import { GraphicWalker } from "@kanaries/graphic-walker";

function GraphicWalkerComponent() {
  const fields = [
    { fid: "Ticker", semanticType: "nominal", analyticType: "dimension" },
    {
      fid: "Company Name",
      semanticType: "nominal",
      analyticType: "dimension",
    },
    {
      fid: "Industry",
      semanticType: "nominal",
      analyticType: "dimension",
    },
    {
      fid: "Current Price",
      semanticType: "quantitative",
      analyticType: "measure",
    },
    {
      fid: "Market Capitalization",
      semanticType: "quantitative",
      analyticType: "measure",
    },
    {
      fid: "Dividend Yield",
      semanticType: "quantitative",
      analyticType: "measure",
    },
    {
      fid: "Earnings Per Share",
      semanticType: "quantitative",
      analyticType: "measure",
    },
  ];

  const dataSource = [
    {
      Ticker: "AAPL",
      "Company Name": "Apple Inc.",
      Industry: "Technology",
      "Current Price": 150.25,
      "Market Capitalization": 2.5e12,
      "Dividend Yield": 1.5,
      "Earnings Per Share": 5.25,
    },
    {
      Ticker: "GOOGL",
      "Company Name": "Alphabet Inc.",
      Industry: "Technology",
      "Current Price": 2800.75,
      "Market Capitalization": 1.9e12,
      "Dividend Yield": 0.8,
      "Earnings Per Share": 45.2,
    },
    {
      Ticker: "GOOGL",
      "Company Name": "Alphabet Inc.",
      Industry: "E-Commerce",
      "Current Price": 3000.75,
      "Market Capitalization": 1.9e12,
      "Dividend Yield": 0.8,
      "Earnings Per Share": 45.2,
    },
    {
      Ticker: "MSFT",
      "Company Name": "Microsoft Corporation",
      Industry: "Technology",
      "Current Price": 300.5,
      "Market Capitalization": 2.2e12,
      "Dividend Yield": 1.2,
      "Earnings Per Share": 8.75,
    },
    {
      Ticker: "AMZN",
      "Company Name": "Amazon.com Inc.",
      Industry: "E-Commerce",
      "Current Price": 3300.0,
      "Market Capitalization": 1.7e12,
      "Dividend Yield": 0.0,
      "Earnings Per Share": 52.3,
    },
    {
      Ticker: "JPM",
      "Company Name": "JPMorgan Chase & Co.",
      Industry: "Finance",
      "Current Price": 150.75,
      "Market Capitalization": 4.8e11,
      "Dividend Yield": 2.5,
      "Earnings Per Share": 12.45,
    },
    {
      Ticker: "TSLA",
      "Company Name": "Tesla Inc.",
      Industry: "Automotive",
      "Current Price": 800.2,
      "Market Capitalization": 1.6e12,
      "Dividend Yield": 0.0,
      "Earnings Per Share": -0.5, // Negative due to recent losses
    },
    {
      Ticker: "FB",
      "Company Name": "Meta Platforms Inc.",
      Industry: "Social Media",
      "Current Price": 325.4,
      "Market Capitalization": 8.5e11,
      "Dividend Yield": 0.9,
      "Earnings Per Share": 10.75,
    },
    {
      Ticker: "V",
      "Company Name": "Visa Inc.",
      Industry: "Financial Services",
      "Current Price": 220.6,
      "Market Capitalization": 4.3e11,
      "Dividend Yield": 0.8,
      "Earnings Per Share": 6.9,
    },
    {
      Ticker: "PYPL",
      "Company Name": "PayPal Holdings Inc.",
      Industry: "Financial Technology",
      "Current Price": 180.3,
      "Market Capitalization": 2.1e11,
      "Dividend Yield": 0.0,
      "Earnings Per Share": 3.25,
    },
    {
      Ticker: "DIS",
      "Company Name": "The Walt Disney Company",
      Industry: "Entertainment",
      "Current Price": 150.5,
      "Market Capitalization": 3.5e11,
      "Dividend Yield": 1.5,
      "Earnings Per Share": 4.8,
    },
    {
      Ticker: "NFLX",
      "Company Name": "Netflix Inc.",
      Industry: "Streaming",
      "Current Price": 520.1,
      "Market Capitalization": 2.3e11,
      "Dividend Yield": 0.0,
      "Earnings Per Share": 9.15,
    },
    {
      Ticker: "GS",
      "Company Name": "Goldman Sachs Group Inc.",
      Industry: "Finance",
      "Current Price": 400.8,
      "Market Capitalization": 1.2e11,
      "Dividend Yield": 2.1,
      "Earnings Per Share": 25.6,
    },
    {
      Ticker: "IBM",
      "Company Name": "International Business Machines Corporation",
      Industry: "Technology",
      "Current Price": 120.9,
      "Market Capitalization": 1.1e11,
      "Dividend Yield": 4.0,
      "Earnings Per Share": 6.35,
    },
    {
      Ticker: "NKE",
      "Company Name": "Nike Inc.",
      Industry: "Apparel",
      "Current Price": 160.75,
      "Market Capitalization": 2.8e11,
      "Dividend Yield": 1.2,
      "Earnings Per Share": 3.75,
    },
    {
      Ticker: "CSCO",
      "Company Name": "Cisco Systems Inc.",
      Industry: "Technology",
      "Current Price": 55.2,
      "Market Capitalization": 2.3e11,
      "Dividend Yield": 2.8,
      "Earnings Per Share": 3.2,
    },
    {
      Ticker: "INTC",
      "Company Name": "Intel Corporation",
      Industry: "Semiconductors",
      "Current Price": 50.6,
      "Market Capitalization": 2.5e11,
      "Dividend Yield": 2.5,
      "Earnings Per Share": 2.8,
    },
    {
      Ticker: "PG",
      "Company Name": "Procter & Gamble Co.",
      Industry: "Consumer Goods",
      "Current Price": 135.9,
      "Market Capitalization": 3.5e11,
      "Dividend Yield": 2.7,
      "Earnings Per Share": 5.4,
    },
    {
      Ticker: "WMT",
      "Company Name": "Walmart Inc.",
      Industry: "Retail",
      "Current Price": 140.3,
      "Market Capitalization": 4.0e11,
      "Dividend Yield": 1.8,
      "Earnings Per Share": 5.9,
    },
    {
      Ticker: "BA",
      "Company Name": "The Boeing Company",
      Industry: "Aerospace",
      "Current Price": 200.1,
      "Market Capitalization": 1.5e11,
      "Dividend Yield": 2.3,
      "Earnings Per Share": -10.25, // Negative due to recent losses
    },
    {
      Ticker: "KO",
      "Company Name": "The Coca-Cola Company",
      Industry: "Beverages",
      "Current Price": 55.75,
      "Market Capitalization": 2.0e11,
      "Dividend Yield": 3.0,
      "Earnings Per Share": 2.25,
    },
    {
      Ticker: "GOOG",
      "Company Name": "Alphabet Inc. (Class C)",
      Industry: "Technology",
      "Current Price": 2750.2,
      "Market Capitalization": 1.8e12,
      "Dividend Yield": 0.7,
      "Earnings Per Share": 40.6,
    },
    {
      Ticker: "VZ",
      "Company Name": "Verizon Communications Inc.",
      Industry: "Telecommunications",
      "Current Price": 55.9,
      "Market Capitalization": 2.3e11,
      "Dividend Yield": 4.2,
      "Earnings Per Share": 4.15,
    },
    // Add more instrument objects as needed
  ];

  return (
    <div className="App">
      <GraphicWalker dataSource={dataSource} rawFields={fields} />
    </div>
  );
}

export default GraphicWalkerComponent;
