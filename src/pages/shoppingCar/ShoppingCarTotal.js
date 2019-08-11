import React from 'react';
import Search from '../../component/Search';
import ShoppingCar from '../../component/ShoppingCar';
import Count from '../../component/Count'
import '../../css/ShoppingCar.css';
import 'bootstrap/dist/css/bootstrap.css';



let book0 = {
    amount:1,
    total:250,
    bookNumber: 100,
    checked: "false",
    bookName: "c草",
    author: "金老师",
    price: "250.00",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥0" }
}

let book1 = {
    amount:1,
    total:100,
    checked: "false",
    bookNumber: 101,
    bookName: "java",
    author: "金老师",
    price: "100.00",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥1" }
}

let book2 = {
    amount:2,
    total:20,
    checked: "false",
    bookNumber: 102,
    bookName: "python",
    author: "金老师",
    price: "10.00",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥2" }
}

let book3 = {
    amount:1,
    total:15,
    checked: "false",
    bookNumber: 103,
    bookName: "sdddd",
    author: "金老师",
    price: "15.00",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥3" }
}

let book4 = {
    amount:1,
    total:20,
    checked: "false",
    bookNumber: 104,
    bookName: "gg",
    author: "金老师",
    price: "20.00",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥4" }
}

let book5 = {
    amount:1,
    total:20,
    checked: "false",
    bookNumber: 105,
    bookName: "gg",
    author: "金老师",
    price: "20.00",
    imgData: { src: require('../../assets/imgs/01.jpg'), alt: "图片无法显示", title: "我也不知道这是啥4" }
}

let bl = new Array(book0, book1, book2, book3, book4, book5);

