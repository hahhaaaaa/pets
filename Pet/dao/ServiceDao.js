const {
    ServiceModel
} = require('./models/ServiceModel');
module.exports.addService = async function ({name,
        img,
        species,
        photoWall1,
        photoWall2,
        photoWall3,
        photoWall4,
        plan,
        weight,
        service,
        time,
        waiter,
        price}) {
        return await ServiceModel.create({name,
        img,
        species,
        photoWall1,
        photoWall2,
        photoWall3,
        photoWall4,
        plan,
        weight,
        service,
        time,
        waiter,
        price});
}
module.exports.upDateService = async function ([{name, //服务类别
img, //图片路径
photoWall1,
photoWall2,
photoWall3,
photoWall4,
isShelve,
species, //品类：服务类别（关联定义）
plan, //排期：按时间段
weight, //适用规格：按体重范围等；
service, //服务规格：普修，精修等；
time, //耗时：正常耗时；
waiter, //服务员等级：普通，高级价格不同
price, //价格：基准价格，会员价和活动价都以它为基准
_id,},{currentPage},{eachPage}]) {
    console.log(isShelve);
    
    const data= await ServiceModel.update({_id},{name,img,photoWall1,photoWall2,photoWall3,photoWall4,isShelve,species,plan,weight,
        service,time,waiter,price});
    if(data.ok===1){
        let count= await ServiceModel.find();//总条数
        count= count.length;
        totalPage=Math.ceil(count/eachPage)// 总页数
        let rows = await ServiceModel.find()   //查找所有数据
        .skip((currentPage-1)*eachPage) //跳过查找
        .limit(eachPage)               //查找内容
        return{currentPage,eachPage,totalPage,count,rows}
    }
}
module.exports.getServiceBypage = async function ({currentPage,eachPage,type,text}) {
    // eachPage 每页显示总条数    
    //currentPage当前页码 
    // totalPage 总页数 
    //count 总条数
    currentPage=currentPage-0;
    eachPage=eachPage-0;
    let queryData={};
    if(type&&text){
        queryData[type]={$regex:decodeURI(text)}
    }
    let count= await ServiceModel.find(queryData);//总条数
    count= count.length;
    totalPage=Math.ceil(count/eachPage)// 总页数
    let rows = await ServiceModel.find(queryData)   //查找所有数据
    //  .populate("classId")              //关联查询，通过关联的id
    .skip((currentPage-1)*eachPage) //跳过查找
    .limit(eachPage)               //查找内容

    return{currentPage,eachPage,totalPage,count,rows}
} 
module.exports.delOneSer=async function({_id}){
    return await ServiceModel.deleteOne({_id})
}