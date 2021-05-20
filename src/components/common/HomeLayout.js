import React from 'react';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import Contents from './Contents';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Route, Switch } from 'react-router';
import AccountSetting from '../AccountSetting';
import Dashboard from '../Dashboard';
import Leaderboard from '../Leaderboard';
import News from '../News';



const { Header,} = Layout;
const  HomeLayout = () => {

  // const [toggle, settoggle] = useState(true)

  // const setHeader = () => {
  //   settoggle(!toggle);

  // }


  return (
    <Layout>
        <Sidebar toggle="toggle"/>
        <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
        {React.createElement(true ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',   
        })}
        </Header>
          <Contents />
         </Layout>
      </Layout>
  );
}

export default HomeLayout;
