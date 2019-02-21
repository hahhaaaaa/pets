const {userRegister,userLogin}= require('../dao/UserDao')

module.exports.userRegister=async function(data){
    return await userRegister(data);
}
module.exports.userLogin=async function(data){
     return await userLogin(data);
  
}