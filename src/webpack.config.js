let path = require('path');

let config = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: '[name].js',
        publickPath: './dist'
    },
 



  
};

module.exports = config;