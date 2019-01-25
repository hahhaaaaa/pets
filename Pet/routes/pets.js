var express = require('express');
var router = express.Router();

const {
    addPets,
    getPetsBypage
} = require('../service/PetsService');

//新增
router.post('/addPets', async function (req, res, next) {
    res.send(await addPets(req.body));
});


router.get('/getPetsBypage', async function (req, res, next) {
    res.send(await getPetsBypage(req.query));
});

module.exports = router;