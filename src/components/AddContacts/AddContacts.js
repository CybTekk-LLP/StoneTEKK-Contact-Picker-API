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
import defaultProfilePic from "./../../images/DefaultProfilePic.svg";

function AddContacts({ handleSearch }) {
  const [selectedOption, setSelectedOption] = useState("All Contacts");
  const [selectedContacts, setSelectedContacts] = useState([]);

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

  const handleAddContacts = async () => {
    try {
      const contacts = await navigator.contacts.select([
        "name",
        "email",
        "tel",
        "address",
      ]);

      if (contacts.length > 0) {
        const formattedContacts = contacts.map((contact) => ({
          avatar: contact.photo ? contact.photo.url : defaultProfilePic,
          name: contact.name,
          email: contact.email,
          mobileNo: contact.tel,
          houseNo: contact.address?.house || "",
          streetName: contact.address?.street || "",
          zipCode: contact.address?.postalCode || "",
          city: contact.address?.city || "",
        }));

        setSelectedContacts(formattedContacts);
      }
    } catch (error) {
      console.error("Error selecting contacts:", error);
    }
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
        onClick={handleAddContacts}
      ></Button>

      {selectedContacts.length > 0 ? (
        <div className={styles.cards}>
          {selectedContacts.map((contact, index) => (
            <Card
              key={index}
              src={contact.avatar}
              name={contact.name}
              tel={contact.mobileNo}
              address={`${contact.houseNo} ${contact.streetName}, ${contact.city} ${contact.zipCode}`}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <EmptyState />
        </div>
      )}

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
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}

export default AddContacts;
