import React from "react";
import ThemeSwitcher from "./themeSwitcher";

function Header() {
  return (
    <div className="flex justify-between transition">
      <h1 className="text-xl font-medium">Devfinder</h1>
      <ThemeSwitcher />
    </div>
  );
}

export default Header;
