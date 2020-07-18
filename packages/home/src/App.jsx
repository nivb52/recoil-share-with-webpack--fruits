import React from 'react';
import { Layout, Divider } from 'antd';
import { RecoilRoot } from 'recoil';
import './index.less';
const Header = React.lazy((_) => import('nav/Header'));

import ProductCarousel from './ProductCarousel';

function App() {
  return (
    <RecoilRoot>
      <Layout style={{ minHeight: 800 }}>
       <React.Suspense fallback={<div />}>
        <Header />
       </React.Suspense>
        <Layout.Content style={{ padding: '2em' }}>
          <Divider orientation="left">Products You Might Like</Divider>
          <ProductCarousel />
        </Layout.Content>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
