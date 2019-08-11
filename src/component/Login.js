import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }
    handlePwdChange=(ev)=>{
        this.setState({
            password:ev.target.value
        })
    }
    handleUsrChange=(ev)=>{
        this.setState({
            username:ev.target.value
        })
    }
    render(){
        return(
            <div>
                <form style={{width:'300px'}}>
                    <div class="input-group has-error" style={{margin:"2% 2% auto"}}>
                        <span class="input-group-addon" id="basic-addon1">账户</span>
                        <input name="username" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1" onChange={this.handleUsrChange}/>
                    </div>
                    <div class="input-group has-error" style={{margin:"auto 2% "}}>
                        <span class="input-group-addon" id="basic-addon1">密码</span>
                        <input name="password" type="password" class="form-control" placeholder="password" aria-describedby="basic-addon1" onChange={this.handlePwdChange}/>
                    </div>
                    <div style={{margin:"auto 2% "}}>
                        {/* <button type="submit" className="btn btn-default" formMethod="post">登录</button>
                        <button type="submit" className="btn btn-default">注册</button> */}
                        <button type="button" className="btn btn-default" onClick={this.props.sendVal.bind(this,this.state.username,this.state.password)}>登录</button>
                        <button type="button" className="btn btn-default">注册</button>
                    </div>
                </form>
            </div>
        )
    }
}

