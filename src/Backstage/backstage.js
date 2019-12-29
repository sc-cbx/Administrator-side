import React from 'react';
import {Menu,Dropdown,Button,Icon} from 'antd';
import {Link,Route,BrowserRouter,Redirect} from 'react-router-dom';
import UserStatistics from './UserStatistics/userstatistics';
import UserAdd from './UserAdd/useradd';
import UserManage from './UserManage/usermange';
import FoodFunction from './FoodFunction/foodfunction';
import FoodAdd from './FoodAdd/foodadd';
import FoodManage from './FoodManage/foodmanage';
import HelpFunction from './HelpFunction/helpfunction';
import HelpAdd from './HelpAdd/helpadd';
import HelpManage from './HelpManage/helpmanage';
import OrderFunotionPage from './OrderFunction/orderfunction';
import OrderManage from './OrderManage/ordermanage';
import GoodxFunctionPage from './GoodxFunction/goodxfunction';
import GoodxAddPage from './GoodxAdd/goodxadd';
import GoodxManage from './GoodxManage/goodxmanage';
import SecgoodsFunction from './SecgoodsFunction/secgoodsfunction';
import SecgoodsAdd from './SecgoodsAdd/secgoodsadd';
import SecgoodsManage from './SecgoodsManage/secgoodsmanage';
import UserbackFunctionPage from './UserbackFunction/userbackfunction';
import UserbackManagePage from './UserbackManage/userbackmanage';
var BackstageCss=require('./backstage.css');
const { SubMenu } = Menu;
export default class Backstage extends React.Component{
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
            <div className={BackstageCss.all}>
                <BrowserRouter basename="backstage">
                    <div className={BackstageCss.leftmenu}>
                        <div>
                            <h1 className={BackstageCss.h1}>网站管理</h1>
                        </div>
                        <div className={BackstageCss.leftmenudown}>
                        <Menu mode="inline" defaultSelectedKeys={['1']} openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} theme="dark" className={BackstageCss.menu}>
                                
                                <SubMenu key="sub1" title={ <span> <Icon type="mail" /> <span>用户管理</span></span>}>
                                    <Menu.Item key="1"><Link to="/userstatistics">统计分析</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/useradd">添加用户</Link></Menu.Item>
                                    <Menu.Item key="3"><Link to="/usermange">管理用户</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={ <span> <Icon type="mail" /> <span>食品速购管理</span></span>}>
                                        <Menu.Item key="2"><Link to="/foodfunction">功能管理</Link></Menu.Item>
                                        <Menu.Item key="3"><Link to="/foodadd">添加商品</Link></Menu.Item>
                                        <Menu.Item key="4"><Link to="/foodmanage">管理商品</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={ <span> <Icon type="mail" /> <span>跳蚤市场管理</span></span>}>
                                        <Menu.Item key="1"><Link to="/secgoodsfunction">功能管理</Link></Menu.Item>
                                        <Menu.Item key="2"><Link to="/secgoodsadd">添加商品</Link></Menu.Item>
                                        <Menu.Item key="3"><Link to="/secgoodsmanage">管理商品</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub4" title={ <span> <Icon type="mail" /> <span>互助贴吧管理</span></span>}>
                                        <Menu.Item key="1"><Link to="/helpfunction">功能管理</Link></Menu.Item>
                                        <Menu.Item key="2"><Link to="/helpadd">添加帮助</Link></Menu.Item>
                                        <Menu.Item key="3"><Link to="/helpmanage">管理帮助</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub5" title={ <span> <Icon type="mail" /> <span>订单管理</span></span>}>
                                        <Menu.Item key="1"><Link to="/orderfunction">功能管理</Link></Menu.Item>
                                        <Menu.Item key="3"><Link to="/ordermanage">管理帮助</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub8" title={ <span> <Icon type="mail" /> <span>用户反馈管理</span></span>}>
                                    <Menu.Item key="1"><Link to="/userbackfunction">功能管理</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to="/userbackmanage">管理反馈</Link></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                        
                    </div>
                    <div className={BackstageCss.rightmenu}>
                        <Route path="/userstatistics" component={UserStatistics}></Route>
                        <Route path="/useradd" component={UserAdd}></Route>
                        <Route path="/usermange" component={UserManage}></Route>
                        <Route path="/foodfunction" component={FoodFunction}></Route>
                        <Route path="/foodadd" component={FoodAdd}></Route>
                        <Route path="/foodmanage" component={FoodManage}></Route>
                        <Route path="/helpfunction" component={HelpFunction}></Route>
                        <Route path="/helpadd" component={HelpAdd}></Route>
                        <Route path="/helpmanage" component={HelpManage}></Route>
                        <Route path="/orderfunction" component={OrderFunotionPage}></Route>
                        <Route path="/ordermanage" component={OrderManage}></Route>
                        <Route path="/goodxfunction" component={GoodxFunctionPage}></Route>
                        <Route path="/goodxadd" component={GoodxAddPage}></Route>
                        <Route path="/goodxmanage" component={GoodxManage}></Route>
                        <Route path="/secgoodsfunction" component={SecgoodsFunction}></Route>
                        <Route path="/secgoodsadd" component={SecgoodsAdd}></Route>
                        <Route path="/secgoodsmanage" component={SecgoodsManage}></Route>
                        <Route path="/userbackfunction" component={UserbackFunctionPage}></Route>
                        <Route path="/userbackmanage" component={UserbackManagePage}></Route>
                    </div>
                </BrowserRouter>
                
            </div>
        )
    }
}