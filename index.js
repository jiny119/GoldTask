// GoldTask - Final Code (Frontend Only)
import React, { useState, useEffect } from "react";
import "./styles.css";

// Dummy user authentication (Firebase hataya gaya)
const isAuthenticated = () => {
  return localStorage.getItem("user") ? true : false;
};

export default function App() {
  const [user, setUser] = useState(isAuthenticated());
  const [coins, setCoins] = useState(0);
  const [referrals, setReferrals] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (user) {
      setCoins(parseInt(localStorage.getItem("coins")) || 0);
      setReferrals(parseInt(localStorage.getItem("referrals")) || 0);
    }
  }, [user]);

  const login = () => {
    localStorage.setItem("user", "true");
    setUser(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(false);
    setCoins(0);
    setReferrals(0);
  };

  const earnCoins = (amount) => {
    if (user) {
      const newCoins = coins + amount;
      setCoins(newCoins);
      localStorage.setItem("coins", newCoins);
    }
  };

  const addReferral = () => {
    if (user) {
      const newReferrals = referrals + 1;
      setReferrals(newReferrals);
      localStorage.setItem("referrals", newReferrals);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <h1>🎉 GoldTask 🎉</h1>
      {!user ? (
        <button onClick={login}>Login / Signup</button>
      ) : (
        <>
          <p>Coins: {coins}</p>
          <p>Referrals: {referrals}</p>

          <button onClick={() => earnCoins(5)}>📺 Watch Ads (5 Coins)</button>
          <button onClick={() => window.open("https://youtube.com", "_blank")}>
            📊 Survey (YouTube Link)
          </button>
          <button
            onClick={() =>
              window.open(
                "https://html5.gamemonetize.co/e0ofkijh2admdyba6jqgxfhl1xrir9mw/",
                "_blank"
              )
            }
          >
            🎮 Play Spinner Game
          </button>
          <button onClick={addReferral}>➕ Add Referral</button>

          {/* Withdrawal System */}
          {coins >= 15000 && referrals >= 10 ? (
            <button onClick={() => alert("Withdrawal request sent!")}>
              💰 Withdraw (JazzCash/EasyPaisa/PayPal)
            </button>
          ) : (
            <p>🔒 Need 10 referrals & 15000 coins for withdrawal.</p>
          )}

          {/* Settings */}
          <h2>⚙️ Settings</h2>
          <button onClick={logout}>🚪 Logout</button>
          <button onClick={() => alert("Share this app with friends!")}>
            🔗 Share
          </button>
          <button onClick={toggleTheme}>
            🎨 Theme: {theme === "light" ? "Dark" : "Light"}
          </button>
        </>
      )}
    </div>
  );
        }
