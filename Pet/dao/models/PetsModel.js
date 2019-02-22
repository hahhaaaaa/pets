//宠物
const mongoose = require('mongoose');
const petsSchema = new mongoose.Schema({
    petname:{type: String, default: ''}, //宠物名字
    petstype:String,//宠物种类
    haircolor:String,//毛色
    birthday:String,//出生日期
    character:String,//宠物性格
    petstate:{type: String, default: '0'},//状态值
    petphotos:{type: String, default: '0'},//照片路径
    storeCityId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'storeModel',
    },//绑定的门店
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userModel'
    },//门店管理id
    petsprice:{type: String, default: '0'} //宠物价格
})
mongoose.model("petsModel", petsSchema, "petsManage");
module.exports.petsModel=mongoose.model("petsModel");

