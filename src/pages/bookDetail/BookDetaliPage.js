import React from 'react';
import {localParam} from '../../common/function';
import ShoppingCar from '../../component/ShoppingCar';
import Search from '../../component/Search';
import Count from '../../component/Count';
import 'bootstrap/dist/css/bootstrap.css';

let book0 = {
    bookNumber:100,
    bookName: "c草",
    author: "金老师",
    price: "250.00",
    detail:"金老师牛逼金老师牛逼金老师牛逼金老师牛逼金老师牛逼金老师牛逼金老师牛逼金老师牛逼金老师牛逼金老师牛逼金老师牛逼金老师牛逼金老师牛逼金老师牛逼",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥0" }
}

export default class bookDetailPage extends React.Component{
    constructor(){
        super();
        this.state={
            bookNum:0,
            book:{}
        }
    }
    pushPage2(path,params){//网址只取决于pathname和search，就算注释了query也可以转到/news/details?id=3&title=新闻3
        this.props.history.push({
            pathname:path,
            search:params,
        });
    }
    pushPage(path){
        this.props.history.push(path);
    }
    componentWillMount(){//处理网址传入的参数
        let query=localParam(this.props.location.search);
        this.setState({
            bookNum:query.search.bookNumber,
            book:book0
        })
    }
    handleBuy(){

    }
    render(){
        return( 
            <body>
                <div class="header">
                    <div style={{float:'left',margin:'10px 10px'}}>
                        <img src={require('../../assets/imgs/01.jpg')}  alt="图片无法显示" title= "logo" style={{width:'80px',height:'80px'}}></img>
                    </div>
                    <div style={{marginLeft:'0px'}}>
                        <Search />
                    </div>
                    
                </div>
                <div className="topnav">
                    <div className="font">野生图书馆</div>
                    <a onClick={this.pushPage2.bind(this,'/','?page=main')}>首页</a>
                    <a onClick={this.pushPage2.bind(this,'/','?page=new')}>新书</a>
                    <a onClick={this.pushPage2.bind(this,'/','?page=hot')}>热销</a>
                    <a onClick={this.pushPage.bind(this,'/index')}>登录</a>
                    <a href="#">注册</a>
                    <div style={{marginLeft:'70%'}}><ShoppingCar/></div>
                </div>
                <div style={{width:"30%",float:"left",marginLeft:"10%"}}>
                    <img src={this.state.book.imgData.src} alt={this.state.book.imgData.alt} title={this.state.book.imgData.title} style={{width:"90%"}}></img>
                </div>
                <div style={{marginTop:"5%",marginRight:"10%"}}>
                    <p style={{wordWrap:"break-word",fontSize:"26px"}}>书名：{this.state.book.bookName}</p>
                    <p style={{wordWrap:"break-word",fontSize:"26px"}}>作者：{this.state.book.author}</p>
                    <p style={{wordWrap:"break-word",fontSize:"26px"}}>价格：${this.state.book.price}</p>
                    <p style={{wordWrap:"break-word",fontSize:"26px"}}>详情介绍：{this.state.book.detail}</p>
                    <div>
                        <Count/>
                         <div style={{marginLeft:"50%"}} >
                             <button class="btn btn-primary" type="button" style={{width:"150px",height:"50px",fontSize:"18px"}} onClick={this.handleBuy}>加入购物车</button>
                        </div>
                    </div> 
                   
                </div>
            </body> 
        )
    }
}