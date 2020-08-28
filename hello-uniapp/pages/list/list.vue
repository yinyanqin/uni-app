<template>
	<view>	<button @click="get">发送get请求</button>
	<button @click="setStorage">存储数据</button>
		<button @click="getStorage">获取数据</button>
			<button @click="removeId">移除数据</button>
		<view>这是列表页</view>
		
		<view class="box-item" v-for="(item,index) in list" :key="index">{{ item }}</view>
		<!-- <button @click="pullDown">下拉刷新</button> -->
		
	
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:["前端","java","UI","前端","java","UI","前端","java","UI","最后一个"]
			}
		},
		onPullDownRefresh(){
			console.log("触发了下拉刷新");
			this.list = ["测试","前端","大数据"];
			setTimeout(() => {
				uni.stopPullDownRefresh();//关闭下拉刷新
			},2000)
		},
		onReachBottom(){
			console.log("触底了");
			this.list = [...this.list,...["测试","前端","大数据"]]
		},
		methods:{
			pullDown(){
				uni.startPullDownRefresh()
			},
			get(){
				console.log(1)
				uni.request({
				    url: 'http://cs.ht.fozgo.com/wkhome/goodsapi/goodslist', 
				    data: {
				      	cate_id: 43,
				      	num: 3
				    },
				    success: (res) => {
				        console.log(res.data);
				    }
				});
			},
			setStorage(){
			// uni.setStorage({ //异步写法
			// 	key:"id",
			// 	data:80,
			// 	success(){
			// 		console.log("存儲成功")
			// 	}
				
			// })
			uni.setStorageSync("id",100); //同步写法 推荐使用
		},
		getStorage(){
			// uni.getStorage({
			// 	key:"id",
			// 	success(res){
			// 		console.log(res.data)
			// 	}
			// })
			const id = uni.getStorageSync("id");
			console.log(id)
		},
		removeId(){
			// uni.removeStorage({
			// 	key:"id",
			// 	success(){
			// 		console.log("删除成功")
			// 	}
			// })
			uni.removeStorageSync("id")
		}
				
		}
	}
</script>

<style>
	.box-item{
		height: 100px;
		line-height: 100px;
	}
</style>
