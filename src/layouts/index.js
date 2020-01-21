import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "../scss/global.scss";
import styles from "./Layout.module.scss";

function Layout({ children, title }) {
  return (
    <>
      <Helmet>
        <html lang="ko" />
        <title>{title ? `${title} - Untitled UI` : "Untitled UI"}</title>
      </Helmet>

      <header className={styles.header}>
        <div className={styles.inner}>
          <h1 className={styles.title}>{title}</h1>
          <nav className={styles.nav}>
            <Link to="/" className={styles.button}>
              UI 가이드
            </Link>
            <Link to="/user/create" className={styles.button}>
              회원가입
            </Link>
          </nav>
        </div>
      </header>

      <main className={styles.container}>{children}</main>

      <footer className={styles.footer}>
        <address className={styles.bi}>카카오페이</address>
      </footer>
    </>
  );
}

export default Layout;

Layout.propTypes = {
  /** 레이아웃 대제목 */
  title: PropTypes.string.isRequired
}
