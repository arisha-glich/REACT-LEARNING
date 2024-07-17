import React, { useState, useEffect } from "react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
    const bodyClassList = document.body.classList;
    if (bodyClassList.contains("dark")) {
      bodyClassList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      bodyClassList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={toggleTheme} style={{ cursor: "pointer" }}>
          <i className={`fa-regular ${isDarkMode ? 'fa-sun' : 'fa-moon'}`} />
          &nbsp;&nbsp;
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </p>
      </div>
    </header>
  );
}

export default Header;
