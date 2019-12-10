import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link,Route} from 'react-router-dom';
import UserStatistics from './../Backstage/UserStatistics/userstatistics';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
var BackstageManageCss=require('./backstagemanage.css');
export default class BackstageManagePage extends React.Component{
    // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2','sub3', 'sub4','sub5','su6'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu mode="inline" defaultSelectedKeys={['1']} openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} theme="dark">
                            
                            <SubMenu key="sub1" title={ <span> <Icon type="mail" /> <span><Link to="/userstatistics">用户管理</Link></span></span>}>
                                <Menu.Item key="1">统计分析</Menu.Item>
                                <Menu.Item key="2">添加用户</Menu.Item>
                                <Menu.Item key="3">管理用户</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={ <span> <Icon type="mail" /> <span>食品速购管理</span></span>}>
                                <Menu.ItemGroup key="g1" title="商品">
                                    <Menu.Item key="1">商品管理</Menu.Item>
                                    <Menu.Item key="2">添加商品</Menu.Item>
                                    <Menu.Item key="3">管理商品</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g2" title="图片新闻">
                                    <Menu.Item key="4">功能管理</Menu.Item>
                                    <Menu.Item key="5">添加图片新闻</Menu.Item>
                                    <Menu.Item key="6">管理图片新闻</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g3" title="通知公告">
                                    <Menu.Item key="7">功能管理</Menu.Item>
                                    <Menu.Item key="8">添加通知公告</Menu.Item>
                                    <Menu.Item key="9">管理通知公告</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu key="sub3" title={ <span> <Icon type="mail" /> <span>组织管理</span></span>}>
                                <Menu.Item key="1">添加组织</Menu.Item>
                                <Menu.Item key="2">管理组织</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={ <span> <Icon type="mail" /> <span>风采管理</span></span>}>
                                <Menu.ItemGroup key="g1" title="优秀志愿者">
                                    <Menu.Item key="1">功能管理</Menu.Item>
                                    <Menu.Item key="2">添加优秀志愿者</Menu.Item>
                                    <Menu.Item key="3">管理优秀志愿者</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g2" title="优秀志愿者组织">
                                    <Menu.Item key="4">功能管理</Menu.Item>
                                    <Menu.Item key="5">添加优秀志愿组织</Menu.Item>
                                    <Menu.Item key="6">管理优秀志愿组织</Menu.Item>
                                </Menu.ItemGroup>
                                <Menu.ItemGroup key="g3" title="优秀志愿项目">
                                    <Menu.Item key="7">功能管理</Menu.Item>
                                    <Menu.Item key="8">添加志愿项目</Menu.Item>
                                    <Menu.Item key="9">管理志愿项目</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                            <SubMenu key="sub5" title={ <span> <Icon type="mail" /> <span>文章管理</span></span>}>
                                <Menu.Item key="1">功能管理</Menu.Item>
                                <Menu.Item key="2">添加文章</Menu.Item>
                                <Menu.Item key="3">管理文章</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub6" title={ <span> <Icon type="mail" /> <span>用户反馈管理</span></span>}>
                                <Menu.Item key="1">功能管理</Menu.Item>
                                <Menu.Item key="2">管理反馈</Menu.Item>
                            </SubMenu>
                        </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '40px 40px' }}>
            

          </Content>
          <div style={{ padding: 24, background: '#fff', minHeight: 1000 }}>
                <Route path="/userstatistics" component={UserStatistics}></Route>
            </div>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
        )
    }
}