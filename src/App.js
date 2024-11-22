import "./App.css";
import Profile from "./components/Profile/Profile";
import Searchbar from "./components/Searchbar/Searchbar";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };
  return (
    <>
    <Profile></Profile>
      <Searchbar onSearch={handleSearch} />
    </>
  );
}

export default App;
