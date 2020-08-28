<template>
	<view id="myView">
		这是test组件: {{ num }}
		<view>只是父组件传递过来的数据 {{ title}}</view>
		<button @click="sendNum">给父组件传值</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num:3,
				intId:null
			};
		},
		props:["title"],
		methods:{
			sendNum(){
				console.log("给父组件传值");
				this.$emit('myEven',this.num)
			}
		},
		beforeCreate(){
			console.log("beforeCreate:",this.num);
		},
		created(){ //初始化数据
			console.log("created:",this.num);
			// this.intId = setInterval(() => {
			// 	console.log("执行定时器")
			// },1000)
		},
		beforeMount(){
			// console.log("beforeMount:",document.getElementById("myView"))
		},
		mounted(){
			// console.log("mounted:",document.getElementById("myView"))	 //操作DOM
		},
		destroyed(){
			console.log("组件销毁了");
			// clearInterval(this.intId) //清除定时器
		}
	}
</script>

<style>

</style>
