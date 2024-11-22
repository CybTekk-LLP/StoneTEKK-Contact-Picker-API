import React, { useEffect, useState } from "react";
import Typography from "../Typography/Typography";
import { useNavigate } from "react-router-dom";
import Select from "../Select/Select";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./AddContacts.module.css";
import EmptyState from "../EmptyState/EmptyState";
import defaultProfilePic from "./../../images/DefaultProfilePic.svg";
import { useDispatch, useSelector } from "react-redux";
import ContextMenu from "../ContextMenu/ContextMenu";
import { remove } from "./../../store/contactDetailSlice";

function AddContacts() {
  const [selectedOption, setSelectedOption] = useState("All Contacts");
  const [selectedContacts, setSelectedContacts] = useState({});
  const [contacts, setContacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [emailId, setEmailId] = useState("");
  const [contextMenuVisible, setContextMenuVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const contactData = useSelector((state) => state.contactData);

  const handleDelete = (email) => {
    dispatch(remove(email));
    const storedContacts = loadContactsFromLocalStorage();
    delete storedContacts[email];
    localStorage.setItem("contacts", JSON.stringify(storedContacts));
    const updatedContacts = { ...selectedContacts };
    delete updatedContacts[email];

    setSelectedContacts(updatedContacts);
    setContextMenuVisible(false);
  };

  const handleEdit = (encodedEmail) => {
    navigate("/details?email=" + encodedEmail);
  };

  const options = [
    "All Contacts",
    "Newest First",
    "Oldest First",
    "Ascending A-Z",
    "Descending Z-A",
  ];

  const allContacts = { ...contactData };

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddContacts = async () => {
    try {
      if ("contacts" in navigator) {
        const newContacts = await navigator.contacts.select([
          "name",
          "email",
          "tel",
          "address",
        ]);
        setContacts(newContacts);
      } else {
        navigate("/details");
      }
    } catch (error) {
      console.error("Error selecting contacts:", error);
    }
  };

  const saveContactsToLocalStorage = (contacts) => {
    const contactsToSave = contacts.reduce((acc, contact) => {
      const email = contact.email || "no-email";
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

    localStorage.setItem("contacts", JSON.stringify(contactsToSave));
  };

  const loadContactsFromLocalStorage = () => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts ? JSON.parse(storedContacts) : {};
  };

  const sortedContacts = () => {
    let contactsArray = [
      ...new Set([
        ...Object.keys(allContacts),
        ...Object.keys(selectedContacts),
      ]),
    ].map((email) => {
      return allContacts[email] || selectedContacts[email];
    });

    switch (selectedOption) {
      case "Newest First":
        return contactsArray.reverse();

      case "Oldest First":
        return contactsArray;

      case "Ascending A-Z":
        return contactsArray.sort((a, b) => a.name.localeCompare(b.name));

      case "Descending Z-A":
        return contactsArray.sort((a, b) => b.name.localeCompare(a.name));

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

  const handleSendMail = () => {
    localStorage.removeItem("contacts");
  };

  const toggleContextMenu = (email) => {
    if (email === emailId) {
      setContextMenuVisible(!contextMenuVisible);
    } else {
      setEmailId(email);
      setContextMenuVisible(true);
    }
  };

  useEffect(() => {
    const storedContacts = loadContactsFromLocalStorage();
    setSelectedContacts(storedContacts);
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      const updatedContacts = contacts.reduce((acc, contact) => {
        const email = contact.email || "no-email";
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

      const mergedContacts = { ...selectedContacts, ...updatedContacts };

      setSelectedContacts(mergedContacts);
      saveContactsToLocalStorage(mergedContacts);
    }
  }, [contacts, selectedContacts]);

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
          {filterContacts().map((contact) => {
            return (
              <div key={contact.email} className={styles.card}>
                <Card
                  key={contact.email}
                  src={contact.avatar || defaultProfilePic}
                  name={contact.name}
                  tel={contact.mobileNo}
                  address={`${contact.houseNo} ${contact.streetName}, ${contact.city} ${contact.zipCode}`}
                  toggleMenu={() => toggleContextMenu(contact.email)}
                />
                <div className={styles.menu}>
                  {contextMenuVisible && emailId === contact.email && (
                    <ContextMenu
                      text="Edit Contact"
                      textDanger="Delete"
                      textColor="Var(--primary-active)"
                      textColorDanger="var(--danger)"
                      editContact={() =>
                        handleEdit(encodeURIComponent(contact.email))
                      }
                      deleteContact={() => handleDelete(contact.email)}
                    />
                  )}
                </div>
              </div>
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
        handleClick={handleSendMail}
      ></Button>
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}

export default AddContacts;
