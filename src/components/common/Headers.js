import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import React from "react";

const Headers = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    className: 'trigger',
    onClick: this.toggle,
    })}
    </Header>
  );
}

export default Headers;
