import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Switch.module.scss';

function Switch({ checked, disabled, className }) {
  const cls = classnames({
    [styles.switch]: true,
    [className]: true
  })
  return (
    <div className={cls}>
      <input type="checkbox" className={styles.control} checked={checked} disabled={disabled} />
      <span className={styles.icon}></span>
    </div>
  )
}

export default Switch;

Switch.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
};
