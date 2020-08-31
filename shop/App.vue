<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	
@font-face {font-family: "iconfont";
/* ~@/static/font */
  src: url('https://gitee.com/iconfont.eot?t=1543896065069'); /* IE9*/
  src: url('https://gitee.com/iconfont.eot?t=1543896065069#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('https://gitee.com/iconfont.ttf?t=1543896065069') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('https://gitee.com/iconfont.svg?t=1543896065069#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-shouhuorenshoujihao:before { content: "\e62f"; }

.icon-dianpu:before { content: "\e736"; }

.icon-dianhua:before { content: "\e797"; }

.icon-wechat:before { content: "\e634"; }

.icon-gouwuche1:before { content: "\e61a"; }

.icon-shanchu:before { content: "\e630"; }

.icon-dizhi:before { content: "\e641"; }

.icon-mima:before { content: "\e644"; }

.icon-gerenzhongxin:before { content: "\e614"; }

.icon-dingdan:before { content: "\e608"; }

.icon-kefu:before { content: "\e61f"; }

.icon-alipay:before { content: "\e618"; }

.icon-shouye:before { content: "\e699"; }

.icon-sousuo:before { content: "\e665"; }

.icon-xiajiantou:before { content: "\eb6d"; }

.icon-xiazai:before { content: "\e602"; }

.icon-shezhi:before { content: "\eef2"; }

.icon-shuaqiaqiapianyinhangqia:before { content: "\e622"; }

.icon-icon-test:before { content: "\e603"; }

.icon-fenlei:before { content: "\e623"; }

.icon-Sign:before { content: "\e615"; }

.gomeImgLoad{ /* 处理详情内容中的图片 */
	width: 750rpx;
	height: auto;
}
</style>
