import React from "react";
import styles from "./Success.module.css";

function Success({ count }) {
  return (
    <div className={styles.success_block}>
      <img src="/img/check_mark.png" alt="Success" />
      <h3>successfully</h3>
      <span> {count} invitation was sent to all users </span>
      <button className={styles.btn} onClick={() => window.location.reload()}>
     
        b a c k
      </button>
    </div>
  );
}

export default Success;
