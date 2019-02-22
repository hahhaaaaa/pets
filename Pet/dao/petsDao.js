const {
    petsModel
  } = require('../dao/models/PetsModel');
  

//增加
  module.exports.addPets = async function (data) {
    return await petsModel.create(data)
  }
  
module.exports.getPetsBypage = async function ({currentPage,eachPage,type,text,userID}) {
    // eachPage 每页显示总条数    
    //currentPage当前页码 
    // totalPage 总页数 
    //count 总条数
    currentPage=currentPage-0;
    eachPage=eachPage-0;
    // let queryData={};
    // if(type&&text){
    //     queryData[type]={$regex:decodeURI(text)}
    // }
    let count= await petsModel.find({userID});//总条数
    count= count.length;
    totalPage=Math.ceil(count/eachPage)// 总页数
    let rows = await petsModel.find({userID})   //查找所有数据
     .populate("storeCityId")              //关联查询，通过关联的id
    .skip((currentPage-1)*eachPage) //跳过查找
    .limit(eachPage)               //查找内容

    return{currentPage,eachPage,totalPage,count,rows}
}   


//返回全部
module.exports.getPetsAll=async function(){
  return await petsModel.find()
}

module.exports. getdelete=async function({_id}){
  return await petsModel.remove({_id})
}

module.exports.revisePets = async function (data) {
  let {_id,...resat} = data
  return await petsModel.update({_id},resat);
}

