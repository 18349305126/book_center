import React from 'react';
import ReactDom from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ShoppingCar from './component/ShoppingCar';
// import Login from './component/Login';
import RouterIndex from './router/RouterIndex';


// let book0={
//     bookName:"c草",
//     author:"金老师",
//     price:"250.00",
//     imgData:{src:require('./assets/imgs/01.jpg'),alt:"图片无法显示",title:"我也不知道这是啥0"}
// }

// let book1={
//     bookName:"java",
//     author:"金老师",
//     price:"100.00",
//     imgData:{src:require('./assets/imgs/01.jpg'),alt:"图片无法显示",title:"我也不知道这是啥1"}
// }

// let book2={
//     bookName:"python",
//     author:"金老师",
//     price:"10.00",
//     imgData:{src:require('./assets/imgs/01.jpg'),alt:"图片无法显示",title:"我也不知道这是啥2"}
// }

// let bookList=new Array(book0,book1,book2);

// ReactDom.render(<BookList bookList={bookList}/>,document.getElementById('root'));


class Index extends React.Component{
    render(){
        return(
            <RouterIndex></RouterIndex>
        )
    }
}
ReactDom.render(<Index/>,document.getElementById('root'));

serviceWorker.unregister();
