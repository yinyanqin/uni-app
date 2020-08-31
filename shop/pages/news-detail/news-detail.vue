<template>
	<view class="news_detail">
		<text class="title">{{ detail.title }}</text>
		<view class="info">
			<text>发表时间：{{ detail.add_time | fromatDate }}</text>
			<text>浏览：{{ detail.click }}</text>
		</view>
		<view class="content" >
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				detail:{}
			}
		},
		onLoad(options){
			// console.log(options)
			this.id = options.id //获取路由上的参数
		this.getNewsDetail()
		},
		methods: {
			async getNewsDetail(){
				const res = await this.$myRequest({
					// url:"/getnewslist" + this.id //正确的写法
					url:"/getnewslist"
				})
				this.detail = res.data.obj.data.msg[0]
				console.log(this.detail)
			}
		}
	}
</script>

<style lang="scss">
	.news_detail{
		font-size: 30rpx;
		padding: 0 20rpx;
		.title{
			text-align: center;
			width: 710rpx;
			display: block;
			margin:20rpx 0; 
		}
		.info{
			display: flex;
			justify-content: space-between;
		}
	}
</style>
