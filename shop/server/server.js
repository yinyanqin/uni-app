// 引入node第三方框架引入
// 1）npm init //初始化
// 2）npm install express --save 拉取第三方包

var express = require("express"); //引入一个模块
var path = require("path"); //处理文件路径操作
var bodyparser = require('body-parser'); //引入 主要用来处理body传参
// 创建服务器
var app = express(); //实例化对象

const carousel = require("../data/Carousel");
const goodsList = require("../data/goodsList");
const gettimgcategory = require("../data/gettimgcategory");
const getimages = require("../data/getimages");

app.use(bodyparser.json()); //对传过来的json参数进行处理
app.use(bodyparser.urlencoded({
  extended: false
})); //解密的操作

// 2.客户端请求时以路径a进行请求，并且是以get方式发送过来的请求，就执行后面的回调函数
app.get('/carousel', function (req, res) { //轮播图
    //解决跨域问题
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    // res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.status(200).json({
    success: true,
    obj: carousel
  })
});

app.get('/goodsList', function (req, res) {  //商品列表
	// res.setHeader('Access-Control-Allow-Origin', '*');
	// res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	// res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.status(200).json({
    success: true,
    obj: goodsList
  })
});

app.get('/gettimgcategory', function (req, res) { //左边
    //解决跨域问题
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.status(200).json({
    success: true,
    obj: gettimgcategory
  })
});

//路由传参
app.get('/getimages', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
	res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	res.status(200).json({
	  success: true,
	  obj: getimages
	})
  // var id = req.params.id;
  // // console.log(id)
  // if (id >= 0 && id < getimages.length) {
  //   var info = getimages[id]; //将传过来的下表对应数组下边 并返回给前端
  //   res.status(200).json({
  //     success: true,
  //     msg: '',
  //     obj: info
  //   })
  // } else {
  //   res.status(200).json({
  //     success: false,
  //     msg: '无商品',
  //     obj: {}
  //   })
  // }
});
// .............................




app.post('/b', function (req, res) { //post
  res.status(200).send("这是post的数据")
});

app.all('/d', function (req, res) { //post/get
  res.status(200).send("这是post/get的数据")
});


//路由传参
var stuArr = [{
    name: "www",
    age: 10
  },
  {
    name: "rr",
    age: 20
  },
  {
    name: "tt",
    age: 30
  },
];
app.get('/c/:id', function (req, res) {
  var id = req.params.id;
  // console.log(id)
  if (id >= 0 && id < stuArr.length) {
    var info = stuArr[id]; //将传过来的下表对应数组下边 并返回给前端
    res.status(200).json({
      success: true,
      msg: '',
      obj: info
    })
  } else {
    res.status(200).json({
      success: false,
      msg: '查无此人',
      obj: {}
    })
  }
});


// body传参
// 1.下载第三方包  npm install body-parser --save (主要用来处理body传参)
// 2. 引入 var bodyparser = require('body-parser')
// 3.模块化 // app.use(bodyparser.json());//对传过来的json参数进行处理
// app.use(bodyparser.urlencoded({extended:false}));//解密的操作

app.post('/e', function (req, res) {
  var name = req.body.name;
  var age = req.body.age
  var info = {
    name: name,
    age: age
  }

  if (name && age) { //判断参数是否为空
    stuArr.unshift(info); //把传过来的值添加到数组的头部
    res.status(200).json({
      success: true,
      msg: "添加成功",
      obj: stuArr
    })
  } else {
    res.status(200).json({
      success: false,
      msg: "添加失败",
      obj: {}
    })
  }

})



//index.html默认的访问页面,静态目录
app.use(express.static(path.join(__dirname, 'www')));
// console.log(path.join(__dirname,'www')) ; //E:\node\www 当前文件的物理路径

// app.use('/detail', function (req, res) { //当访问的路径是 detail时  把list文件返回回去
//   res.sendFile(path.join(__dirname, 'www', 'list.html')); //把文件发回到客户端
//   // res.status(200).sendFile(path.join(__dirname,'www','list.html')); //把文件发回到客户端 ,status(200)可以自定义状态码
// });

// 配置页面 当页面找不到是  执行以下函数
app.use("*", function (req, res) { //*可以省略不写 *表示所有路径
  res.status(200).sendFile(path.join(__dirname, 'www', 'err', '404.vue'))
});


//页面请求 bower

//监听
app.listen(3000, function (err) {
  if (err) {
    console.log("监听失败");
    throw err;
  }
  console.log("服务器已开启，端口号为3000");
});