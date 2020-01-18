import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ButtonGroup from "./ButtonGroup";
import styles from "./Button.module.scss";

function Button({ children, type, name, block, sm, style, checked }) {
  const buttonCls = classnames({
    [styles.button]: true,
    [styles.block]: block,
    [styles.sm]: sm
  });
  const labelCls = classnames({
    [styles.label]: true,
    [styles.block]: block,
    [styles.sm]: sm
  });
  if (type === "radio") {
    return (
      <label className={labelCls} style={style}>
        <input
          type="radio"
          name={name}
          className={styles.control}
          defaultChecked={checked}
        />
        <span className={buttonCls}>{children}</span>
      </label>
    );
  } else {
    return (
      <button type="button" className={buttonCls} style={style}>
        {children}
      </button>
    );
  }
}

export default Button;

export { ButtonGroup };

Button.defaultProps = {};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  name: PropTypes.string,
  block: PropTypes.bool,
  sm: PropTypes.bool,
  style: PropTypes.object,
  checked: PropTypes.bool
};
