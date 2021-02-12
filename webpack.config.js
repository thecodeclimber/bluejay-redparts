const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          compiler: 'ttypescript',
          getCustomTransformers: path.join(__dirname, './webpack.ts-transformers.js'),
        },
      },
    ],
  },
};
