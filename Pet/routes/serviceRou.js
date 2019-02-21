var express = require('express');
var router = express.Router();
const {
    addService,
    getServiceBypage,
    upDateService,
    delOneSer
} = require('../service/ServiceService');


router.post('/addService', async function (req, res, next) {
    res.send(await addService(req.body));
});
router.post('/upDateService', async function (req, res, next) {
    res.send(await upDateService(req.body));
});

router.get('/getServiceBypage', async function (req, res, next) {
    res.send(await getServiceBypage(req.query));
});

router.post('/delOneSer', async function (req, res, next) {
    res.send(await delOneSer(req.body));
});


module.exports = router;