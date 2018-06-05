import Mutil from 'util/mm.jsx';

const _mm = new Mutil();

class User{
	login(loginInfo){
		return _mm.request({
					type:'post',
					url:'/manage/user/login.do',
					data:loginInfo
			   });
	}
	// 检查登录接口是数据是否合法
	checkLoginInfo(loginInfo){
		let username = $.trim(loginInfo.username),
			password = $.trim(loginInfo.password);
		// 验证用户名
		if(typeof username !== 'string' || username.length === 0){
			return {
				status:false,
				msg:'用户名不能为空！'
			}
		}
		// 验证密码
		if(typeof password !== 'string' || password.length === 0){
			return {
				status:false,
				msg:'密码不能为空！'
			}
		}
		return {
			status:true,
			msg:'验证通过！'
		}

	}
	logout(){
		return _mm.request({
					type:'post',
					url:'/user/logout.do'
			   });
	}
}
export default User;