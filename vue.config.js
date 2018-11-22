const appData = require('./data.json') //引入数据
const seller = appData.seller //外卖接口
const goods = appData.goods //商品接口
const ratings = appData.ratings //评分接口

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  devServer: {
    before(app){
      app.get('/api/seller',(req,res)=>{
        res.json({
          errno: 0,
          data: seller
        })
      })
      app.get('/api/goods', (req,res)=>{
        res.json({
          errno: 0,
          data: goods
        })
      })
      app.get('/api/ratings', (req,res)=>{
        res.json({
          errno: 0,
          data: ratings
        })
      })
    }
  }
}
