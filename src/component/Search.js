import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Sublist from './SubList';
import jsonp from 'jsonp';

export default class Search extends React.Component{
    constructor(){
        super();
        this.state={
            text:'',
            listData:[],
            index:-1
        }
    }
    handleChange=(ev)=>{
        // console.log(ev.target.value);
        let url="https://www.baidu.com/su?wd="+ev.target.value;//可以看百度的接口，且该接口返回的数据类型是jsonp。
        jsonp(url,{//jsonp有三个参数,url,param,f，f是返回结果之后的执行函数，f中有两个参数err，data，第二个参数data是返回的结果，所以可以用data来做事情，第一个参数是异常
            param:'cb'//默认参数
        },(err,data)=>{
            console.log(data);//可以看返回的data格式，是一个jsonp，有属性q(查询),p,s等，其中s是查询结果数组
            this.setState({
                listData:data.s,
                index:-1
            })
        });
        this.setState({
            text:ev.target.value
        });
    }
    handleOnKeyDown=(ev)=>{
        // console.log(ev.keyCode);//得到上下键所对应的keycode，结果是下键为38，上键为40，也可以查表
        if(ev.keyCode===38 || ev.keyCode===40){//由于任何键盘输入都涉及到onKeyDown，所以改变文本这些操作都会触发这个函数，所以用if限定上下键的键值
            let nowIndex=this.state.index;
            switch (ev.keyCode){
                case 38:
                    --nowIndex;
                    break;
                case 40:
                    ++nowIndex;
                    break;
                default:
                break;
            }
            if(nowIndex<0)nowIndex=0;
            if(this.state.listData.length!==0)nowIndex=nowIndex % this.state.listData.length;
            this.setState({//注意this.setState()函数的异步问题
                index:nowIndex
            })
            this.refs.ipt.value=this.state.listData[nowIndex];
            this.setState({
                text:this.state.listData[nowIndex],
            })
        }
        else if(ev.keyCode===13){
            this.props.handleSearch.bind(this,this.state.text);
        }
    }
    
    render(){
        return(
            <div className="panel panel-default"  style={{width:'500px',margin:'20px auto 0px 20%',border:'0px',padding:'0px'}}> 
                <div className="panel-heading" style={{float:'left',margin:'0px'}}>
                    <input ref='ipt' onKeyDown={this.handleOnKeyDown} onChange={this.handleChange} type="text" className="form-control" style={{width:'400px',height:'30px'}}></input>
                </div>
                <div style={{margin:'0px',border:'0px',padding:'0px'}}>
                    <button type="button" class="btn btn-default btn-lg" style={{height:'50px',margin:'0px'}} onClick={this.props.handleSearch.bind(this,this.state.text)}>搜索</button>
                </div>
                <div className="panel-body" style={{margin:'0px',padding:'0px'}}>
                    <Sublist listData={this.state.listData} index={this.state.index}/>
                </div>
            </div>
        )
    }
}
// ReactDOM.render(<Search/>,document.getElementById('root'));