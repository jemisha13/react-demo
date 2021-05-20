import { Layout,Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const {  Sider  } = Layout;



const Sidebar = (props) => {
 
  return (
    <Sider trigger={null} collapsible collapsed={props.toggle}>
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<UserOutlined />}>
      <Link to="/">
        Home
      </Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
      <Link to="/account-setting">
      Account Setting
      </Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
      <Link to="/leaderboard">
      Leaderboard
      </Link>
      </Menu.Item>
      <Menu.Item key="4" icon={<UploadOutlined />}>
      <Link to="/news">
      News
      </Link>
      </Menu.Item>

    </Menu>
  </Sider>
  );
}

export default Sidebar;



