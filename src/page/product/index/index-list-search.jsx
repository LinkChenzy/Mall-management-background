import React from 'react';
class ListSearch extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			searchType:'productId',
			searchKeyword:''
		}
	}
	// 数据变化的时候
	onValueChange(e){
		let name = e.target.name,//获取表单的name值
				value = e.target.value.trim();//trim()函数去除字符串两边的空白
		this.setState({
			[name]:value //name是变量
		})
	}
	onSearch(){
		this.props.onSearch(this.state.searchType,this.state.searchKeyword);
	}
	// 优化体验 enter键直接出发搜索按钮
	onSearchKeywordKeyUp(e){
		if(e.keyCode === 13){
			this.onSearch();
		}
	}
	render (){
		return(
			<div className="form-inline search-form">
			  <div className="form-group">
				<select className="form-control"
					name='searchType'
					onChange={(e)=>this.onValueChange(e)}
				>
					<option value='productId'>按商品ID查找</option>
					<option value='productName '>按商品名称查找</option>
				</select>
			  </div>
			  <div className="form-group">
			    <input type="text" className="form-control" placeholder="关键字" 
			    	name='searchKeyword'
			    	onKeyUp={(e)=>{this.onSearchKeywordKeyUp(e)}}
					  onChange={(e)=>this.onValueChange(e)}
			    />
			  </div>
			  <button type="submit" className="btn btn-primary" onClick={(e)=>{this.onSearch(e)}}>搜索</button>
			</div>
		);
	}
}
export default ListSearch;