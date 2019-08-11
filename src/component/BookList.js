import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import BookItem from './BookItem'


export default class BookList extends React.Component{
    render(){
        return(
            <div>
                {this.props.bookList.map((item,index,arr)=>{
                    return(
                        <div><BookItem book={arr[index]}  sendVal={this.props.handleOnClickCheck.bind(this,item)}/></div>
                    )
                })}
            </div>
        )
    }
}