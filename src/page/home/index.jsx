import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import './index.css'

export default class Home extends React.Component{
	render(){
		return(
			<div id="page-wrapper">
				<PageTitle title='首页'/>
				<div className="row">内容</div>
			</div>
			
		);
	}
}
