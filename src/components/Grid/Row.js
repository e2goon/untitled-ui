import React from "react";
import styles from './Grid.module.scss';

export default function Row({ children }) {
  return <div className={styles.row}>{children}</div>;
}
