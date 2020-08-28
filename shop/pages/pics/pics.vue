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
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				active:0
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
			},
			async leftClickHandle(index,id){
				this.active = index;
				//获取右侧的数据
				const res = await this.$myRequest({
					// url:"/getimages/"+id //正确写法 路由后面跟上参数
					url:"/getimages"
				})
				console.log(res)
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
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
		}
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
</style>
