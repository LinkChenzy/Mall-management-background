class MUtil{
	request(param){
		return new Promise((resolve,reject)=>{
			$.ajax({
				type	:param.type || 'get',
				url		:param.url  || '',
				dataType:param.dataType||'json',
				data 	:param.data ||null,
				success(res){
					if(0 === res.status){
						// 请求成功，判断是否为函数才去执行
						typeof resolve === 'function' && resolve(res.data,res.msg);
					// 10代表未登录 没有登录状态，强制登录
					}else if(10 === res.status){
						this.doLogin();
					}else{
						// 请求错误
						typeof reject === 'function' && reject(res.msg || res.data);
					}
				},
				error(err){
					typeof reject === 'function' && reject(err.statusText);
				}
			});
		});
	}
	// 跳转登录
	doLogin(){
		// 后面的传参是默认的页面
		window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
	}
	// 获取url参数
	getUrlParam(name){
	//xxxx.com?param=123&param1=345
		//取出问号后面的值
		let queryString = window.location.search.split('?')[1] || '',
		    reg = new RegExp("(^|&)" + name +"=([^&]*)(&|$)"),
			result = queryString.match(reg);
		// result['param=123','','param','&']
		return result ? decodeURIComponent(result[2]) : null;
	}
	// 错误提示
	errorTips(errMsg){
		alert(errMsg || '好像哪里不对了！');
	}
	// 存储数据
	setStorage(name,data){
		let dataType = typeof data;
		// json对象
		if(dataType = 'object'){
			window.localStorage.setItem(name,JSON.stringify(data));
		}
		// 基础类型
		else if(['number','string','boolean'].indexOf(dataType) >= 0){
			window.localStorage.setItem(name,data);
		}
		else{
			alert('该数据不能用于本地存储！');
		}
	}
	// 取出存储
	getStorage(name){
		let data = window.localStorage.getItem(name);
		if(data){
			return JSON.parse(data);
		}else{
			return '';
		}
	}
	// 删除本地存储
	removeStorage(name){
		window.localStorage.removeItem(name);
	}
}
export default MUtil;