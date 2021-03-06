const {productsModel} = require('./models/ProductsModel');


module.exports.addCommodity = async function (data) {
    // console.log(data)
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


module.exports.getCommodity = async function ({pageSize,eachPage,userID}) {
    pageSize = parseInt(pageSize);
    eachPage = parseInt(eachPage);
    let count = await productsModel.find({userID})
    count = count.length
//    let count = await productsModel.countDocuments()-0;
   let totalPage =Math.ceil(count / eachPage)-0;
    let data = await  productsModel
                     .find({userID})                
                     .skip((pageSize-1)*eachPage)
                     .limit(eachPage)
    return {pageSize,eachPage,totalPage,count,data}
}

// 商品种类分布
module.exports.getkind=async function (){
    let result={};
    result.food= await productsModel.count({kind:'food'});
    result.clean=await productsModel.count({kind:"clean"})
    result.rests=await productsModel.count({kind:'rests'})
    return result
}