//服务
const mongoose = require('mongoose');
const ServiceSchema = new mongoose.Schema({
    name:String,   //服务类别
    img:String,
    species:String,  //品类：服务类别（关联定义）
    plan:String, //排期：按时间段
    weight:String, //适用规格：按体重范围等；
    service:String,  //服务规格：普修，精修等；
    time:String,    //耗时：正常耗时；
    waiter:String,  //服务员等级：普通，高级价格不同
    price:Number,  //价格：基准价格，会员价和活动价都以它为基准
})

mongoose.model("ServiceModel", ServiceSchema, "Service");
module.exports.ServiceModel=mongoose.model("ServiceModel");


