const withOffline = require('next-offline')  
// const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'file-loader'],
        }
      ],
    },
  };

module.exports = withOffline(
  withSass({  })
)
