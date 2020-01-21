import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from ".";

export default {
  title: "Layout",
  component: Layout
};

export const basic = () => (
  <Router>
    <Layout title="Hello">
      내용
    </Layout>
  </Router>
)
