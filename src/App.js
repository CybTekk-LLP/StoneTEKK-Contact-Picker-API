import "./App.css";
import { useState } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import Profile from "./components/Profile/Profile";
import Typography from "./components/Typography/Typography";
import InputDefault from "./components/InputDefault/InputDefault";
import Button from "./components/Button/Button";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import Anchor from "./components/Anchor/Anchor";
import Toast from "./components/Toast/Toast";
import Select from "./components/Select/Select";
import Card from "./components/Card/Card";
import EmptyState from "./components/EmptyState/EmptyState";

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
        textColor={"var(--correct-darker)"}
      ></Button>
      <Button text={"haha"} type={"primary"} textColor={"var(--card)"}></Button>

      <Typography text="assdgsdgsd" type="branding" _fontweight={300} />
      <p>{imgUrl}</p>
      <InputDefault
        type="text"
        _inputMode="text"
        handleValue={handleInputValue}
        inputLabel={"name"}
        index={1}
        autoComplete={"name"}
        placeholder={"john"}
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

      <Anchor href={"https://stonetekk.in"} text="StoneTEKK.in"></Anchor>
      <Toast
        title={"Mail sent"}
        description={"Retailers have been notified of their orders."}
        type={"success"}
      ></Toast>
      <Select text={"Please select one"} option={"one"}></Select>
      <Card
        src="https://picsum.photos/600"
        name={"Ramesh Gupta"}
        tel={"49172330 29581"}
        address={"$38 K/123 Triveel Nager sitapur rood lucknow"}
      ></Card>
      <EmptyState text="Add members via filling form or using contact picker if supported"></EmptyState>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default App;
