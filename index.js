const qiniu = require('qiniu')
var domain = 'http://cdn.jscode.top'
var fileName = '5k_image.jpg'
// 加密密钥
// 099ae9b9d5b8bca877987fb8cd9b6e8a61a9119a
// 1e89acba80b87ca84cab5aaa009ae889edaba78b
var encryptKey = '099ae9b9d5b8bca877987fb8cd9b6e8a61a9119a'
var deadline = parseInt(Date.now() / 1000) + 3600
var cdnManager = new qiniu.cdn.CdnManager(null)
var finalUrl = cdnManager.createTimestampAntiLeechUrl(domain, fileName, null, encryptKey, deadline)
console.log({ finalUrl })