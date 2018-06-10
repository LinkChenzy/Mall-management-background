/*
* @Author: LinkChenzy
* @Date:   2018-06-09 22:36:54
* @Last Modified by:   LinkChenzy
* @Last Modified time: 2018-06-09 22:36:54
*/
import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';
import Pagination from 'util/pagination/index.jsx';
import TableList from 'util/table-list/index.jsx';
import Mutil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

const _mm = new Mutil();
const _user = new User();

export default class UserList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			pageNum:1,
			list:[]
		}
	}
	componentDidMount(){
		this.loadUserList();
	}
	loadUserList(){
		_user.getUserList(this.state.pageNum).then(res => {
			this.setState(res);
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
		return(
			<div id="page-wrapper">
				<PageTitle title='用户列表'/>
				<TableList TableHeaders={['ID','用户名','邮箱','手机','创建时间']}>
					{
						this.state.list.map((user,index)=>{
							return (
								<tr key={index}>
									<td>{user.id}</td>
									<td>{user.username}</td>
									<td>{user.email}</td>
									<td>{user.phone}</td>
									<td>{new Date(user.createTime).toLocaleString()}</td>
								</tr>
							);
						})
					}
				</TableList>
				<Pagination
				    defaultCurrent={this.state.pageNum}
				    total={this.state.total}
				    onChange={(pageNum) => this.onPageNumChange(pageNum)} />
			</div>
		);
	}
}