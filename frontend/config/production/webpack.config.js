module.exports = {
  entry: {
    application: './src/javascripts/application.js',
  },
  output: {
    path: `${__dirname}/../../../app/assets/javascripts`,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2'
      }
    ]
  }
}
