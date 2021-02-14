const path = require('path');

// module.exports = {
//   devtool: 'inline-source-map',
//   mode: 'development',
//   devtool: 'inline-source-map',
//   module: {
//     rules: [{
//       use: 'ts-loader',
//       // exclude: /node_modules/,
//   }]},

//   resolve: {
//     extensions: ['.tsx', '.ts', '.jsx', '.js'],
//     alias: {
//       'node_modules': path.join(__dirname, 'node_modules'),
//     }
//   },
// };
module.exports = {
  entry: './src/Main.ts',
  mode: 'development',
  target: 'web',
  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
      loader: 'ts-loader',
      options: {
        allowTsInNodeModules : true
      },
      include: [
        path.resolve(__dirname, 'src/'),
        path.resolve(__dirname, 'node_modules/@jacekku/'),
      ]
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      // 'node_modules': path.join(__dirname, 'node_modules'),
    }
  }
};