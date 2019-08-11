import React from 'react';
import Login from '../../component/Login';

export default class IndexPage extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }
    getChildrenVal(usr,pwd){
        this.setState({
            username:usr,
            password:pwd
        })
    }
    checkIfLogin(){
        return true;
    }
    render(){
        return(
            <div>
                <Login sendVal={this.getChildrenVal.bind(this)} />
            </div>
        )
    }
}