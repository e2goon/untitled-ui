import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Input.module.scss";

export default function InputGroup({ children, block }) {
  const cls = classnames({
    [styles.group]: true,
    [styles.block]: block
  });
  return (
    <div className={cls}>
      {children.map((child, index) => {
        return cloneElement(child, {
          key: index,
          className: styles.col
        });
      })}
    </div>
  );
}

InputGroup.propTypes = {
  children: PropTypes.node,
  block: PropTypes.bool
};
