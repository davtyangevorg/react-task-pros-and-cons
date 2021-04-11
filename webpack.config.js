let path=require('path')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')

let conf={
    entry: './src/main.js',
    output:{
        path:path.resolve(__dirname,'./dist/'),
        filename: 'main.js',
        publicPath:'dist/'
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css',
      }),
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: [
                  "@babel/plugin-transform-react-jsx",
                  ["@babel/plugin-proposal-decorators",{"legacy":true}],
                  ["@babel/plugin-proposal-class-properties",{"loose":true}]
                ]
              }
            }
          },
          {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: process.env.NODE_ENV === 'development'
                }
              },
              {
                loader:'css-loader',
                options:{
                  modules:true,
                  importLoaders:1
                }
                
              } 
              
            ]
          }

        ]
      },
      devServer:{
        historyApiFallback:true
      } 
}
module.exports=conf