import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Select.module.scss";

export default function Select({ children, text, sm, className, style, block }) {
  const [val, setVal] = useState();
  const [txt, setTxt] = useState(text);
  const cls = classnames({
    [styles.select]: true,
    [styles.sm]: sm,
    [styles.block]: block,
    [className]: true
  });
  const onChange = (e) => {
    setVal(e.target.value);
    setTxt(e.target.selectedOptions[0].text);
  }
  return (
    <div className={cls} style={style}>
      <select value={val} className={styles.control} onChange={onChange}>
        {children}
      </select>
      <span className={styles.toggle}>{txt}</span>
    </div>
  );
}

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  text: PropTypes.string,
  sm: PropTypes.bool,
  style: PropTypes.object,
  block: PropTypes.bool
};
