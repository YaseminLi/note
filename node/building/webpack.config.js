const path = require('path');

module.exports = {
    entry: './src/script/index.js',
    output: {
        filename:'[name].js',
        path:path.resolve(__dirname,'./build/script')//必须为绝对路径，resolve解析为绝对路径
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                include:[
                    path.resolve(__dirname,'src/script')
                ],
                loader:'babel-loader'
            }
        ]
    },
    mode:'development'
};