<template>
	<view>
		<view>样式文件</view>
		<view class="box1">
			测试文字
			<text>scss</text>
		</view>
		<view class="iconfont icon-shezhi">
			字体图标
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	/* 外部引入样式 */
	@import url("./a.css");
	.box1{
		width: 375rpx;
		height: 375rpx;
		background-color: $global-color; /*使用uni.scss中的样式*/
		font-size: 30rpx;
		color: #fff;
		text{
			color:#483D8B ;
		}
	}
</style>
