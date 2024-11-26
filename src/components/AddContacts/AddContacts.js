import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./../../store/contactDetailSlice";
import Typography from "../Typography/Typography";
import Select from "../Select/Select";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Toast from "../Toast/Toast";
import EmptyState from "../EmptyState/EmptyState";
import defaultProfilePic from "./../../images/DefaultProfilePic.svg";
import ContextMenu from "../ContextMenu/ContextMenu";
import styles from "./AddContacts.module.css";

const AddContacts = () => {
  const [selectedOption, setSelectedOption] = useState("All Contacts");
  const [searchQuery, setSearchQuery] = useState("");
  const [emailId, setEmailId] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [showToast, setShowToast] = useState(undefined);
  const [toastConfigs, setToastConfigs] = useState({
    title: "",
    description: "",
    type: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const contactData = useSelector((state) => state.contactData);

  const handleDelete = (email) => {
    dispatch(remove(email));
    setContextMenuVisible(false);
  };

  const handleEdit = (email) => {
    navigate(`/details/${email}`);
  };

  const options = [
    "All Contacts",
    "Newest First",
    "Oldest First",
    "Ascending A-Z",
    "Descending Z-A",
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddContacts = async () => {
    try {
      const props = ["name", "email", "tel", "address", "icon"];
      const opts = { multiple: true };
      if ("contacts" in navigator && "ContactsManager" in window) {
        const newContacts = await navigator.contacts.select(props, opts);

        // Dispatch contacts to the Redux store
        newContacts.forEach((contact) => {
          dispatch(
            add({
              name: contact?.name?.join(" ") || "",
              email: contact?.email[0] || "email@example.com",
              icon: contact?.icon || defaultProfilePic,
              mobileNo: contact?.tel[0] || "",
              houseNo: contact?.address[0]?.addressLine || "",
              streetName: "",
              zipCode:
                contact?.address[0]?.postalCode ||
                contact?.address[0]?.sortingCode ||
                "",
              city: contact?.address[0]?.city || "",
            })
          );
        });
      } else {
        navigate("/details");
      }
    } catch (error) {
      console.error("Error selecting contacts:", error);
      navigate("/details");
    }
  };

  const sortedContacts = () => {
    const contactsArray = Object.values(contactData);

    switch (selectedOption) {
      case "Newest First":
        return [...contactsArray].reverse();

      case "Oldest First":
        return contactsArray;

      case "Ascending A-Z":
        return [...contactsArray].sort((a, b) => a.name.localeCompare(b.name));

      case "Descending Z-A":
        return [...contactsArray].sort((a, b) => b.name.localeCompare(a.name));

      default:
        return contactsArray;
    }
  };

  const filterContacts = () => {
    if (!searchQuery) return sortedContacts();

    const lowercasedQuery = searchQuery.toLowerCase();
    return sortedContacts().filter((contact) => {
      const nameMatches = contact.name.toLowerCase().includes(lowercasedQuery);
      const emailMatches = contact.email
        ?.toLowerCase()
        .includes(lowercasedQuery);
      return nameMatches || emailMatches;
    });
  };

  const handleSendMail = async () => {
    setIsDisabled(true);
    const emailData = {
      to: Object.keys(contactData),
      subject: "Experimental Mail Using Contact Picker API",
    };

    try {
      const response = await fetch(
        "https://stoneworldinternational.com/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify(emailData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const responseData = await response.json();
      setToastConfigs({
        title: "Successfully Sent Emails",
        description:
          "The mails have been sent and your retailers will receive them shortly.",
        type: "success",
      });
      setShowToast(true);
    } catch (error) {
      setToastConfigs({
        title: "Failed to Send Emails",
        description:
          "The mails couldn't be sent as we might be testing things.",
        type: "failure",
      });
      setShowToast(false);
    } finally {
      setIsDisabled(false);
      setTimeout(() => {
        setShowToast(undefined);
      }, 5000);
    }
  };

  const toggleContextMenu = (email) => {
    if (email === emailId) {
      setContextMenuVisible(!contextMenuVisible);
    } else {
      setEmailId(email);
      setContextMenuVisible(true);
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
      <div className={styles.sortWrapper}>
        <Typography
          text="Sort By:"
          type="body"
          _fontweight={400}
          _color={"var(--placeholder)"}
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

      {filterContacts().length > 0 ? (
        <div className={styles.cards}>
          {filterContacts().map((contact) => (
            <div key={contact.email} className={styles.card}>
              <Card
                key={contact.email}
                src={contact.icon || defaultProfilePic}
                name={contact.name}
                tel={contact.mobileNo}
                address={`${contact.houseNo} ${contact.streetName} ${contact.city} ${contact.zipCode}`}
                toggleMenu={() => toggleContextMenu(contact.email)}
              />
              {contextMenuVisible && emailId === contact.email && (
                <ContextMenu
                  text="Edit Contact"
                  textDanger="Delete"
                  textColor="var(--primary-active)"
                  textColorDanger="var(--danger)"
                  editContact={() => handleEdit(contact.email)}
                  deleteContact={() => handleDelete(contact.email)}
                />
              )}
            </div>
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
        text={isDisabled ? "Working on it..." : "Send Mail with Order Details"}
        type={"primary"}
        textColor={"var(--primary-light)"}
        _btnType={"submit"}
        _disabled={isDisabled}
        handleClick={handleSendMail}
      ></Button>
      {showToast !== undefined && (
        <Toast
          title={toastConfigs.title}
          description={toastConfigs.description}
          type={toastConfigs.type}
        ></Toast>
      )}
      <br />
      <br />
      <br />
      <br />
    </main>
  );
};

export default AddContacts;
