<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话：400-618-9090 (点击拨打)</view>
			<view>校区地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</view>
		</view>
		<map  class="map" :longitude="longitude" :latitude="latitude" :scale="scale" :markers="markers" ></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//百度地图开放平台  http://lbsyun.baidu.com/
				longitude:116.293735, //经度
				latitude:39.837927,//纬度
				scale:12, //缩放级别，取值范围为5-18
				markers:[ //设置图标
					{
						longitude:116.293735,
						latitude:39.837927,
						iconPath:"../../static/addLogo.png",
						width:30,
						heght:30
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
				    phoneNumber: '400-618-9090' 
				});
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
