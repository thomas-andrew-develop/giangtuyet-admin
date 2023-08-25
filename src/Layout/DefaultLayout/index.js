import React, { useState } from 'react'
import Header from '../components/Header/HeaderLayout';
import Footer from '../components/Footer/FooterLayout';
import Sidebar from '../components/Sidebar/SidebarLayout';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;




function DefaultLayout({children}) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  console.log(colorBgContainer)
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sidebar collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}/>
      {/* <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider> */}
      <Layout>
        <Header colorBgContainer={colorBgContainer}/>
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          {children}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  )
}

export default DefaultLayout