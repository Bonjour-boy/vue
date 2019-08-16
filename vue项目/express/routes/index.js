var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var url = require('url')

router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

router.use((req, res, next) => {
  // 全局添加
  res.append("Access-Control-Allow-Origin", "*");
  next();
});

let {
  find,
  add,
  ObjectId,
  updata,
  delect
} = require('../libs/db');

/* GET home page. */
router.get('/maindata', async function (req, res, next) {

  let data = await find('goddata');
  // console.log(data);
  res.send(data);
});

router.get('/shoplist', async function (req, res, next) {

  let data = await find('shopdata');
  // console.log(data);
  res.send(data);
});

//注册
router.post("/logup", async (req, res, next) => {
  let {
    username,
    password
  } = req.body;
  // console.log(username);
  let data = await find('sign', {
    'username': username
  });

  if (data.length) {
    res.send('N'); //账号存在,不给注册
  } else if (password) {
    let result = await add('sign', {
      'username': username,
      'password': password
    });
    // console.log(result);
    if (result) {
      res.send('Y');
    } else {
      res.send('N');
    }
  }

})

//登录
router.post("/login", async (req, res, next) => {
  let {
    username,
    password
  } = req.body;
  // console.log(username);
  let data = await find('sign', {
    $and: [{
      'username': username
    }, {
      'password': password
    }]
  });
  // console.log(data);
  if (data.length) {
    res.send('Y'); //账号存在，可以登录
  } else {
    res.send('N'); //账号不存在，登录失败
  }

})

//详情页
router.get('/detail', async function (req, res, next) {
  let id = url.parse(req.url, true).query.godid;
  // console.log(id);
  let data = await find('detail', {
    "id": id
  });
  res.send(data);
});

router.get('/shoplist', async function (req, res, next) {

  let data = await find('shopdata');
  // console.log(data);
  res.send(data);
});

console.log('serve run start');
module.exports = router;