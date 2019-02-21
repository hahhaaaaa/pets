const {
    ServiceModel
} = require('./models/ServiceModel');
module.exports.addService = async function (Service) {
    return await ServiceModel.create(Service);
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
module.exports.login = async function login(phone, password) {
    return await AdminModel.find({
        phone,
        password,
        state:'true',
    })
}

module.exports.register=async function register(data){
    return await AdminModel.create(data)
}

module.exports.isRepeat=async function isRepeat(phone){
    return await AdminModel.find(phone)
}
  

module.exports.getAdmin = async function ({type,text}) {
    let queryData={};
    if(type&&text){
        queryData[type]={$regex:text}
    }
    return await AdminModel.find(queryData);
}


module.exports.getAdminById = async function (_id) {
    return await AdminModel.find(_id);
}

module.exports.updateAdmin = async function ({_id,name,password,phone}) {
    return await AdminModel.update({_id},{name,password,phone});
}
module.exports.upDateLogin = async function ({_id,state}) {
    console.log(state);
    return await AdminModel.update({_id},{state});
}

