/*
 * @Author: chenzhiyuan
 * @Date:   2018-05-24 23:38:44
 * @Last Modified by:   chenzhiyuan
 * @Last Modified time: 2018-05-25 00:35:14
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

// 组件
import Layout from 'component/layout/index.jsx';
// 页面
import Home from 'page/home/index.jsx';
import UserList from 'page/user/index.jsx';
import ProductRouter from 'page/product/router.jsx';
import Login from 'page/login/index.jsx';
import ErrorPage from 'page/error/index.jsx';

class App extends React.Component{
	render (){
		let LayoutRouter = (
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/product" component={ProductRouter} />
					<Route path="/product-category" component={ProductRouter} />  
					<Route path="/user/index" component={UserList} />
					<Redirect exact from="/user" to='/user/index' />
					<Route component={ErrorPage} />
				</Switch>
			</Layout>
		);
		return(
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" render={ props => LayoutRouter} />
				</Switch>
			</Router>
		);
	}
}
ReactDOM.render(
	<App />,
	document.getElementById('app')
);