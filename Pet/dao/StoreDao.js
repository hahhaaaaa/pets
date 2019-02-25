const {storeModel}=require('./models/StoreModel');

//查询
module.exports.storeList =async function({start=0,count=10,name,value,userID}){
    //数字类型的可以转换为纯数字
    const result={
        start:~~start,
        count:~~count,
    }
    //查找出所有
    let queryData = {};
    // console.log(name,value)
    if(name&&value){
      queryData[name]={$regex:value}
    }

    //queryData[name] = {$regex:value};
    result.total=await storeModel.count({...queryData,userID})
    result.totalPage=Math.ceil(result.total/result.count);
    result.rows= await storeModel.find({...queryData,userID})
    .skip((result.start-1)*result.count)
    .limit(result.count)
    //console.log(result.rows)
    
    return result;
}
// 添加
module.exports.addStore=async function(data){
   return await storeModel.create({...data,state:'0'})
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
module.exports.findPet=async function(userID){
  let liebiao= await storeModel.find(userID,{ _id: 1, storeTitle: 1 })
  return {liebiao}
}
//按照地址查询
module.exports.searchAddress=async function({storeAddress}){
  return await storeModel.find({storeAddress:{$regex:storeAddress}},{storeAddress:1})
}

module.exports.storeNoList =async function({start=0,count=10,name,value}){
  // console.log('2312313')
  //数字类型的可以转换为纯数字
  const result={
      start:~~start,
      count:~~count,
  }
  //查找出所有
  let queryData = {};
  // console.log(name,value)
  if(name&&value){
    queryData[name]={$regex:value}
  }
  //queryData[name] = {$regex:value};
  result.total=await storeModel.count({...queryData,state:'0'})
  result.totalPage=Math.ceil(result.total/result.count);
  result.rows= await storeModel.find({...queryData,state:'0'})
  .skip((result.start-1)*result.count)
  .limit(result.count)
  return result;
}

// 更新注册
module.exports.Isupdate=async function(data){
   let {_id}=data;
  //console.log(_id,rest,123)
  result= await storeModel.update({_id},{state:'1'})
  return result
}

//根据经纬度进行查询   找到当前门店管理员对应的所有门店信息
module.exports.addressList=async function({userID,value}){
  console.log(userID,value)
let queryData={};
const result={};
if(value){
  queryData['storeAddress']={$regex:value}
}
 console.log(userID)
result.count=await  storeModel.count({...queryData,userID})
result.markers=await storeModel.find({...queryData,userID},{storePosition:1})
console.log(result)
return result
}