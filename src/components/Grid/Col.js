import React from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from "./Grid.module.scss";

export default function Col({ children, auto }) {
  const cls = classnames({
    [styles.col]: true,
    [styles.auto]: auto
  })
  return <div className={cls}>{children}</div>;
}

Col.propTypes = {
  auto: PropTypes.bool
}
