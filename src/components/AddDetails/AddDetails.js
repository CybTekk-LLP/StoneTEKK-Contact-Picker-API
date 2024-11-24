import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typography from "../Typography/Typography";
import Profile from "../Profile/Profile";
import InputDefault from "../InputDefault/InputDefault";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { add } from "./../../store/contactDetailSlice";
import styles from "./AddDetails.module.css";

const AddDetails = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobileNo: "",
    houseNo: "",
    streetName: "",
    zipCode: "",
    city: "",
    avatar: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleName = (value) => {
    setUserDetails((prevDetails) => ({ ...prevDetails, name: value }));
  };

  const handleEmail = (value) => {
    setUserDetails((prevDetails) => ({ ...prevDetails, email: value }));
  };

  const handlePhoneNumber = (value) => {
    setUserDetails((prevDetails) => ({ ...prevDetails, mobileNo: value }));
  };

  const handleStreetName = (value) => {
    setUserDetails((prevDetails) => ({ ...prevDetails, streetName: value }));
  };

  const handleCityName = (value) => {
    setUserDetails((prevDetails) => ({ ...prevDetails, city: value }));
  };

  const handleHouseNo = (value) => {
    setUserDetails((prevDetails) => ({ ...prevDetails, houseNo: value }));
  };

  const handleZipCode = (value) => {
    setUserDetails((prevDetails) => ({ ...prevDetails, zipCode: value }));
  };

  const handleImageUrl = (imageUrl) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      avatar: imageUrl,
    }));
  };

  const saveContactToLocalStorage = (contact) => {
    const storedContacts = localStorage.getItem("contacts");
    let contacts = storedContacts ? JSON.parse(storedContacts) : {};

    const email = contact.email || "no-email";
    contacts[email] = {
      avatar: contact.avatar || "",
      name: contact.name,
      email: contact.email,
      mobileNo: contact.mobileNo,
      houseNo: contact.houseNo,
      streetName: contact.streetName,
      zipCode: contact.zipCode,
      city: contact.city,
    };

    localStorage.setItem("contacts", JSON.stringify(contacts));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(userDetails));

    saveContactToLocalStorage(userDetails);

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.detailForm}>
      <br />
      <br />
      <Typography text="Add Details" type="title" _fontweight={700} />
      <Typography
        text="Adding Retailer outside of StoneTEKK"
        type="body"
        _fontweight={300}
      />
      <br />
      <br />
      <div className={styles.profile}>
        <Profile getImage={handleImageUrl} />
      </div>
      <br />
      <br />
      <InputDefault
        type="text"
        _inputMode="text"
        handleValue={handleName}
        inputLabel="Name"
        index={1}
        autoComplete="name"
        placeholder="e.g. Jon Doe"
        _required={true}
      />
      <br />
      <InputDefault
        type="email"
        _inputMode="email"
        handleValue={handleEmail}
        inputLabel="Email* (Required)"
        index={2}
        autoComplete="email"
        placeholder="e.g. abc@example.com"
        _required={true}
      />
      <br />
      <InputDefault
        type="tel"
        _inputMode="tel"
        handleValue={handlePhoneNumber}
        inputLabel="Mobile Number"
        index={3}
        autoComplete="tel"
        placeholder="e.g. +1 1234 5678 90"
      />
      <br />
      <InputDefault
        type="text"
        _inputMode="numeric"
        handleValue={handleHouseNo}
        inputLabel="House No."
        index={4}
        autoComplete="address-line1"
        placeholder="e.g. 123"
      />
      <br />
      <InputDefault
        type="text"
        _inputMode="text"
        handleValue={handleStreetName}
        inputLabel="Street Name"
        index={5}
        autoComplete="street-address"
        placeholder="e.g. abc road"
      />
      <br />
      <InputDefault
        type="text"
        _inputMode="numeric"
        handleValue={handleZipCode}
        inputLabel="Zipcode"
        index={6}
        autoComplete="postal-code"
        placeholder="e.g. 11111"
      />
      <br />
      <InputDefault
        type="text"
        _inputMode="text"
        handleValue={handleCityName}
        inputLabel="City"
        index={7}
        autoComplete="address-level2"
        placeholder="e.g. New York"
      />
      <br />
      <br />
      <br />
      <Button
        text={"Looks Good"}
        type={"primary"}
        textColor={"var(--primary-light)"}
        _btnType={"submit"}
      ></Button>
      <br />
      <br />
      <br />
      <br />
    </form>
  );
};

export default AddDetails;
