const qiniu = require('qiniu')

// 创建上传凭证
const accessKey = 'jejXkULuA2KFTQAywv4NqWoVoQwVPcA9MlqHy8Br'
const secretKey = 'nUlV_Bnrcn_jFstHPmbM1IopNSPF4o9M0ZtC1uOo'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: 'images',
  expires: 7200
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)

module.exports = {
  uploadToken
}