const express = require('express')
var router = express.Router();
// 引入七牛云配置
const qnconfig = require('../config.js')

// 处理请求
router.get('/', (req, res, next) => {
  //console.log(qnconfig.uploadToken)
  //index.js console.log(qnconfig.uploadToken)
  res.status(200).send(qnconfig)
})
module.exports = router;