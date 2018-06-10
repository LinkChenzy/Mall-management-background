import React        from 'react';
// 通用列表
class TableList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isFirstLoading:true
        }
    }
    componentWillReceviceProps(){
        // 列表只有在第一次加载的时候为true
        this.setState({
            isFirstLoading:false
        });
    }
    render(){
        // 头部信息
        let tableHeader = this.props.TableHeaders.map(
                (tableHeader,index)=>{
                    if(typeof tableHeader === 'object'){
                        return <th key={index} width={tableHeader.width}>{tableHeader.name}</th>
                    }else if(typeof tableHeader ==='string'){
                        return <th key={index}>{tableHeader}</th>
                    }
            });
        // 列表信息
        let listBody = this.props.children;
        // 列表加载信息选择
        let listError = (
            <tr>
                <td colSpan={this.props.TableHeaders.length} className='text-center'>{this.state.isFirstLoading ? '正在加载数据。。。' : '没有找到相应的结果'}</td>
            </tr>
        );
        let tableBody = listBody.length > 0 ? listBody : listError;
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                {tableHeader}
                            </tr>
                        </thead>
                        <tbody>
                            {tableBody}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TableList;