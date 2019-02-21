
//用户
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userName:{
        type:String
    },//用户名
    password:{
        type:String
    },//密码
    phone:{
        type:String
    },//电话
    mail:{
        type:String
    },//邮箱
    name:{
        type:String
    },//姓名
    userType:{
        type:String
    },//用户类型
    picUrl:{
        type:String,
    },
    createTime:{
        type:Date,
    },
    updateTime:{
        type:Date
    },
    status:{
        type:String
    },//状态
});
mongoose.model("user", userSchema, "user");
module.exports.user=mongoose.model("user")


