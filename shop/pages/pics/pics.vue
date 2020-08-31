<template>
	<view class="pics">
		<scroll-view class="left" scroll-y="">
			<view 
			:class="active === index ? 'active' : ''" 
			v-for="(item,index) in cates" :key="item.id"
			 @click="leftClickHandle(index,item.id)">
			 {{ item.title }}
			 </view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			 <view class="item" v-for="item in secondData" :key="item.id">
			 <image @click="previewImg(item.img)" :src="item.img" mode=""></image>
					 <text>{{ item.title }}</text>
			 </view>
			 <text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				active:0,
				secondData:[]
			}
		},
		onLoad(){
			this.getPicsCate();
		},
		methods: {
			async getPicsCate(){
				const res = await this.$myRequest({
					url:'/gettimgcategory'
				})
				this.cates = res.data.obj.data.msg;
				this.leftClickHandle(0,this.cates[0].id); //默认第一项的id
			},
			async leftClickHandle(index,id){
				this.active = index;
				//获取右侧的数据
				const res = await this.$myRequest({
					// url:"/getimages/"+id //正确写法 路由后面跟上参数
					url:"/getimages"
				})
			this.secondData = res.data.obj.data.msg; 
			},
			previewImg(current){
				const urls = this.secondData.map(item => {
					return item.img;
				})
				console.log(urls)
				uni.previewImage({
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		display: flex;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
			.active{
				background-color: $shop-color;
				color: #fff;
			}
		}
		
		.right{
			width: 520rpx;
			height: 100%;
			margin: 10rpx auto;
			.item{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
					line-height: 60rpx;
				}
			}
		}
	}
</style>
