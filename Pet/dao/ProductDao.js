const {productsModel} = require('./models/ProductsModel');


module.exports.addCommodity = async function (data) {
    console.log(data)
    return await productsModel.create(data);
}



module.exports.removeCommodity = async function (_id) {
    console.log(_id)
    return await productsModel.remove({_id})
}

module.exports.updataCommodity = async function (data) {
    let {_id,...resat} = data
    return await productsModel.update({_id},resat)
}


module.exports.getCommodity = async function ({pageSize,eachPage}) {
    pageSize = parseInt(pageSize);
    eachPage = parseInt(eachPage);
   let count = await productsModel.countDocuments()-0;
   let totalPage =Math.ceil(count / eachPage)-0;
    let data = await  productsModel
                     .find()                
                     .skip((pageSize-1)*eachPage)
                     .limit(eachPage)
    return {pageSize,eachPage,totalPage,count,data}
}