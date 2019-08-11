import React from 'react';
import BookList from '../../component/BookList';
import Search from '../../component/Search';
import ShoppingCar from '../../component/ShoppingCar';
import '../../css/BookCenterPage.css';
import {HashRouter as Router,Route,Switch,Link} from 'react-router-dom';
import {localParam} from '../../common/function';

//BookList的实例-------------------------------------------------------------------------------------------
let book0 = {
    bookNumber:100,
    bookName: "c草",
    author: "金老师",
    price: "250.00",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥0" }
}

let book1 = {
    bookNumber:101,
    bookName: "java",
    author: "金老师",
    price: "100.00",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥1" }
}

let book2 = {
    bookNumber:102,
    bookName: "python",
    author: "金老师",
    price: "10.00",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥2" }
}

let book3 = {
    bookNumber:103,
    bookName: "sdddd",
    author: "金老师",
    price: "15.00",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥3" }
}

let book4 = {
    bookNumber:104,
    bookName: "gg",
    author: "金老师",
    price: "20.00",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥4" }
}

let book5 = {
    bookNumber:105,
    bookName: "gg",
    author: "金老师",
    price: "20.00",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥4" }
}

let bookList = new Array(book0, book1, book2,book3,book4,book5);
//---------------------------------------------------------------------------------------------------
export default class BookCenterPage extends React.Component {
    constructor(){//page是筛选种类，有首页(main)，新书(new)，热销(hot)
        super();
        this.state={
            search:'',
            page:'main',
        }
    }
    componentWillMount(){//接受从其他页面传来的page值
        let query=localParam(this.props.location.search);
        console.log(query.search.page)
        this.setState({
            page:query.search.page
        })
    }
    pushPage2(path,params){
        this.props.history.push({
            pathname:path,
            search:params,
        });
    }
    pushPage(path){
        this.props.history.push(path);
    }
    replacehPage(path){
        this.props.history.replace(path);
    }
    replacePage2(path,params){
        this.props.history.replace({
            pathname:path,
            search:params,
        });//使用replace与push有区别，replace可以与返回goBack有关，这一个点不在goBack中
    }
    handleOnClickCheck(item){//处理bookitem的查看详情,必须要通过父组件来处理
        let search='?bookNumber='+String(item.bookNumber);
        this.pushPage2('/details',search);
    }
    handleOnClickPage(page){//处理点击首页，热销....
        let pageName="?page="+page;
        this.setState({
            page:page
        })
        this.pushPage2('./',pageName);
    }
    handleSearch(text){//处理搜索栏的搜索以及回车键
        this.setState({
            search:text
        })
        let searchName="?search="+text;
        this.replacePage2('/',searchName);
        // alert(text);//检测效果
    }
    render() {
        return (
            <body>
                <div class="header">
                    <div style={{float:'left',margin:'10px 10px'}}>
                        <img src={require('../../assets/imgs/01.jpg')}  alt="图片无法显示" title= "logo" style={{width:'80px',height:'80px'}}></img>
                    </div>
                    <div style={{marginLeft:'0px'}}>
                        <Search handleSearch={this.handleSearch.bind(this)}/>
                    </div>
                    
                </div>
                <div className="topnav">
                    <div className="font">野生图书馆</div>
                    <a onClick={this.handleOnClickPage.bind(this,"main")}>首页</a>
                    <a onClick={this.handleOnClickPage.bind(this,"new")}>新书</a>
                    <a onClick={this.handleOnClickPage.bind(this,"hot",'?page=hot')}>热销</a>
                    <a onClick={this.pushPage.bind(this,'/index')}>登录</a>
                    <a href="#">注册</a>
                    <div style={{marginLeft:'70%'}} onClick={this.pushPage.bind(this,'/shoppingcar')}><ShoppingCar/></div>
                </div>

                <div class="row">
                    <div class="column side">
                    </div>
                    <div class="column middle">
                        <div style={{padding:'14px 16px',fontSize:'24px'}}>搜索结果</div>
                        <div style={{marginLeft:'2%'}}>
                            {/* <switch>
                                <Route path="/" component={BookList}></Route>
                            </switch> */}
                            <BookList bookList={bookList} handleOnClickCheck={this.handleOnClickCheck.bind(this)}/>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}