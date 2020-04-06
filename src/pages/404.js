import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>언제인지는 모르지만 곧 생길지도 몰라요.</p>
  </Layout>
);

export default NotFoundPage;
