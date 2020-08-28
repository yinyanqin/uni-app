<template>
	<view >
		<view>数据的绑定学习</view>
		<view>{{ msg }}</view>
		<view>{{ "世界"+'，'+"你好" }}</view>
		<view>{{ 1+2 }}</view>
		<view>{{ flag ? "我是假的" :"我是真的" }}</view>
		
		<image v-bind:src="imgUrl"></image>
		
		<view v-for = " (item , index) in arr " :key="item.id"> 
			序号：{{ item.id }}
			名字：{{ item.name }}
			年齡：{{ item.age }}
		</view>
		
		<button type="primary" @click="clickHandle(10,$event)">按钮</button>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				msg:"hello",
				flag:true,
				imgUrl:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=392066245,1340309040&fm=26&gp=0.jpg",
				arr:[
					{
						id:1,
						name:"張三",
						age:10
					},
					{
						id:2,
						name:"李四",
						age:20
					},
					{
						id:3,
						name:"小明",
						age:30
					}
				]
			}
		},
		methods:{
			clickHandle(num,e){
				console.log(num);// 参数
				console.log(e) //事件对象
			}
		}
	}
</script>

<style>
</style>
