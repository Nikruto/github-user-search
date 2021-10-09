import React, { useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

import Header from "./components/header";
import Search from "./components/search";
import UserCard from "./components/userCard";
import { ThemeContext } from "./context/themeContext";

const mockupData = {
  login: "Nikruto",
  avatar_url: "https://avatars.githubusercontent.com/u/35651223?v=4",
  html_url: "https://api.github.com/users/Nikruto",
  created_at: "2018-01-21T07:37:35Z",
  bio: "Balikesir University",
  public_repos: 10,
  followers: 4,
  following: 3,
};

function App() {
  const themeContext = useContext(ThemeContext);

  const [fetchState, setFetchState] = useState({
    loading: false,
    error: false,
  });

  const [user, setUser] = useState(null);

  const onSubmit = async (term) => {
    setFetchState({
      loading: true,
      error: false,
    });

    const s = await fetch(`https://api.github.com/users/${term}`);

    if (!s.ok) {
      setFetchState({
        loading: false,
        error: true,
      });
      toast.error("No user found with this username!", {
        position: "top-right",
        className: "bg-gray-500",
      });
    } else {
      const data = await s.json();

      setFetchState({
        loading: false,
        error: false,
      });
      setUser(data);
    }
  };

  return (
    <div className={`${themeContext.theme}`}>
      <Toaster />
      <div className="min-h-screen dark:bg-gray-800 bg-blue-50 text-black dark:text-white font-mono flex flex-col justify-center">
        <div>
          <div className="max-w-xl mx-auto p-2">
            <Header />

            <div className="mt-4">
              <Search onSubmitHandler={onSubmit} />
            </div>

            <div className="mt-4">
              {fetchState.loading ? (
                <div>Loading</div>
              ) : (
                <UserCard user={user == null ? mockupData : user} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
