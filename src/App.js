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
import Footer from "./components/Footer/Footer";

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
      <Typography text="Add Details" type="title" _fontweight={700} />
      <Typography
        text="Adding Retailer outside of StoneTEKK"
        type="body"
        _fontweight={300}
      />
      <Profile getImage={handleImageUrl}></Profile>
      <InputDefault
        type="text"
        _inputMode="text"
        handleValue={handleInputValue}
        inputLabel="Name"
        index={1}
        autoComplete="name"
        placeholder="e.g. Jon Doe"
      />

      <InputDefault
        type="email"
        _inputMode="email"
        handleValue={handleInputValue}
        inputLabel="Email"
        index={2}
        autoComplete="email"
        placeholder="e.g. abc@example.com"
      />

      <InputDefault
        type="tel"
        _inputMode="tel"
        handleValue={handleInputValue}
        inputLabel="Mobile Number"
        index={3}
        autoComplete="tel"
        placeholder="e.g. +1 1234 5678 90"
      />

      <InputDefault
        type="text"
        _inputMode="numeric"
        handleValue={handleInputValue}
        inputLabel="House No."
        index={4}
        autoComplete="address-line1"
        placeholder="e.g. 123"
      />

      <InputDefault
        type="text"
        _inputMode="text"
        handleValue={handleInputValue}
        inputLabel="Street Name"
        index={5}
        autoComplete="street-address"
        placeholder="e.g. abc road"
      />

      <InputDefault
        type="text"
        _inputMode="numeric"
        handleValue={handleInputValue}
        inputLabel="Zipcode"
        index={6}
        autoComplete="postal-code"
        placeholder="e.g. 11111"
      />

      <InputDefault
        type="text"
        _inputMode="text"
        handleValue={handleInputValue}
        inputLabel="City"
        index={7}
        autoComplete="address-level2"
        placeholder="e.g. New York"
      />

      <Footer
        text={"Experimental Feature for"}
        url={"https://stonetekk.in"}
        link={"StoneTEKK.in"}
      ></Footer>

      {/* <Profile getImage={handleImageUrl}></Profile>
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
      <br></br> */}
    </>
  );
}

export default App;
