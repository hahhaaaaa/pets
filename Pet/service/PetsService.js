const {
    addPets,
    getPetsBypage
 } = require('../dao/petsDao');
  
 module.exports.getPetsBypage = async function (data) {
     return await getPetsBypage(data);
 };
 
 module.exports.addPets = async function (service) {
     return await addPets(service);
 };

