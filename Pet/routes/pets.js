var express = require('express');
var router = express.Router();

const {
    addPets,
    getPetsBypage,
    getdelete
} = require('../service/PetsService');

//新增
router.post('/addPets', async function (req, res, next) {
    res.send(await addPets(req.body));
});


router.get('/getPetsBypage', async function (req, res, next) {
    res.send(await getPetsBypage(req.query));
});

router.get('/getdelete', async function (req, res, next) {
    console.log(req.query)
    res.send(await getdelete(req.query));
});

module.exports = router;