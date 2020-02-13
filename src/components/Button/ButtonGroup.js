import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Button.module.scss";

function ButtonGroup({ children, block }) {
  const cls = classnames({
    [styles.group]: true,
    [styles.block]: block
  });
  return <div className={cls}>{children}</div>;
}

export default ButtonGroup;

ButtonGroup.propTypes = {
  children: PropTypes.node,
  block: PropTypes.bool
};
