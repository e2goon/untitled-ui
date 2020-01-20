import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import InputGroup from './InputGroup'
import styles from "./Input.module.scss";

export default function Input({ type, placeholder, value, sm, block, className, style, autocomplete }) {
  const cls = classnames({
    [styles.input]: true,
    [styles.sm]: sm,
    [styles.block]: block,
    [className]: true
  });
  return (
    <div className={cls} style={style}>
      <input
        type={type}
        className={styles.control}
        placeholder={placeholder}
        value={value}
        autoComplete={autocomplete && "on"}
      />
    </div>
  );
}

export {
  InputGroup
}

Input.defaultProps = {
  type: "text"
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  autocomplete: PropTypes.bool,
  sm: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  block: PropTypes.bool
};
