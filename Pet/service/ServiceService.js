const {
    addService,
    getServiceBypage,
    upDateService,
    delOneSer
 } = require('../dao/ServiceDao');
  
 module.exports.getServiceBypage = async function (data) {
     return await getServiceBypage(data);
 };
 
 module.exports.addService = async function ([{name,
     img,
     photoWall1,
     photoWall2,
     photoWall3,
     photoWall4,    
     species,
     plan,
     weight,
     service,
     time,
     waiter,
     price},{eachPage},{currentPage},{count},{totalPage}]) {
         
     const success= await addService({name,
         img,
         photoWall1,
         photoWall2,
         photoWall3,
         photoWall4,
         species,
         plan,
         weight,
         service,
         time,
         waiter,
         price});
     if(success._id){
         if(count%eachPage===0){
             currentPage=totalPage+1;
         }else{
             currentPage=totalPage
         }
         return await getServiceBypage({currentPage,eachPage})
     }
     
 };
 module.exports.upDateService = async function (service) {
     return await upDateService(service);
 };
 
 module.exports.delOneSer = async function ([{_id},{currentPage},{eachPage},{count}]) {
     const data= await delOneSer({_id});
     if(data.ok===1){
         if(count%eachPage===1){
             currentPage=currentPage-1;
             if(Math.floor(count/eachPage)===1){
                 return  await getServiceBypage({currentPage:1,eachPage})
             }
         }
         return  await getServiceBypage({currentPage,eachPage})
     }
 }
 
 