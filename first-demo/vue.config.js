const path = require('path')
const ISENV =  process.env.NODE_ENV === 'production'
module.exports = {
    assetsDir:'static',
    publicPath:ISENV?'./':'/',
    css:{
        loaderOptions:{
            //给sass-loader传递选项
            sass:{
                data:`@import "~@/scss/_variable.scss";`
            }
        }
    },
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
      }
}
