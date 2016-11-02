module.exports = {
  entry: "./src/main.js",
  output: {
    path: "./build",
    publicPath: "/build/",
    filename: "build.js"
  },
  externals:{
      'jquery':'jQuery'
  },
  module: {
    noParse: /es6-promise\.js$/,
    loaders: [
      { test: /\.css$/, loader: "style!css!stylus" },
      { test: /\.html$/, loader: "html" },
      { test: /\.(png|jpg)$/, loader: "url?limit=40000" },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      }
    ]

  },
  resolve:{
      alias:{
        'api':process.cwd() + '/src/G/api.js',
        'common':process.cwd() + '/src/G/common.js'
      }
  },
  devtool: 'source-map',
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}