import React, { useState, createContext, useEffect } from "react";

const ThemeContext = createContext({
  theme: "",
  setLight: () => {},
  setDark: () => {},
  switchTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setLight = () => setTheme("light");
  const setDark = () => setTheme("dark");
  const switchTheme = () =>
    setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, setLight, setDark, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
