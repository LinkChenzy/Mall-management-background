import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import { Link } from 'react-router-dom';
import Pagination from 'util/pagination/index.jsx';
import TableList from 'util/table-list/index.jsx';
import ListSearch from './index-list-search.jsx';
import Mutil from 'util/mm.jsx';
import Product from 'service/product-service.jsx';

import './index.scss'
const _mm = new Mutil();
const _product = new Product();

export default class ProductList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			pageNum:1,
			list:[],
			listType:'list'
		}
	}
	componentDidMount(){
		this.loadProductList();
	}
	loadProductList(){
		let listParam = {};
		listParam.listType = this.state.listType;
		listParam.pageNum  = this.state.pageNum;
		// 如果是搜索的话，需要传入搜索类型和搜索关键字
		if(this.state.listType === 'search'){
			listParam.searchType = this.state.searchType;
			listParam.keyword    = this.state.searchKeyword;
		} 
		_product.getProductList(listParam).then(res => {
			this.setState(res);
		},errMsg =>{
			this.setState({
				list:[]
			});
			_mm.errorTips(errMsg);
		});
	}
	onSearch(searchType,searchKeyword){
		let listType = searchKeyword === '' ? 'list' : 'search';
		this.setState({
			listType     :listType,
			pageNum      :1,
			searchType   :searchType,
			searchKeyword:searchKeyword
		},()=>{
			this.loadProductList();
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
	onSetProductStatus(e,productId,currentStatus){
		let newStatus = currentStatus == 1 ? 2 : 1,
			confirmTips = currentStatus == 1 ? '确定要下架该商品？' : '确定要上架该商品？';
			if(window.confirm(confirmTips)){
				_product.SetProductStatus({
					productId:productId,
					status:newStatus
				}).then(res=>{
					_mm.successTips(res);
					this.loadProductList();
				},errMsg=>{
					_mm.errorTips(errMsg);
				})
			}
	}
	render(){
		let tabelHeaders = [
			{name:'商品ID',width:'10%'},
			{name:'商品信息',width:'50%'},
			{name:'价格',width:'10%'},
			{name:'状态',width:'15%'},
			{name:'操作',width:'15%'}
		];
		return(
			<div id="page-wrapper">
				<PageTitle title='商品列表'/>
				<ListSearch onSearch={(searchType,searchKeyword)=>{this.onSearch(searchType,searchKeyword)}}/>
				<TableList TableHeaders={tabelHeaders}>
					{
						this.state.list.map((product,index)=>{
							return (
								<tr key={index}>
									<td>{product.id}</td>
									<td>
										<span>{product.name}</span>
										<span>{product.subtitle}</span>
									</td>
									<td>￥{product.price}</td>
									<td>
										<span>{product.status == 1 ? '在售' : '下架'}</span>
										<button className='btn btn-xs btn-warning shopping-status'
											onClick={(e)=>{this.onSetProductStatus(e,product.id,product.status)}}>
											{product.status == 1 ? '下架' : '上架'}
										</button>
									</td>
									<td>
										<Link to={`/product/detail/${product.id}`}>查看</Link>
										<span>|</span>
										<Link to={`/product/save/${product.id}`}>编辑</Link>
									</td>
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