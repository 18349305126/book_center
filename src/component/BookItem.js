import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/BookItem.css';

// export default class BookItem extends React.Component{//第一种使用方式，接受多个参数
//     constructor(){
//         super();
//     }
//     render(){
//         return(
//             // <div class="row">
//                 <div class="col-sm-3 col-md-2">
//                     <div class="thumbnail">
//                         <img src={this.props.img.src} alt={this.props.img.alt} title={this.props.img.title}/>
//                         <div class="caption">
//                             <p style={{wordWrap:"break-word",fontSize:"20px",fontStyle:"italic",color:"red"}}>${this.props.price}</p>
//                             <p style={{wordWrap:"break-word", fontSize:"18px"}}>{this.props.bookName}</p>
//                             <p style={{wordWrap:"break-word",fontSize:"16px"}}>作者：{this.props.author}</p>
//                             <p><a href="#" class="btn btn-primary" role="button">购买</a> <a href="#" class="btn btn-primary" role="button">查看详情</a></p>
//                         </div>
//                     </div>
//                 </div>
//             // </div>
//         )
//     }
// }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
export default class BookItem extends React.Component{//第一种使用方式，接受多个参数
    constructor(){
        super();
    }
    
    handleOnClickBuy(){
        
    }
    
    render(){
        return(
            // <div class="row">
                <a  className='col-sm-1.5 col-md-3'>
                    <div className="thumbnail" ref='item'>
                        <img src={this.props.book.imgData.src} alt={this.props.book.imgData.alt} title={this.props.book.imgData.title}/>
                        <div class="caption">
                            <p style={{wordWrap:"break-word",fontSize:"20px",fontStyle:"italic",color:"red"}}>${this.props.book.price}</p>
                            <p style={{wordWrap:"break-word", fontSize:"18px"}}>{this.props.book.bookName}</p>
                            <p style={{wordWrap:"break-word",fontSize:"16px"}}>作者：{this.props.book.author}</p>
                            <p>
                                <a class="btn btn-primary" role="button" onClick={this.handleOnClickBuy.bind(this,'/details')}>加入购物车</a> 
                                <a class="btn btn-primary" role="button" onClick={this.props.sendVal.bind(this)}>查看详情</a>
                            </p>
                        </div>
                    </div>
                </a>
            // </div>
        )
    }
}