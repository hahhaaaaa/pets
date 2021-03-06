var express = require('express');
var router = express.Router();

const {
	uploadFile
} = require('../util/upload')



router.post('/upload', async function (req, res, next) {
	// 上传文件事件
	const { success, data } = await uploadFile(req, res, {
		//目录
		fileType: 'storefront',
		//路径
		path: "./public/images",
	})
       console.log(data)
	res.send(data)

});

module.exports = router;