import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Select.module.scss";

/**
 * `<Select />` 컴포넌트는 `<option>` 태그를 사용하여 네이티브한 기능을 그대로 사용할 수 있습니다. 인라인 스타일이나 클래스명을 중첩하여 폭넓은 디자인 커스터마이징을 할 수 있습니다.
 * 
 * 추후에 배열을 받아서 `<option>` 태그들을 리스트 형식으로 표시할 수 있는 기능을 계획하고 있습니다.
 */

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
  /** 선택할 수 있도록 `<option>` 태그를 사용해야 합니다. */
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  text: PropTypes.string,
  sm: PropTypes.bool,
  style: PropTypes.object,
  block: PropTypes.bool
};
