const {
    addPets,
    getPetsBypage,
    getdelete
 } = require('../dao/petsDao');
  
 module.exports.getPetsBypage = async function (data) {
     return await getPetsBypage(data);
 };
 
 module.exports.addPets = async function (service) {
     return await addPets(service);
 };

 module.exports.getdelete = async function (data) {
    return await getdelete(data);
};
