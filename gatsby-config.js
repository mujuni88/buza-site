module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Joe Buza',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-styled-components', 
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },{
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Tangerine', 'serif']
        }
      }
    }
  ]
}
