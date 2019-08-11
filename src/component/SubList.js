import React from 'react';

export default class SubList extends React.Component{
    render(){
        return(
            <ul className="list-group" style={{position:'absolute',padding:'0px',zIndex:1}}> 
                {this.props.listData.map((item,index,arr)=>{//列表的map()函数的参数是一个函数，默认有三个形参，item,index,arr，map()函数返回列表中每一个元素经过参数函数的处理后的列表
                    if(index===this.props.index){
                        return <li key={index} className="list-group-item active">{item}</li>//一般来说每一个<li>标签中都要有一个唯一值key
                    }
                    else{
                        return <li key={index} className="list-group-item">{item}</li>
                    }
                })}
            </ul>
        )
    }
}