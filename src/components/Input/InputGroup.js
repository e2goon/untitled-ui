import React from "react";
import PropTypes from "prop-types";

import styles from "./Input.module.scss";

export default function InputGroup({ children }) {
  return (
    <div className={styles.group}>
      {children}
    </div>
  );
}

InputGroup.propTypes = {
  children: PropTypes.node
};
