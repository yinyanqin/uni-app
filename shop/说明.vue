<template>
	小程序打包上传
	1.打开 manifest.json文件 点击微信小程序配置  > 输入 AppID
	2.登录微信公众平台 https://mp.weixin.qq.com/wxamp/home/guide?token=79861875&lang=zh_CN
	3.找到 开发  
	4.点击开发设置 复制 AppID 放到  manifest.json文件中的AppID中	
	5.上线需要配置服务器域名
	
	6.点击微信开发者工具中的上传  配置信息  注意：APP.vue中字体图标路径需要改成线上路径 
	src: url('https://gitee.com/iconfont.eot?t=1543896065069'); /* IE9*/
	src: url('https://gitee.com/iconfont.eot?t=1543896065069#iefix') format('embedded-opentype'), /* IE6-IE8 */
	
	7.在微信公众号平台中  版本管理中 查看提交的项目 
	8.点击提交审核 > 
	
	
	H5打包
	1.打开 manifest.json文件 点击H5配置  >输入页面标题
	
	
	App打包
		1.打开 manifest.json文件 点击基础配置 > 输入名称，描述，版本号
		2.App图标配置 > 点击浏览选择图片 > 点击自动生成和替换所有图标
		3.启动图 > 模块配置等
		4.点击发行 > 原生App云打包
		5.打包成功后回出现一个链接  > 复制链接使用二维码生成器生成二维码  > 扫描二维码下载app
		
	
</template>

<script>
</script>

<style>
</style>
