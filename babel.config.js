module.exports = ({
  'presets': ['@babel/preset-env', '@babel/preset-react'],
  'plugins': [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-syntax-function-bind'
  ],
  'env': {
<<<<<<< HEAD
    'test-landing': {
      'plugins': [
        [ 'babel-plugin-webpack-alias', { 'config': './apps/app-landing/webpack.common.js' } ]
=======
    'test-demo': {
      'plugins': [
        [ 'babel-plugin-webpack-alias', { 'config': './apps/app-demo/webpack.common.js' } ]
>>>>>>> 03b84d84d0e4d2dcbf7ff3f564d1673ae30f3444
      ]
    },
    'test-claim': {
      'plugins': [
        [ 'babel-plugin-webpack-alias', { 'config': './apps/app-claim/webpack.common.js' } ]
      ]
    }
  }
})
