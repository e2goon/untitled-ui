import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "../scss/global.scss";
import styles from "./Layout.module.scss";

/**
 * **TODO:**
 * 
 * - 레이아웃이 한개이상 늘어날 경우 레이아웃 매니저 기능 확대
 * - 라우터 이동 시 레이아웃이 리랜더링 되는 이슈를 해결 해야하는 기술 부채 해결
 * - header, footer 등 자유자재로 요소를 배치할 수 있도록 고려
 */

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
    </>
  );
}

export default Layout;

Layout.propTypes = {
  /** 레이아웃의 컨텐츠 영역 */
  children: PropTypes.node.isRequired,

  /** 레이아웃 대제목 */
  title: PropTypes.string.isRequired
};
