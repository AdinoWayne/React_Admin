import React, { Component } from "react";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import SiderBar from "./containers/SiderBar";

import { Layout } from 'antd';

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
      <Layout style={{ minHeight: '100vh' }}>
        <SiderBar />
        <Layout>
          <Header />
          <Content style={{ margin: '0 16px' }}>
          </Content>
          <Footer />
        </Layout>
      </Layout>
      </div>
    );
  }
}

export default App;
