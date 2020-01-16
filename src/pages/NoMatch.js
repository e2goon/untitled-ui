import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../layouts';

function NoMatch() {
  return (
    <Layout title="404 Not Found">
      <section>
        <h1>404 Not Found</h1>
        <Link>뒤로가기</Link>
      </section>
    </Layout>
  )
}

export default NoMatch;
