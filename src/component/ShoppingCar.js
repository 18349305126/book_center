import React from 'react';

export default class ShoppingCar extends React.Component{
    constructor(){
        super();
        this.state={
            booksNum:0
        }
    }
    render(){
        return(
            <a>
                <div style={{float:'left'}}>
                    <img src={require('../assets/imgs/shopping_car.jpg')} style={{width:'18px',height:'18px'}}></img>
                </div >
                <div style={{float:'left',color:'rgb(0,0,0)',marginTop:'3px'}}>{this.state.booksNum}</div>
            </a>
        )
    }
}