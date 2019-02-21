const {
    addPets,
    getPetsBypage,
    getdelete,
    revisePets
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

module.exports.revisePets = async function (data) {
    return await revisePets(data);
};
