const {user}=require('./models/userModel');


//注册
module.exports.userRegister =async function(data){
    //数字类型的可以转换为纯数字
    return await user.create(data).exec();
}
// 登录
module.exports.userLogin=async function(data){
    console.log(data);
 return  await user.find(data).exec()
  
}

// 修改

