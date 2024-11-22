import "./App.css";
import Profile from "./components/Profile/Profile";
import Searchbar from "./components/Searchbar/Searchbar";
import { useState } from "react";
import Typography from "./components/Typography/Typography";
import InputDefault from "./components/InputDefault/InputDefault";
import Button from "./components/Button/Button";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [inputValue, setInputValue] = useState();
  const [imgUrl, setImgUrl] = useState("");

  const handleImageUrl = (img) => {
    setImgUrl(img);
  };

  const handleInputValue = (value) => {
    setInputValue(value);
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };
  return (
    <>
      <Profile getImage={handleImageUrl}></Profile>
      <Searchbar onSearch={handleSearch} />
      <Typography text="assdgsdgsd" type="body" _fontweight={300} />
      <Button
        text={"haha"}
        type={"secondary"}
        textColor={"var(--correct)"}
      ></Button>
      <Typography text="assdgsdgsd" type="branding" _fontweight={300} />
      <p>{imgUrl}</p>
      <InputDefault
        type="number"
        _inputMode="numeric"
        handleValue={handleInputValue}
        inputLabel={"name"}
      />
      <p>{inputValue}</p>
    </>
  );
}

export default App;
