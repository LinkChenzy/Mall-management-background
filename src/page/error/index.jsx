/*
* @Author: LinkChenzy
* @Date:   2018-06-09 22:14:27
* @Last Modified by:   LinkChenzy
* @Last Modified time: 2018-06-09 22:14:27
*/
import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.min.css'

export default class ErrorPage extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id="page-wrapper">
				<PageTitle title='出错了！'/>
					<Row>
						<Col span={24}>
							<p>出现错误页面了</p>
							<Link to='/'>点击我返回首页</Link>
						</Col>
					</Row>
			</div>
		);
	}
}
