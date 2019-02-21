const {storeModel}=require('./models/StoreModel');

//查询
module.exports.storeList =async function({start=0,count=10,name,value}){
    //数字类型的可以转换为纯数字
    const result={
        start:~~start,
        count:~~count,
    }
    //查找出所有
    let queryData = {};
    console.log(name,value)
    if(name&&value){
      queryData[name]={$regex:value}
    }
    //queryData[name] = {$regex:value};
    result.total=await storeModel.count(queryData)
    result.totalPage=Math.ceil(result.total/result.count);
    result.rows= await storeModel.find(queryData)
    .skip((result.start-1)*result.count)
    .limit(result.count)
    .exec()
    //console.log(result.rows)
    
    return result;
}
// 添加
module.exports.addStore=async function(data){
   return await storeModel.create(data).exec()
}

// 修改
module.exports.updateStore=async function(data){
  let {_id,...rest}=data;
  console.log(_id,rest,123)
  result= await storeModel.update({_id},rest)
  return result
}
//删除
module.exports.deleteStore=async function(data){
  return await storeModel.remove(data)
}

// 查询
// module.exports.searchStore=async function({start=0,count=10,name,value}){
//  const result={
//      start:~~start,
//      count:~~count
//  }
//    let queryData = {};
//     queryData[name] = {$regex:value};
//   result.total=await storeModel.count(queryData)
//  result.totalPage=Math.ceil(result.total/result.count);
//  result.rows=await storeModel.find(queryData).skip((result.start-1)*result.count)
//  .limit(result.count)
//  return result;
// }

//按照地址查询
module.exports.searchAddress=async function({storeAddress}){
  return await storeModel.find({storeAddress:{$regex:storeAddress}},{storeAddress:1})
}
