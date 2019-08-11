import React from 'react';

export default class Count extends React.Component{
    static defaultProps={
        num:1
    }
    constructor(){
        super();
        this.state={
            num:0
        }
    }
    componentWillMount(){
        this.setState({
            num:this.props.num
        })
    }
    handleAdd(){
        let newNum=this.state.num+1;
        this.setState({
            num:newNum
        })
        this.props.getNum(newNum);
    }
    handleReduce(){
        let newNum=this.state.num-1;
        if(newNum>0){
            this.setState({
                num:newNum
            })
            this.props.getNum(newNum);
        }
        else{
            this.setState({
                num:1
            })
            this.props.getNum(1);
        }
        
    }
    render(){
        return(
            <div style={{float:"left"}}>
                <input type="text" value={this.state.num} style={{width:'40px',height:'50px', float:"left",textAlign:"center"}} readOnly></input>
                <div style={{float:"left"}}>
                     <div style={{margin:"0px"}}>
                         <button type="button" style={{width:"25px", height:"25px"}} onClick={this.handleAdd.bind(this)}> +</button>
                         </div>
                     <div style={{margin:"0px"}}><button type="button" style={{width:"25px", height:"25px"}} onClick={this.handleReduce.bind(this)}>-</button></div>
                </div>
            </div>
        )
    }
}