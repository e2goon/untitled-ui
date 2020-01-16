import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Layout</h1>
        <nav>
          <Link to="/" exact>홈</Link>
          <Link to="/signin">회원가입</Link>
        </nav>
      </header>
      <main>
        { children }
      </main>
    </>
  )
}
export default Layout;
