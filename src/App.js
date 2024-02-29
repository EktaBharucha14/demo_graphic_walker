// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import GraphicWalkerComponent from './components/GraphicWalker';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check localStorage for saved credentials
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    console.log("storedEmail =>", storedEmail)
    console.log("storedPassword =>", storedPassword)

    if (storedEmail && storedPassword) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (email, password) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setIsLoggedIn(false);
  };
  console.log("isLoggedIn =>", isLoggedIn)

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Login handleLogin={handleLogin} />} />
        {/* <Route
          path="/detail"
          element={isLoggedIn ? <GraphicWalkerComponent /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <div>
                <button onClick={handleLogout}>Logout</button>
                <GraphicWalkerComponent />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;