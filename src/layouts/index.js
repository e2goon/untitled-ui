import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Layout({ children, title }) {
  return (
    <>
      <Helmet>
        <html lang="ko" />
        <title>{title ? `${title} - Untitled UI` : "Untitled UI"}</title>
      </Helmet>
      <header>
        <h1>Untitled UI</h1>
        <nav>
          <Link to="/" exact>
            홈
          </Link>
          <Link to="/user/create">회원가입</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
export default Layout;
