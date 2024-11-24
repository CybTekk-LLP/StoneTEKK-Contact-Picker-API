import React, { useEffect, useState } from "react";
import Typography from "../Typography/Typography";
import Profile from "../Profile/Profile";
import { useNavigate } from "react-router-dom";
import Select from "../Select/Select";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./AddContacts.module.css";
import EmptyState from "../EmptyState/EmptyState";
import defaultProfilePic from "./../../images/DefaultProfilePic.svg";
import { useSelector } from "react-redux";

function AddContacts({ handleSearch }) {
  const [selectedOption, setSelectedOption] = useState("All Contacts");
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const contactData = useSelector((state) => state.contactData); // This is the data from store we are getting
  console.log(contactData);

  const options = [
    "All Contacts",
    "Newest First",
    "Oldest First",
    "Ascending A-Z",
    "Descending Z-A",
  ];

  // Merge the contact data from the store and the newly selected contacts
  const allContacts = { ...contactData };

  // Function to handle sorting (if needed)
  const handleSelect = (option) => {
    setSelectedOption(option);
    // Perform sorting or other logic here
  };

  const handleAddContacts = async () => {
    try {
      if ("contacts" in navigator)
        setContacts([
          await navigator.contacts.select(["name", "email", "tel", "address"]),
        ]);
      else navigate("/details");

      if (contacts.length > 0) {
        const formattedContacts = contacts.reduce((acc, contact) => {
          // Use email as the key
          const email = contact.email || "no-email"; // Fallback if email is missing
          acc[email] = {
            avatar: contact.photo ? contact.photo.url : defaultProfilePic,
            name: contact.name,
            email: contact.email,
            mobileNo: contact.tel,
            houseNo: contact.address?.house || "",
            streetName: contact.address?.street || "",
            zipCode: contact.address?.postalCode || "",
            city: contact.address?.city || "",
          };
          return acc;
        }, {});

        console.log(formattedContacts);
        // Merge formatted contacts with existing contactData
        setSelectedContacts((prevState) => ({
          ...prevState,
          ...formattedContacts,
        }));
      }
    } catch (error) {
      console.error("Error selecting contacts:", error);
    }
  };

  // Automatically populate selectedContacts with both the existing contactData and new contacts
  useEffect(() => {
    if (contacts.length > 0) {
      const formattedContacts = contacts.reduce((acc, contact) => {
        // Use email as the key
        const email = contact.email || "no-email"; // Fallback if email is missing
        acc[email] = {
          avatar: contact.photo ? contact.photo.url : defaultProfilePic,
          name: contact.name,
          email: contact.email,
          mobileNo: contact.tel,
          houseNo: contact.address?.house || "",
          streetName: contact.address?.street || "",
          zipCode: contact.address?.postalCode || "",
          city: contact.address?.city || "",
        };
        return acc;
      }, {});
      setSelectedContacts((prevState) => ({
        ...prevState,
        ...formattedContacts,
      }));
    }
  }, [contacts]);

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
        handleClick={handleAddContacts}
      ></Button>

      {Object.keys(allContacts).length > 0 ||
      Object.keys(selectedContacts).length > 0 ? (
        <div className={styles.cards}>
          {/* Render cards from both existing contact data and newly selected contacts */}
          {[
            ...new Set([
              ...Object.keys(allContacts),
              ...Object.keys(selectedContacts),
            ]),
          ].map((email) => {
            const contact = allContacts[email] || selectedContacts[email];

            return (
              <Card
                key={email}
                src={contact.avatar || defaultProfilePic}
                name={contact.name}
                tel={contact.mobileNo}
                address={`${contact.houseNo} ${contact.streetName}, ${contact.city} ${contact.zipCode}`}
              />
            );
          })}
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
