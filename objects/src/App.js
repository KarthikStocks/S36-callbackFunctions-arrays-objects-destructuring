import React, { useState } from "react";
import "./App.css";

function App() {
  const [stocks, setStocks] = useState([
    { name: "Apple", symbol: "AAPL", price: 175, change: 1.2 },
    { name: "Tesla", symbol: "TSLA", price: 250, change: -0.8 },
    { name: "Amazon", symbol: "AMZN", price: 320, change: 2.1 },
    { name: "Google", symbol: "GOOGL", price: 145, change: 0.4 },
    { name: "Microsoft", symbol: "MSFT", price: 290, change: 1.5 },
    { name: "Facebook", symbol: "META", price: 330, change: -1.3 },
    { name: "Netflix", symbol: "NFLX", price: 525, change: 3.0 },
    { name: "NVIDIA", symbol: "NVDA", price: 670, change: 4.7 },
    { name: "AMD", symbol: "AMD", price: 105, change: 0.9 },
    { name: "Twitter", symbol: "TWTR", price: 60, change: -0.2 },
    { name: "Snapchat", symbol: "SNAP", price: 15, change: 1.1 },
    { name: "Spotify", symbol: "SPOT", price: 180, change: 0.5 },
    { name: "Salesforce", symbol: "CRM", price: 225, change: 1.7 },
    { name: "Adobe", symbol: "ADBE", price: 550, change: -2.0 },
    { name: "Zoom", symbol: "ZM", price: 130, change: -1.4 },
    { name: "Uber", symbol: "UBER", price: 36, change: 0.3 },
    { name: "Lyft", symbol: "LYFT", price: 18, change: -0.6 },
    { name: "PayPal", symbol: "PYPL", price: 215, change: 1.8 },
    { name: "Square", symbol: "SQ", price: 65, change: -0.9 },
    { name: "Shopify", symbol: "SHOP", price: 6, change: 2.3 },
  ]);

  const [filter, setFilter] = useState({ minPrice: 0, maxPrice: 1000 });

  const filterStocks = (stocks, { minPrice, maxPrice }) => {
    return stocks.filter(
      (stock) => stock.price >= minPrice && stock.price <= maxPrice
    );
  };

  const handleFilterChange = (key, value) => {
    setFilter((prevFilter) => ({ ...prevFilter, [key]: value }));
  };

  const filteredStocks = filterStocks(stocks, filter);

  const stockDetails = ({ name, symbol, price, change }) => (
    <div
      key={symbol}
      className="stock-card"
      style={{
        backgroundColor: change >= 0 ? "lightgreen" : "lightcoral",
      }}
    >
      <h4>
        {name} ({symbol})
      </h4>
      <p>Price: ${price}</p>
      <p>Change: {change}%</p>
    </div>
  );

  return (
    <div className="app-container">
      <h1>Stock Market Tracker</h1>
      <div className="filter-container">
        <h3>Filter Stocks</h3>
        <label>
          Min Price:{" "}
          <input
            type="number"
            defaultValue={filter.minPrice}
            onChange={(e) =>
              handleFilterChange("minPrice", Number(e.target.value))
            }
          />
        </label>
        <label>
          Max Price:{" "}
          <input
            type="number"
            defaultValue={filter.maxPrice}
            onChange={(e) =>
              handleFilterChange("maxPrice", Number(e.target.value))
            }
          />
        </label>
      </div>
      <div>
        <h3>Stock Portfolio</h3>
        {filteredStocks.map((stock) => stockDetails(stock))}
        {filteredStocks.length === 0 && (
          <p>No stocks match your filter criteria.</p>
        )}
      </div>
    </div>
  );
}

export default App;
