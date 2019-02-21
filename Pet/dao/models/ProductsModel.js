//商品
const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  name: String,    //名称
  kind: String,     //品质
  texture: {                    //材质或制作方法
    type:String,               
    default:null
  },           
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
  weight:{                       //毛重
    type:String,               
    default:null
  },
  expiration:{                    //保质期
    type:String,               
    default:null
  },
  size:{                         //尺码
    type:String,               
    default:null
  },     
  colour:{                    //颜色
    type:String,               
    default:null
  } ,       
  price:String,                    //价格
  picture:Object,                 //图片
  userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'userModel'
  }
})
mongoose.model('productsModel', productsSchema, 'products');
module.exports.productsModel = mongoose.model('productsModel');