const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.js', '.ts'] // '.js' were added to use dev server
  },
  stats: { // looks like the 'minimal', but with colors
    all: false,
    modules: false,
    errors: true,
    warnings: true
  },
  entry: {
    index: `${__dirname}/src/index.ts`
  },
  output: {
    path: `${__dirname}/dist`
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          'babel-loader', // TODO: Consider this, it doesn't affect on the final bundle
          // also read this section and introduce these changes https://github.com/babel/babel-loader#troubleshooting
          'ts-loader',
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true, // to hide warnings like 'rule requires type information'
              emitErrors: true // to emit errors, instead of warnings
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html'
    })
  ]
}
