var path = require('path');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'templates/assets/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new WebpackShellPluginNext({
      onAfterDone:{
        scripts: ['cintsa build'],
        blocking: true,
        parallel: false
      }
    })
  ],
};

