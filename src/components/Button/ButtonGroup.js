import React from "react";
import styles from "./Button.module.scss";

function ButtonGroup({ children }) {
  return (
    <div className={styles.group}>
      {children}
    </div>
  )
}

export default ButtonGroup;
