import React from 'react';
import "./Login.css";
import logo from "../../asset/logo.png";
import Avatar from 'antd/lib/avatar/avatar';
import { createFromIconfontCN } from '@ant-design/icons';
import LoginForm from './LoginForm';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const Login = () => {
    return (
       <div className="flex justify-center items-center  min-h-full-screen jss931">
           <div className="MuiPaper-elevation1 jss932 MuiCard-root MuiPaper-root"> 
           <div className="MuiGrid-root MuiGrid-container">
            <div className="ant-row ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 gutter">
                <div className="jss933 px-14 py-8 h-full">
                    <div className="jss934">
                    <img src={logo} width="119px" alt="" className="login-logo" />
                    <span>MatX Pro</span>
                    </div>
                    <h1 className="jss935">
                    Admin Dashboard
                    </h1>
                    <div className="jss936">
                        <div className="item">JWT, FireBase &amp; Auth0 Authentication</div>
                        <div className="item">Clean &amp; Organised code</div>
                        <div className="item">Limitless Pages &amp; Components</div>
                    </div>
                </div>
                <span className="flex-grow"></span>
            </div>
            <div className=" loginform ant-row ant-col-xs-24 ant-col-sm-12 ant-col-md-12 ant-col-lg-12 gutter">
                <h1 className="wt px-8 pt-8">
                    Create Account
                </h1>
                <div className="px-8">
                    <Avatar style={{ backgroundColor: '#1890FF' }}>
                    <IconFont type="icon-tuichu" />
                    </Avatar>
                    <Avatar className="mr-1 ml-1" style={{ backgroundColor: '#1890FF' }}>
                    <IconFont type="icon-facebook" />
                    </Avatar>
                    <Avatar style={{ backgroundColor: '#1890FF' }}>
                    <IconFont type="icon-twitter" />
                    </Avatar>
                </div>
                <h4 className="wt px-8 pt-8">or create user email for registration</h4>
                <div className="px-8 pt-8">
                    <LoginForm/>
                </div>
            </div>
           </div>              
           </div>
        </div>
    );
}

export default Login;
