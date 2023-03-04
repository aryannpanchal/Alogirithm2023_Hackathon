const path = require('path');

module.exports = {
  entry: {
    login: "./login.js", 
    signup: "./signup.js"
  },
 output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};