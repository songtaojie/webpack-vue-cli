const path = require('path')
module.exports = {
    css:{
        loaderOptions:{
            //给sass-loader传递选项
            sass:{
                data:[`@import "~@/scss/root.scss";`]
            }
        }
    }
}