//---------------------------------------------------------------------------------------------------------------------------------------------------
export default class ShoppingCarTotal extends React.Component {
    constructor() {
        super();
        this.state = {
            bookList: [],
            totalPrice:0
        }
    }
    componentWillMount() {//假定一个booklist，并且得到总金额
        let total=this.getTotalPrice(bl);
        this.setState({
            bookList: bl,
            totalPrice:total
        });
    }
    pushPage2(path, params) {
        this.props.history.push({
            pathname: path,
            search: params,
        });
    }
    pushPage(path) {
        this.props.history.push(path);
    }
    replacePage2(path, params) {
        this.props.history.replace({
            pathname: path,
            search: params,
        });//使用replace与push有区别，replace可以与返回goBack有关，这一个点不在goBack中
    }
    submitBtn() {

    }
    allChecked(e) {//全选键处理逻辑
        if (e.target.checked) {
            let aList = this.state.bookList;
            if (aList.length > 0) {
                for (let i = 0; i < aList.length; i++) {
                    aList[i].checked = true;
                }
                let total=this.getTotalPrice(aList);
                this.setState({ 
                    bookList: aList,
                    totalPrice:total
                });
            }
        } else {
            let aList = this.state.bookList;
            if (aList.length > 0) {
                for (let i = 0; i < aList.length; i++) {
                    aList[i].checked = false;
                }
                let total=this.getTotalPrice(aList);
                this.setState({
                    bookList: aList,
                    totalPrice:total
                });
            }
        }
    }
    handleChecked(e, index) {//单个选项的处理
        // console.log(index);
        //console.log(e.target.checked);
        let aList = this.state.bookList;
        aList[index].checked = e.target.checked;
        let total=this.getTotalPrice(aList);
        this.setState({  
            bookList: aList, 
            totalPrice:total
        });

    }
    getTotalPrice(bookList){//获得总金额的内部函数
        let total=0;
        for(let i=0;i<bookList.length;i++){
            if(bookList[i].checked)total=total+bookList[i].total;
        }
        return total;
    }
    getTotal(index,num){//每一项目的小计的计算
        let newBook=this.state.bookList[index];
        newBook.total=newBook.price*num;
        let newBookList=this.state.bookList;
        newBookList[index]=newBook;
        // let total=0;
        // for(let i=0;i<this.state.bookList.length;i++){
        //     if(this.state.bookList[i].checked)total=total+this.state.bookList[i].total;
        // }
        let total=this.getTotalPrice(newBookList);
        this.setState({
            bookList:newBookList,
            totalPrice:total
        })
    }
    handleDelete(index){//删除一个购物项
        let newBookList=this.state.bookList;
        newBookList.splice(index,1);
        let total=this.getTotalPrice(newBookList);
        this.setState({
            bookList:newBookList,
            totalPrice:total
        })
    }
    // handleOnClickPage(page){//前面的导航面板的网页
    //     let pageName="?page="+page;
    //     this.setState({
    //         page:page
    //     })
    //     this.props.history.pushPage2('./',pageName);
    // }
    render() {
        return (

            <body>
                {/* <div class="header">
                    <div className="logo" >
                        <img src={require('../../assets/imgs/01.jpg')} alt="图片无法显示" title="logo" style={{ width: '80px', height: '80px' }}></img>
                    </div>
                    <div style={{ marginLeft: '0px' }}>
                        <Search />
                    </div>
                </div> */}
                <div className="topnav">
                    <div className="font">野生图书馆</div>
                    <a onClick={this.pushPage2.bind(this, '/','?page=main')}>首页</a>
                    <a onClick={this.pushPage2.bind(this, '/','?page=new')}>新书</a>
                    <a onClick={this.pushPage2.bind(this, '/','?page=hot')}>热销</a>
                    <a onClick={this.pushPage2.bind(this, '/index')}>登录</a>
                    <a href="#">注册</a>
                    <div style={{ marginLeft: '70%' }}><ShoppingCar /></div>
                </div>
                <div style={{ marginLeft: "15%", marginTop: "50px" }}>
                    <div style={{ float: 'left' }}>
                        <img src={require('../../assets/imgs/01.jpg')} alt="图片无法显示" title="logo" style={{ width: '80px', height: '80px' }}></img>
                    </div>
                    <div style={{ paddingTop: "30px", fontSize: "20px" }}>购物车</div>
                </div>
                <div>
                    <div style={{ marginTop: "50px", marginLeft: "15%" ,marginRight:"16%"}}>
                        <div className="cart-thead"> 
                            <div className="t-column">
                                <input type="checkbox" onClick={this.allChecked.bind(this)} />全选
                            </div>
                            <div className="t-column t-goods">商品</div>
                            <div className="t-column t-props"></div>
                            <div className="t-column t-price">单价</div>
                            <div className="t-column t-quantity">数量</div>
                            <div className="t-column t-sum">小计</div>
                            <div className="t-column t-action">操作</div>
                        </div>
                        <ul>
                            {this.state.bookList.map((item, index) => {
                                return (
                                    <div key={index} class="  item-last  item-item " >
                                    <div className="item-form ">
                                        <div className="cell p-checkbox ">
                                            <div className="cart-checkbox">
                                                <input type="checkbox"  checked={item.checked ? 'checked' : ''} onClick={(e) => { this.handleChecked(e, index) }} />
                                                {/* <span className="line-circle"></span> */}
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <img src={item.imgData.src} alt={item.imgData.alt} title={item.imgData.title} style={{ width: "80px", height: "80px" }}/>
                                            <span className="p-name">{item.bookName}</span>
                                            <span className="price">${item.price}</span>
                                            <span className="amount"><Count num={item.amount} getNum={this.getTotal.bind(this,index)}/></span>
                                            <span className="total">${item.total}</span>
                                            <span className="action"><a onClick={this.handleDelete.bind(this,index)}>删除</a></span>
                                        </div>
                                      
                                    </div>
                                    </div>
                                )
                            })}
                        </ul>
                        <div className="total-price">
                            <div>总价:${this.state.totalPrice}</div>
                        </div>
                        <div className="submit">
                            <button type="button" className="btn btn-default" onClick={this.submitBtn.bind(this)}>提交订单</button>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}