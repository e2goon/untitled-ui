import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Switch.module.scss";

export default function Switch({ checked, disabled, onClick, className }) {
  const cls = classnames({
    [styles.switch]: true,
    [className]: className
  });
  const [isChecked, setChecked] = useState(checked);
  const handleChange = function(e) {
    setChecked(!isChecked);
    onClick && onClick(e, isChecked);
  }
  return (
    <div className={cls}>
      <input
        type="checkbox"
        className={styles.control}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className={styles.icon}></span>
    </div>
  );
}

Switch.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Switch.defaultProps = {
  checked: false
}
