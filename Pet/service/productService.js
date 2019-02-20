const {
    addCommodity,getCommodity,removeCommodity
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