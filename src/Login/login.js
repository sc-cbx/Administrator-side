import React from 'react'
import { Button, Input } from 'antd'
import { Link } from 'react-router-dom'
var LoginPageCSS = require('./login.css')

export default class LoginPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
    changeValue = e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    login = e=>{
        if(this.state.username=='sc-cbx'&&this.state.password=='wsx54'){
    alert('登录成功');
    window.localStorage.setItem("username","肖露" );
    window.localStorage.setItem("token","111");
    this.props.history.push('/homepage/first')
        }
        else if(this.state.username=='hl'&&this.state.password=='20182606'){
            alert('登录成功');
            window.localStorage.setItem("username","黄莉" );
            window.localStorage.setItem("token","111");
            this.props.history.push('/homepage/first')
        }
       else{
            alert('登录失败')
        }
        console.log(window.localStorage.getItem("username"))
        // console.log(this.state.username)
        // console.log()
        // window.localStorage.setItem()
        
    
    }
    
    render() {
        return (
      
                
                <div className={LoginPageCSS.login}>
                <div className={LoginPageCSS.content}>
                    <div className={LoginPageCSS.welcome}>
                        欢迎登录
                    </div>
                    <div className={LoginPageCSS.login1}>
                        <div className={LoginPageCSS.name}>
                            用户名:<br></br>
                            <Input type="text" placeholder="请输入学号" name="username" id="username" value={this.state.username} onChange={this.changeValue}/>
                        </div>
                        <div className={LoginPageCSS.password}>
                            密  码:<br></br>
                            <Input.Password placeholder="请输入密码" type="password" name="password" id="password" value={this.state.password} onChange={this.changeValue} />
                        </div>
                    </div>
                    <div className={LoginPageCSS.land}>
                        <Link to="/backstage/userstatistics" onClick={this.login}><Button>登录</Button></Link>
                    </div>
                </div>
            </div>

    
        );
    }
}