import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ButtonGroup from "./ButtonGroup";
import styles from "./Button.module.scss";

/**
 * `<Button />` 컴포넌트는 다양한 색상, 사이즈를 아직 제공하고 있지 않습니다. 추후 요구사항에 따라 언제든 추가될 수 있습니다.
 * 
 * **TODO:**
 * 
 * - 추후 버튼을 Input(Checkbox, Radio) 컴포넌트와 연계하여 사용할 수 있도록 고려
 */

export default function Button({ children, type, name, block, sm, className, style, checked }) {
  const buttonCls = classnames({
    [styles.button]: true,
    [styles.block]: block,
    [styles.sm]: sm,
    [className]: true
  });
  const labelCls = classnames({
    [styles.label]: true,
    [styles.block]: block,
    [styles.sm]: sm,
    [className]: true
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

export { ButtonGroup };

Button.defaultProps = {};

Button.propTypes = {
  children: PropTypes.node.isRequired,

  /** name 속성과 같이 사용 */
  type: PropTypes.oneOf(["radio"]),
  name: PropTypes.string,

  block: PropTypes.bool,
  sm: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  checked: PropTypes.bool
};
