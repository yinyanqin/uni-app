<template>
	<!-- 下拉刷新 和上拉下载  -->
	<view class="goodsList">
		<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">....我是有底线的....</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goods-list/goods-list.vue"
	export default {
		data() {
			return {
				pageindex:1,
				goods:[],
				flag:false
			}
		},
		onLoad(){
			this.getGoodsList();
		},
		components:{"goods-list":goodsList},
		methods: {
			// 获取商品列表的数据
			async getGoodsList(callBack){
				const res = await this.$myRequest({
					url:"/goodsList?pageindex=" + this.pageindex
				})
				this.goods = [...this.goods , ...res.data.obj.data.msg]
				callBack && callBack(); //下拉刷新 
			},
			//导航到商品详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url:'/pages/goods-detail/goods-detail?id='+id 
				})
			}
		},
		onReachBottom(){
			console.log("触底了");
			console.log(this.goods.length)
			if(this.goods.length < this.pageindex*10) 	return  this.flag = true;
			this.pageindex++;
			this.getGoodsList();
		},
		// 下拉刷新
		onPullDownRefresh(){
			console.log("下拉");
			this.pageindex = 1;
			this.goods = [];
			this.flag = false;
			setTimeout(() => {
				this.getGoodsList(()=>{
					uni.stopPullDownRefresh();//关闭下拉刷新
				});
			},1000)
		}
	}
</script>

<style lang="scss">
	.goodsList{
		background-color: #eee;
	}
.isOver{
	width:100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 28rpx;
}
</style>
