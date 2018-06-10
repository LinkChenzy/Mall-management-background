import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Mutil from 'util/mm.jsx';
import Statistic from 'service/statistic-service.jsx';

const _mm = new Mutil();
const _statistic = new Statistic();

import 'antd/dist/antd.min.css'
import './index.scss'

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userCount:'-',
			productCount:'-',
			orderCount:'-'
		}
	}
	componentDidMount(){
		this.loadCount();
	}
	loadCount(){
		_statistic.getHomeCount().then(res =>{
			this.setState(res);
		},errMsg =>{
			_mm.errTips(errMsg);
		});
	}
	render(){
		return(
			<div id="page-wrapper">
				<PageTitle title='首页'/>
				<div className="gutter-example">
				    <Row gutter={40}>
				      <Col className="gutter-row" span={8}>
				        <Link to='/user' className="gutter-box green">
							<p className="count">{this.state.userCount}</p>
							<p className="desc">
								<i className="fa fa-user"></i>
								<span>用户总数</span>
							</p>
				        </Link>
				      </Col>
				      <Col className="gutter-row" span={8}>
				        <Link to='/product' className="gutter-box yellow">
							<p className="count">{this.state.productCount}</p>
							<p className="desc">
								<i className="fa fa-list"></i>
								<span>商品总数</span>
							</p>
				        </Link>
				      </Col>
				      <Col className="gutter-row" span={8}>
				        <Link to='/order' className="gutter-box red">
							<p className="count">{this.state.orderCount}</p>
							<p className="desc">
								<i className="fa fa-check-square-o"></i>
								<span>订单总数</span>
							</p>
				        </Link>
				      </Col>
				    </Row>
				</div>
			</div>
			
		);
	}
}
