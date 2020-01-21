import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import "../scss/global.scss";
import styles from "./Layout.module.scss";

/**
 * 현재 레이아웃의 종류는 한가지 입니다. 종류가 한가지 이상 늘어나면 이 컴포넌트를 **레이아웃 메니저**로 발전시켜 Props 을 이용하여 레이아웃의 타입을 선택할 수 있도록 계획해야 합니다.
 * 추후 요구사항에 따라 레이아웃의 종류가 많아질 수 있으며, 라우터 이동 시 레이아웃이 리렌더링 되지 않도록 추가 작업이 필요합니다.
 * 
 * **TODO:**
 * 
 * - 레이아웃이 한개이상으로 늘어날 경우 레이아웃 메니저로 컴포넌트 발전
 * - 라우터 이동 시 레이아웃이 리랜더링 되는 이슈를 해결 해야하는 기술 부채 존재
 * - header, footer 의 prop 이 추가 될 가능성 존재
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

      <footer className={styles.footer}>
        <address className={styles.bi}>카카오페이</address>
      </footer>
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
