import React from 'react';
import {HashRouter as Router,Route,Switch,Link} from 'react-router-dom';
// import App from '../App';
// import NewsIndex from '../pages/news/NewsIndex';
// import NewsDetails from '../pages/news/NewsDetails';
import IndexPage from '../pages/index/IndexPage';
import BookCenterPage from '../pages/bookCenter/BookCenterPage';
import BookDetailPage from '../pages/bookDetail/BookDetaliPage';
import ShoppingcarTotal from '../pages/shoppingCar/ShoppingCarTotal';

export default class RouterIndex extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Switch>
                            {/* exact表示的是完全匹配而不是最短匹配，很重要 */}
                            <Route exact path="/" component={BookCenterPage}></Route>
                            <Route exact path="/index" component={IndexPage}></Route>

                            <Route path="/details" component={BookDetailPage}></Route>
                            <Route path="/shoppingcar" component={ShoppingcarTotal}></Route>
                        </Switch>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}