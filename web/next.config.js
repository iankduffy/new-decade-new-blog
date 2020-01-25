const withOffline = require('next-offline')  
// const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const client = require('./client')

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
  withSass({  }, {
    exportPathMap: async function (defaultPathMap) {
      const path = await client
        // get all the posts and return those with slugs
        .fetch('*[_type == "post"].slug.current')
        .then(data =>
          // use reduce to build an object with routes
          // and select the blog.js file, and send in the
          // correct query paramater.
          data.reduce(
            (slug) => ({
              '/': { page: '/' },
              [`/blog/${slug}`]: { page: '/posts', query: { slug } }
            }),
            {}
          )
        )
        .catch(console.error)
      return path
    }
  })
)

// module.exports = {
//   // Make sure that your node enviroment supports async/await
//   exportPathMap: async function (defaultPathMap) {
//     const path = await client
//       // get all the posts and return those with slugs
//       .fetch('*[_type == "post"].slug.current')
//       .then(data =>
//         // use reduce to build an object with routes
//         // and select the blog.js file, and send in the
//         // correct query paramater.
//         data.reduce(
//           (slug) => ({
//             '/': { page: '/' },
//             [`/blog/${slug}`]: { page: '/posts', query: { slug } }
//           }),
//           {}
//         )
//       )
//       .catch(console.error)
//     return path
//   }
// }