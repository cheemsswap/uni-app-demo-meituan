

//二次封装 uni.request 让其可以在请求处 统一处理 和 响应统一处理
export default function listing({url,method = 'GET',data = undefined}){
	return new Promise((resolve, reject)=>{
		uni.request({
			url,
			method,
			data
		}).then(data=>{
			resolve(data)
		}).catch(error=>{
			uni.showToast({
				icon:'none',
				title:"请求失败",
				duration:2000
			})
			reject(error)
		})
	})
}