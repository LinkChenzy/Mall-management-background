import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

import productList from 'page/product/index/index.jsx';


class ProductRouter extends React.Component{
	render (){
		return(
			<Switch>
				<Route path="/product" component={productList} />
				<Redirect exact from="/product/index" to='/product' />
			</Switch>
		);
	}
}
export default ProductRouter;