import "./App.css";
import { useState } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import Profile from "./components/Profile/Profile";
import Typography from "./components/Typography/Typography";
import InputDefault from "./components/InputDefault/InputDefault";
import Button from "./components/Button/Button";
import ContextMenu from "./components/ContextMenu/ContextMenu";

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

  const editContact = () => {};
  const deleteContact = () => {};
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
      <Button text={"haha"} type={"primary"} textColor={"var(--card)"}></Button>

      <Typography text="assdgsdgsd" type="branding" _fontweight={300} />
      <p>{imgUrl}</p>
      <InputDefault
        type="number"
        _inputMode="numeric"
        handleValue={handleInputValue}
        inputLabel={"name"}
      />
      <p>{inputValue}</p>

      <ContextMenu
        text="Edit Contact"
        textDanger="Delete Contact"
        textColor="var(--primary-900)"
        textColorDanger="var(--danger)"
        editContact={editContact}
        deleteContact={deleteContact}
      ></ContextMenu>
    </>
  );
}

export default App;
