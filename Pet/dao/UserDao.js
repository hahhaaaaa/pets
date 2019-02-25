const {user}=require('./models/userModel');


//注册
module.exports.userRegister =async function(data){
    //数字类型的可以转换为纯数字
    return await user.create(data).exec();
}
// 登录
module.exports.userLogin=async function(data){
    console.log(data);
 return  await user.find(data).exec()
  
}
module.exports.getUserBypage = async function ({currentPage,eachPage,type,text}) {
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

    let count= await user.find({...queryData,userType:'0'});//总条数
    count= count.length;
    totalPage=Math.ceil(count/eachPage)// 总页数
    let rows = await user.find({...queryData,userType:'0'})   //查找所有数据
    //  .populate("classId")              //关联查询，通过关联的id
    .skip((currentPage-1)*eachPage) //跳过查找
    .limit(eachPage)               //查找内容

    return{currentPage,eachPage,totalPage,count,rows}
}  

//用户列表

// 修改

//用户注册

