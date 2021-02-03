require("dotenv").config({
  path: ".env",
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby Starter Template`,
    author: `Andy Morris`,
    // siteUrl: ``, // needed fopr robots-txt
  },
  plugins: [
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-styled-components`,
    `gatsby-optional-chaining`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:400`,
          "open sans:400i",
          `open sans\:700`,
          "open sans:700i",
          `open sans\:800`,
          "open sans:800i",
        ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-robots-txt",
    //   options: {
    //     host: "",
    //     sitemap: "",
    //     policy: [{ userAgent: "*", allow: "/", disallow: "/search" }],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     exclude: [`/404`],
    //   },
    // },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: "gatsby-source-shopify2",
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        apiVersion: "2020-07",
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        minimizeDeprecationNotice: true,
        baseUrl: process.env.API_URL,
        protocol: process.env.API_PROTOCOL,
        hostingWPCOM: false,
        useACF: true,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          // "**/users",
          "**/menus",
          "**/portfolio",
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `react-swipeable`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SurfStatic Starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
