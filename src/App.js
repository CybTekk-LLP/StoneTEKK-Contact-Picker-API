import "./App.css";
import Profile from "./components/Profile/Profile";
import Searchbar from "./components/Searchbar/Searchbar";
import { useState } from "react";
import Typography from "./components/Typography/Typography";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };
  return (
    <>
    <Profile></Profile>
      <Searchbar onSearch={handleSearch} />
      <Typography text="assdgsdgsd" type="branding" _fontweight={300} />
    </>
  );
}

export default App;
