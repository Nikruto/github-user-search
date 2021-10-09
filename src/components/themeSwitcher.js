import React, { useContext } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { ThemeContext } from "../context/themeContext";

const ThemeSwitcher = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className="flex items-center space-x-4 cursor-pointer select-none transition"
      onClick={themeContext.switchTheme}
    >
      <span>{themeContext.theme === "light" ? "DARK" : "LIGHT"}</span>
      {themeContext.theme === "light" ? (
        <MoonIcon className="w-6 h-6" />
      ) : (
        <SunIcon className="w-6 h-6" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
