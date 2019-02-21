var express = require('express');
var router = express.Router();
const {
  addCommodity,getCommodity,removeCommodity,updataCommodity
} = require('../service/productService');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/addcommodity', async function(req, res, next) {
    res.send(await  addCommodity(req.body)) 
});


router.get('/getCommodity', async function(req, res, next) {
  res.send(await  getCommodity(req.query)) 
});



router.get('/removeCommodity', async function(req, res, next) {
  res.send(await  removeCommodity(req.query)) 
});

router.post('/updataCommodity', async function(req, res, next) {
  res.send(await  updataCommodity(req.body)) 
});

module.exports = router;