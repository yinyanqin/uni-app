<template>
	<view class="content">
	<test v-if="flag" :title="title"  @myEven="getNum"></test>
	
	<button @click="checkTest">切换test组件</button>
	<view>这是子组件传递过来的数据 : {{ num }}</view>
	
	
	<test-a></test-a>
	<test-b></test-b>
	
	<view>
	    <uni-calendar 
	    :insert="true"
	    :lunar="true" 
	    :start-date="'2019-3-2'"
	    :end-date="'2019-5-20'"
	    @change="change"
	     />
	</view>
	</view>
</template>

<script>
	import test from "../../components/test.vue"
	import testA from "../../components/a.vue"
	import testB from "../../components/b.vue"
	
import uniCalendar from '@/components/uni-calendar/uni-calendar.vue'
	export default {
		data() {
			return {
				title: 'Hello',
				flag:true,
				num:0
			}
		},
		components:{
			test,
			"test-a":testA,
			"test-b":testB,
			uniCalendar
		},
		// onLoad(options) {
		// 	console.log("页面加载了",options)
		// },
		// onShow(){
		// 	console.log("页面显示了")
		// },
		// onReady(){
		// 	console.log("页面初次渲染完成")
		// },
		// onHide(){
		// 	console.log("页面隐藏了")
		// },
		methods: {
			checkTest(){
				this.flag = !this.flag
			},
			getNum(num){
			console.log(num);
			this.num = num
			},
			change(e) {
			   console.log(e);
			 }
		}
	}
</script>

<style>

</style>
