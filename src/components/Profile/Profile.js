import React, { useState } from "react";
import editPen from "./../../images/EditPen.svg";
import defaultProfilePic from "./../../images/DefaultProfilePic.svg";
import styles from "./Profile.module.css";

const Profile = ({ getImage }) => {
  const [value, setValue] = useState(defaultProfilePic);

  const getProfileImage = (e) => {
    const files = e.target.files;
    if (files) {
      const imgUrl = URL.createObjectURL(files[0]);
      setValue(imgUrl);
      getImage(imgUrl);
    }
  };

  return (
    <div className={styles.profileWrapper}>
      <label htmlFor="profile-pic" aria-label="Edit Icon">
        <img src={editPen} alt="Edit Icon" />
      </label>
      <input
        id="profile-pic"
        type="file"
        onChange={getProfileImage}
        accept="image/*"
      />
      <img
        className={styles.profilePic}
        src={value}
        alt="profile"
        height="160px"
      />
    </div>
  );
};

export default Profile;
