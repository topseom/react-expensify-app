const path = require('path');

//babel-cli is for command line
//babel-core like babel-cli it for webpack use
//babel-loader is teach webpack how to run babel
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader', // don't forget create .babelrc to presets
            test: /\.js$/,// file types loader on
            exclude: '/node_modules/'
        },{
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map', // for debug when is error have file deverlop mode
    devServer: {
        contentBase: path.join(__dirname,'public'), // it store in memory for fast load
        historyApiFallback: true
    }
};