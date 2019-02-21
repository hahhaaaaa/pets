var express = require('express');
var router = express.Router();
const {userRegister,userLogin}= require('../service/userService')
// const jwt = require('jsonwebtoken');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', async function(req,res,next){
   let data=await userLogin(req.body);
   //console.log(data);
   if(data.length>0){
     req.session.user=data;
     res.send({msg:true,data})
   }else{
     res.send({msg:false})
   }
  
  // res.send(await userLogin(req.query))
})
router.get('/isLogin',function(req,res,next){
  let result= req.send.user
  if(req.session.user){
    res.send({
      isLogin:true,
      result
    })
  }
})
router.get('/logout',function(req,res,next){
req.session.user=null;
res.send(true)
})

router.post('/register',async function(req,res,next){
  res.send(await userRegister(req.body))
})


module.exports = router;
