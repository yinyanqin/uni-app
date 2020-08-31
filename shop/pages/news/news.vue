<template>
	<view class="news">
	<news-item @itemClick="goDetail" :list="newsList"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item.vue'
	export default {
		data() {
			return {
				newsList:[]
			}
		},
		onLoad(){
			this.getNews()
		},
		components:{"news-item":newsItem},
		methods: {
			async getNews(){
			const res = await this.$myRequest({
					url:"/getnewslist"
				})
				this.newsList = res.data.obj.data.msg
			},
			goDetail(id){
				console.log(id)
				uni.navigateTo({
					url:"/pages/news-detail/news-detail?id="+id
				})
			}
		}
	}
</script>

<style lang="scss">
.news{

}
</style>
