import React from "react";
import PropTypes from "prop-types";
import styles from './Grid.module.scss';

export default function Row({ children }) {
  return <div className={styles.row}>{children}</div>;
}

Row.propTypes = {
  /** `<Col />` 컴포넌트들을 사용할 수 있습니다. */
  children: PropTypes.node.isRequired
}
