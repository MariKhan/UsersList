import React from "react";

import styles from "./User.module.css";

function User({
  id,
  email,
  first_name,
  last_name,
  avatar,
  onClickInvite,
  isInvited,
}) {
  return (
    <div className={styles.block1}>
      <div>
        <img className={styles.avatar} alt="avatar" src={avatar}></img>
      </div>
      <div className={styles.block2}>
        <h3>
          {first_name} {last_name}
        </h3>
        <div className={styles.email_icon} />
        <p>{email}</p>
      </div>
      <div>
        <img
          onClick={() => onClickInvite(id)}
          className={styles.action}
          src={`/icons/${isInvited ? "minus" : "plus"}.svg`}
          alt="ddd"
        />
      </div>
    </div>
  );
}

export default User;
