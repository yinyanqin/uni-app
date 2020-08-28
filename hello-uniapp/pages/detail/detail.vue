<template>
<view>
<!-- 	<view>
		<text>文本组件</text>
	</view>
	<view>
		<text selectable>文本组件 是否可选</text>
	</view>
	<view>
		<text selectable space="ensp">文本组件   中文字符空格一半大小</text>
	</view>
	<view>
		<text selectable space="emsp">文本组件    中文字符空格大小</text>
	</view>
	<view>
		<text selectable space="nbsp" style="font-size: 30px;">文本组件   根据字体设置的空格大小</text>
	</view>
	
	<view>
		<text >&amp;</text>
	</view> -->
<!-- 	<view class="box2" hover-class="box2-active" >	
		<view class="box" hover-class="box-active" hover-stop-propagation :hover-start-time="2000" :hover-stay-time="2000">我是 view组件</view>
	</view>
	<button type="primary">默认按鈕</button>
	<button size="mini">按鈕 size</button>
	<button type="primary">按鈕 type</button> -->
	
	<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2174096538,1092330510&fm=26&gp=0.jpg"></image>
	<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2174096538,1092330510&fm=26&gp=0.jpg" mode="aspectFit"></image>
	<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2174096538,1092330510&fm=26&gp=0.jpg" mode="aspectFill"></image>
</view>
</template>

<script>
	export default{
		onLoad(options){
			console.log(options) //接收参数
		}
	}
</script>

<style>
	.box2{
		width: 200px;
		height: 200px;
		background-color: #F0E68C;
		}
	.box{
		width: 100px;
		height: 100px;
		background-color: #FFFACD;
	}
	.box-active{
		background-color: #FFE1FF;
	}
	.box2-active{
		background-color: #EEB422;
	}
</style>
