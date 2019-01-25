var express = require('express');
var router = express.Router();
const {
    addService,
    getServiceBypage
} = require('../service/ServiceService');


router.post('/addService', async function (req, res, next) {
    res.send(await addService(req.body));
});

router.get('/getServiceBypage', async function (req, res, next) {
    res.send(await getServiceBypage(req.query));
});


router.post('/login', async function (req, res, next) {
    let {
        phone,
        password
    } = req.body;
    // 后台去获取数据库中的用户数据
    let result = await login(phone, password);
    if (result.length > 0) {
        [req.session.user] = result //将数据保存到session里面
        res.send({
            isLogin: true
        })
    } else {
        res.send({
            isLogin: false
        })
    }
});

/* GET users listing. */
router.get('/isLogin', function (req, res, next) {
    if (req.session.user) {
        let name = req.session.user.name;
        res.send({
            isLogin: true,
            name
        })
    } else {
        res.send({
            isLogin: false
        })
    }
});

router.get('/logout', function (req, res, next) {
    req.session.user = null;
    res.send(true);
});

router.post('/isRepeat', async function (req, res, next) {
    let [result] = await isRepeat(req.body)
    if (result) {
        res.send({
            isRepeat: 'Repeat'
        });
    } else {
        res.send({
            isRepeat: 'noRepeat'
        });
    }
});

router.get('/getAdmin', async function (req, res, next) {
    res.send(await getAdmin(req.query));
});


router.get('/getAdminById', async function (req, res, next) {
    res.send(await getAdminById(req.query));
});

router.post('/updateAdmin', async function (req, res, next) {
    res.send(await updateAdmin(req.body));
});

router.get('/upDateLogin', async function (req, res, next) {
    res.send(await upDateLogin(req.query));
});




module.exports = router;