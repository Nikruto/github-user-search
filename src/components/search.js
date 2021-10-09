import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

function Header({ onSubmitHandler }) {
  const [text, setText] = useState("");

  const onInput = (e) => {
    const { value } = e.target;

    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler(text);
  };

  return (
    <div className="relative group">
      <form onSubmit={onSubmit}>
        <SearchIcon className="text-blue-600 opacity-50 group-focus-within:opacity-100 transition absolute w-6 h-6 top-1/2 left-4 transform -translate-y-1/2" />
        <input
          type="text"
          className="w-full rounded bg-white dark:bg-gray-700 py-4 pl-12 pr-[6.5rem] outline-none"
          placeholder="Search Github Username.."
          value={text}
          onInput={onInput}
        />
        <div
          onClick={onSubmit}
          className="absolute cursor-pointer text-white bg-blue-600 top-1/2 transform -translate-y-1/2 py-2 px-4 rounded right-2"
        >
          Search
        </div>
      </form>
    </div>
  );
}

export default Header;
