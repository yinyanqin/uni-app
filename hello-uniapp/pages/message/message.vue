<template>
	<view>
		<button type="primary" @click="chooseImg">上传图片</button>
		<image v-for="item in imgArr" :src="item" @click="previewImg(item)"></image>
		<!-- #ifdef H5 -->
		<view>我只希望在h5页面中看见</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view>我只希望在微信小程序页面中看见</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data(){
			return{
				imgArr:[]
			}
		},
		methods:{
			chooseImg(){
				uni.chooseImage({
					count:5,
					success:res => {
						console.log(res)
						this.imgArr = res.tempFilePaths
						console.log(this.imgArr)
					}
				})
			},
			//预览图片
			previewImg(current){
				// console.log(current)
				uni.previewImage({
					current,
					urls:this.imgArr,
					loop:true,
					indicator:"number"
				})
			}
		},
		onLoad(){
			// #ifdef H5
			console.log("我希望在h5中打印");
			// #endif
			// #ifdef MP-WEIXIN
			console.log("我希望在微信小程序中打印");
			// #endif
		}
	
	}
</script>

<style>
	/* 在h5中的样式 */
	/* #ifdef H5 */
	view{
		color: #007AFF;
	}
	/*  #endif */
	/* #ifdef MP-WEIXIN */
	/* 微信小程序的样式 */
	view{
		color: #4CD964;
	}
	/*  #endif */
</style>
