import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Icon.module.scss";
import "./icons.scss";

export default function Icon({ name, style, text }) {
  const cls = classnames({
    [styles.icon]: true,
    [name]: name
  });
  return <span className={cls} style={style}>{text}</span>;
}

Icon.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  style: PropTypes.object
};
