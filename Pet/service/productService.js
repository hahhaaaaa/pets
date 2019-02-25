const {
    addCommodity,getCommodity,removeCommodity,updataCommodity,getkind
 } = require('../dao/ProductDao');


 module.exports.addCommodity = async function (data) {
    return await addCommodity(data);
};

module.exports.getCommodity = async function (data) {
    return await getCommodity(data);
};



module.exports.removeCommodity = async function (data) {
    return await removeCommodity(data);
};


module.exports.updataCommodity = async function (data) {
    return await updataCommodity(data);
};
module.exports.getkind=async function(){
    return await getkind()
}