/*
* @Author: LinkChenzy
* @Date:   2018-06-09 22:36:54
* @Last Modified by:   LinkChenzy
* @Last Modified time: 2018-06-09 22:36:54
*/
import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Table, Icon, Divider } from 'antd';
import { Link } from 'react-router-dom';
import Select from 'rc-select';
import Pagination from 'rc-pagination';
import Mutil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

import 'rc-pagination/assets/index.css';
import 'rc-select/assets/index.css';

import 'antd/dist/antd.min.css'

const _mm = new Mutil();
const _user = new User();

export default class UserList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			pageNum:1,
			list:[],
			firstLoading:true
		}
	}
	componentDidMount(){
		this.loadUserList();
	}
	loadUserList(){
		_user.getUserList(this.state.pageNum).then(res => {
			this.setState(res,()=>{
				this.setState({
					firstLoading:false
				})
			});
		},errMsg =>{
			this.setState=({
				list:[]
			});
			_mm.errorTips(errMsg);
		});
	}
	// 页面发生变化
	onPageNumChange(pageNum){
		// 异步函数
		this.setState({
			pageNum:pageNum
		},()=>{ //执行完成后
			this.loadUserList()
		});
	}
	render(){
		// 正常数据加载
		let listBody = this.state.list.map((user,index)=>{
							return (
								<tr key={index}>
									<td>{user.id}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>{new Date(user.createTime).toLocaleString()}</td>
								</tr>
							);
						});
		// 数据加载错误
		let listError = (
			<tr>
				<td colSpan='5' className='text-center'>{this.state.firstLoading ? '正在加载数据。。。' : '没有找到相应的结果'}</td>
			</tr>
		);
		let tableBody = this.state.list.length > 0 ? listBody : listError;
		return(
			<div id="page-wrapper">
				<PageTitle title='用户列表'/>
				<div className="row">
					<div className="col-md-12">
						<table className="table table-striped table-bordered">
							<thead>
								<tr>
									<td>ID</td>
									<td>用户名</td>
									<td>邮件</td>
									<td>手机</td>
									<td>创建时间</td>
								</tr>
							</thead>
							<tbody>
								{tableBody}
							</tbody>
						</table>
					</div>
				</div>
				<Pagination
				    selectComponentClass={Select}
				    showQuickJumper
				    showSizeChange
				    defaultCurrent={this.state.pageNum}
				    total={this.state.total}
				    onChange={(pageNum) => this.onPageNumChange(pageNum)} />
			</div>
		);
	}
}