import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };
  return (
    <>
      <Searchbar onSearch={handleSearch} />
    </>
  );
}

export default App;
