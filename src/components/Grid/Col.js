import React from "react";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from "./Grid.module.scss";

export default function Col({ children, style, auto }) {
  const cls = classnames({
    [styles.col]: true,
    [styles.auto]: auto
  })
  return <div className={cls} style={style}>{children}</div>;
}

Col.propTypes = {
  style: PropTypes.object,
  auto: PropTypes.bool
}
