import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "./reset.scss";
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
            <Link to="/" exact className={styles.button}>
              첫 화면
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
