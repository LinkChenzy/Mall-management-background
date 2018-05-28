import React from 'react';
import PageTitle from 'component/page-title/index.jsx';
import Mutil from 'util/mm.jsx';
import User from 'service/user-service.jsx';

const _mm = new Mutil();
const _user = new User();

import './index.scss';

class Login extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	username:'',
	  	password:''
	  };
	}
	componentWillMount(){
        document.title = 'login - 商城后台管理';
    }
	// 用户输入信息
	onInputChange(e){
		let inputValue = e.target.value,
		    inputName = e.target.name;
		this.setState({
			[inputName]:inputValue
		});
	}
	// 用户提交登录
	onSubmit(){
		_user.login({
			username:this.state.username,
			password:this.state.password
		}).then((res)=>{

		},(err)=>{

		});
	}
	render (){
		return(
			<div>
				<div className="col-md-4 col-md-offset-4 login-header">
					<div className="panel panel-default">
						<div className="panel-heading">Login</div>
						<div className="panel-body">
							<div>
								<div className="form-group">
									<label htmlFor="exampleInputEmail1">User</label>
									<input 
										type="text" 
										name="username"
										className="form-control" 
										placeholder="username"
										onChange={e => this.onInputChange(e)} />
								</div>
								<div className="form-group">
									<label htmlFor="exampleInputPassword1">Password</label>
									<input 
										type="password" 
										name="password"
										className="form-control" 
										placeholder="Password" 
										onChange={e => this.onInputChange(e)}/>
								</div>
								<div className="form-group">
									<div className="col-sm-12">
										<div className="checkbox">
											<label>
											<input type="checkbox" /> Remember me
											</label>
										</div>
									</div>	
								</div>
								<button
									className="btn btn-primary btn-block"
									onClick={e=>{this.onSubmit(e)}}>Login</button>
							</div>
						</div>
					</div>
				</div>
			</div>	
		);
	}
}
export default Login;