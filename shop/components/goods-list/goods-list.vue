<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id">
			<image :src="item.goods_lit_img"></image>
			<view class="price">
				<text>￥{{ item.x_price }}</text>
				<text>￥{{ item.c_x_price }}</text>
			</view>
			<view class="name">{{ item.goods_name }}</view>
		</view> 
	</view>
</template>

<script>
	export default{
		props:['goods']
	}
</script>

<style lang="scss">
	.goods_list{
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		 .goods_item{
			 background-color: #fff;
			 width: 355rpx;
			 margin: 10px 0;
			 padding: 15rpx;
			 box-sizing: border-box;
			 image{
				 width:80%;
				 height: 150px;
				 display: block;
				 margin:auto;
			 }
			 .price{
				 color: $shop-color;
				 font-size: 36rpx;
				 margin:20rpx 0 5 rpx 0;
				 text:nth-child(2){
					 font-size: 28rpx;
					 color: #ccc;
					 margin-left: 17rpx;
					 text-decoration: line-through;
				 }
			 }
			 .name{
				 font-size: 28rpx;
				 line-height: 50rpx;
				 padding: 10rpx 0 15rpx 0;
			 }
		 }
	}
</style>
