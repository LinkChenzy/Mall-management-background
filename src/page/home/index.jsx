import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Table,  Row, Col } from 'antd';
import 'antd/dist/antd.min.css'
import './index.scss'

export default class Home extends React.Component{
	render(){
			
		return(
			<div id="page-wrapper">
				<PageTitle title='首页'/>
				<div className="gutter-example">
				    <Row gutter={16}>
				      <Col className="gutter-row" span={6}>
				        <div className="gutter-box">col-6</div>
				      </Col>
				      <Col className="gutter-row" span={6}>
				        <div className="gutter-box">col-6</div>
				      </Col>
				      <Col className="gutter-row" span={6}>
				        <div className="gutter-box">col-6</div>
				      </Col>
				    </Row>
				</div>
			</div>
			
		);
	}
}
