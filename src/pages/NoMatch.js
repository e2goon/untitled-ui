import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch() {
  return (
    <section>
      <h1>404 Not Found</h1>
      <Link>뒤로가기</Link>
    </section>
  )
}
