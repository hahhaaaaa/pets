var express = require('express');
var router = express.Router();
const {storeList,addStore,updateStore,deleteStore,searchStore,searchAddress,findPet,storeNoList,addressList,Isupdate}=require('../service/storeService')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/list',async function(req,res,next){
//    console.log(req.query)
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
   let data=await searchAddress(req.query);
    res.send(data)
   
})
router.get('/findPet',async function(req,res,next){
    res.send(await findPet(req.query))
})
router.get('/storeNoList',async function(req,res,next){
    // console.log(req.query)
    res.send(await storeNoList(req.query))
})
router.post('/storeAddress',async function(req,res,next){
    // console.log(req.body,'12')
    res.send(await addressList(req.body))
})
router.post('/Isupdate',async function(req,res,next){
    res.send(await Isupdate(req.body))
})
module.exports = router;
