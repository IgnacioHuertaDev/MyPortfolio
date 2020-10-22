module.exports = {
  siteMetadata: {
    title: `Ignacio Huerta`,
    description: `Ignacio Huerta Web Page`,
    author: `@IgnacioHuertaDev`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ignacio Huerta Personal Web Page`,
        short_name: `IH Dev`,
        start_url: `/`,
        background_color: `#252535`,
        theme_color: `#252535`,
        display: `minimal-ui`,
        icon: `src/images/logoRounded.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
