//门店
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShopSchema = new Schema({
    // 商店名称
	storeTitle: {
        type: String
     },
     // 门店管理员
     userID:{
         type:mongoose.Schema.Types.ObjectId,
         ref:'userModel'
     },
     //营业执照号码
    storeNumber:{
        type:String
    },
	// 营业图片
	storeImg: {
		type: Array
    },
    
    //营业地址
    storeAddress:{
        type:String
    },
    //营业经纬度
    storePosition:{
        type:Object
    },
    //商品法人
    storeLegal:{
        type:String
    },
    // 商家联系方式
    storePhone:{
        type:String
    },	
    //商店特色
	storeFeature:{
       type:Array
    },
    //商品员工
   
    //姓名  //职责 //联系方式
	// storeEmployee:{
    //     type:Array
    // },
    //佣金比例
	
	storeImgs: [{
		type:String
    }],
    //佣金比列
    storeCommission_ratio:{
        type:String
    },
    //
    storeVip:{
        type:String
    },
	state: {
		type: String,
	}
});

mongoose.model("storeModel", ShopSchema, "store");
module.exports.storeModel=mongoose.model("storeModel")