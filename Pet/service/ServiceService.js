const {
   addService,
   getServiceBypage
} = require('../dao/ServiceDao');
 
module.exports.getServiceBypage = async function (data) {
    return await getServiceBypage(data);
};

module.exports.addService = async function (service) {
    return await addService(service);
};
module.exports.getuser = async function (queryData) {
    return await getuser(queryData);
};

module.exports.getuserById = async function (_id) {
    return await getuserById(_id);
};

module.exports.updateuser = async function (user) {
    return await updateuser(user);
};

module.exports.upDateLogin = async function (isLogin) {
    return await upDateLogin(isLogin);
};


