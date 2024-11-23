import React, { useState } from "react";
import Typography from "../Typography/Typography";
import Profile from "../Profile/Profile";
import Select from "../Select/Select";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { add } from "./../../store/contactDetailSlice";
import Card from "../Card/Card";
import styles from "./AddContacts.module.css";
import EmptyState from "../EmptyState/EmptyState";

function AddContacts({ handleSearch }) {
  const [selectedOption, setSelectedOption] = useState("All Contacts");
  const options = [
    "All Contacts",
    "Newest First",
    "Oldest First",
    "Ascending A-Z",
    "Descending Z-A",
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    // Perform sorting or other logic here
  };

  return (
    <main className={styles.main}>
      <br />
      <br />
      <Typography text="Add Contacts" type="title" _fontweight={700} />
      <Typography
        text="Add Retailers outside of StoneTEKK"
        type="body"
        _fontweight={300}
      />
      <br />
      <Searchbar onSearch={handleSearch} />
      <br />
      <div className={styles.sortWrapper}>
        <Typography
          text="Sort By:"
          type="body"
          _fontweight={400}
          _color={"var(--outline)"}
        />
        <Select
          text={selectedOption}
          options={options}
          onSelect={handleSelect}
          toggleDropdown={() => {}}
        />
      </div>
      <br />
      <Button
        text={"Add Contacts to Send Order"}
        type={"secondary"}
        textColor={"var(--correct-darker)"}
      ></Button>
      <div className={styles.cards}>
        <Card
          src="https://picsum.photos/600"
          name={"Ramesh Gupta"}
          tel={"49172330 29581"}
          address={"$38 K/123 Triveel Nager sitapur rood lucknow"}
        ></Card>
        <Card
          src="https://picsum.photos/600"
          name={"Ramesh Gupta"}
          tel={"49172330 29581"}
          address={"$38 K/123 Triveel Nager sitapur rood lucknow"}
        ></Card>
        <Card
          src="https://picsum.photos/600"
          name={"Ramesh Gupta"}
          tel={"49172330 29581"}
          address={"$38 K/123 Triveel Nager sitapur rood lucknow"}
        ></Card>
        <Card
          src="https://picsum.photos/600"
          name={"Ramesh Gupta"}
          tel={"49172330 29581"}
          address={"$38 K/123 Triveel Nager sitapur rood lucknow"}
        ></Card>
        <Card
          src="https://picsum.photos/600"
          name={"Ramesh Gupta"}
          tel={"49172330 29581"}
          address={"$38 K/123 Triveel Nager sitapur rood lucknow"}
        ></Card>
        <Card
          src="https://picsum.photos/600"
          name={"Ramesh Gupta"}
          tel={"49172330 29581"}
          address={"$38 K/123 Triveel Nager sitapur rood lucknow"}
        ></Card>
      </div>
      <div className={styles.emptyState}>
        <EmptyState></EmptyState>
      </div>
      <Typography
        text="Note: We have skipped the order page where the same order to be sent to multiple recipients is selected (e.g. X units of Italian Marbles)"
        type="body"
        _color={"var(--primary-dark)"}
      />
      <br />
      <Button
        text={"Send Mail with Order Details"}
        type={"primary"}
        textColor={"var(--primary-light)"}
        _btnType={"submit"}
      ></Button>
    </main>
  );
}

export default AddContacts;
