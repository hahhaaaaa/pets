const {storeList,addStore,updateStore,deleteStore,searchStore,searchAddress}= require('../dao/StoreDao')
module.exports.storeList=async function(data){
    return await storeList(data)
}
module.exports.addStore=async function(data){
    return await addStore(data)
}
module.exports.updateStore=async function(data){
    return await updateStore(data)
}
module.exports.deleteStore=async function(data){
    return await deleteStore(data)
}
module.exports.searchStore=async function(data){
    return await searchStore(data)
}
module.exports.searchAddress=async function(data){
    return await searchAddress(data)
}


