var express = require('express');
var router = express.Router();
const {
  addCommodity,getCommodity,removeCommodity
} = require('../service/productService');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/addcommodity', async function(req, res, next) {
    res.send(await  addCommodity(req.query)) 
});


router.get('/getCommodity', async function(req, res, next) {
  res.send(await  getCommodity(req.query)) 
});



router.get('/removeCommodity', async function(req, res, next) {
  res.send(await  removeCommodity(req.query)) 
});

module.exports = router;