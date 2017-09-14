import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import './layout.less';

const CustomizedSider = (props) => <Sider {...props} />
CustomizedSider.__ANT_LAYOUT_SIDER = true;

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {

    return (
      <Layout>
        <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span className="nav-text">home</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="smile-o" />
              <span className="nav-text">todo</span>
              <Link to="/todo" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200, display: 'flex', height: '100vh', flexDirection: 'column' }}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Avatar style={{marginTop: 15, marginLeft: 20, marginRight: 20}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <span style={{color: '#108ee9', verticalAlign: 'top', marginTop: 20}}>八神光</span>
          </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial', flex: 1 }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center', height: '100%' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
