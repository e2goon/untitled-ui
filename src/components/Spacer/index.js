import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Spacer.module.scss";

export default function Spacer({ x2, x3, bgColor }) {
  const cls = classnames({
    [styles.spacer]: true,
    [styles.x2]: x2,
    [styles.x3]: x3,
  });
  return (
    <div className={cls}></div>
  );
}

Spacer.defaultProps = {
  bgColor: 'transparent'
};

Spacer.propTypes = {
  // TODO: size 3x
  x2: PropTypes.bool,
  x3: PropTypes.bool,
  bgColor: PropTypes.string,
};
