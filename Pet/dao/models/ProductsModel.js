//商品
const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  name: String,    //名称
  kind: String,     //品质
  texture: String,          //材质或制作方法 
  applicable:String,         //适用规格
  exclusive:String,           //专属  
  packaging:String,           //包装
  flavor:{                    //口味
    type:String,               
    default:null
  },            
  specific:{                    //特殊
    type:String,               
    default:null
  },        
  origin:String,                //产地
  birthday:String,             //生产日期
  expiration:String,             //保质期
  price:String,                    //价格
  picture:Array,                 //图片
})
mongoose.model('productsModel', productsSchema, 'products');
module.exports.productsModel = mongoose.model('productsModel');