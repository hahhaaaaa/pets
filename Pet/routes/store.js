var express = require('express');
var router = express.Router();
const {storeList,addStore,updateStore,deleteStore,searchStore,searchAddress}=require('../service/storeService')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/list',async function(req,res,next){
   console.log(req.query)
   let data=await storeList(req.query);
   res.send(data)
})

router.post('/add',async function(req,res,next){
    let data=await addStore(req.body);
    res.send(data)
})
router.post('/update',async function(req,res,next){
    let data=await updateStore(req.body);
    res.send(data)
})

router.post('/delete',async function(req,res,next){
    let data=await deleteStore(req.body);
    res.send(data)
})
router.post('/search',async function(req,res,next){
    let data=await searchStore(req.body);
    res.send(data)
})

router.get('/getAddress',async function(req,res,next){
    console.log(req.query)
   let data=await searchAddress(req.query)
   console.log(data);
    res.send(data)
   //letdata searchAddress(req.body)
})
module.exports = router;
