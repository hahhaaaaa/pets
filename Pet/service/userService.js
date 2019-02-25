const {userRegister,userLogin,getUserBypage}= require('../dao/UserDao')

module.exports.userRegister=async function(data){
    return await userRegister(data);
}
module.exports.userLogin=async function(data){
     return await userLogin(data);
  
}
module.exports.getUserBypage=async function(data){
    return await getUserBypage(data)
}