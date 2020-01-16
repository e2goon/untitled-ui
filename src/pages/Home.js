import React from 'react';
import Layout from '../layouts';

function Home() {
  return (
    <Layout title="어서오세요!">
      <section>
        <h1>어서오세요. <span role="img" aria-labelledby="hugging face">🤗</span></h1>
        <p>간결하고 사용이 쉬운 컴포넌트들을 제공하여, 개발자 경험 향상에 기여하고자 합니다!</p>
        <p>이 라이브러리가 많이 발전할 수 있도록 많은 관심과 기여 부탁드립니다.</p>
      </section>
    </Layout>
  )
}

export default Home;
