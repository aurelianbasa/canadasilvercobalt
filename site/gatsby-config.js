require('dotenv').config()

const fontFile = require('./src/@elegantstack/flow-ui-theme/theme/typography-fonts.json')

module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: 'gatsby-plugin-algolia',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        chunkSize: 10000,
        queries: require('@elegantstack/gatsby-blog-algolia/src/queries')
      }
    },
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: process.env.DISQUS_SHORTNAME
      }
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: process.env.MAILCHIMP_END_POINT
    //   }
    // },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `G-073DEWFNCX`,
        head: false,
        anonymize: true,
      }
    },
    
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'My Technology Blog',
        short_name: 'My Blog',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'content/assets/favicon.png'
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: false,
        fonts: fontFile.fonts
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-science',
      options: {
        basePath: '/news',
        siteUrl: 'https://canadasilvercobaltworks.com',
        fonts: fontFile.fonts,
        services: {
          algolia: true
          // mailchimp: true
        },
        sources: {
          contentful: true,
          local: false
        }
      }
    }
  ],
  // Customize your site metadata
  siteMetadata: {
    //General Site Metadata
    siteUrl: 'https://canadasilvercobaltworks.com',
    title: 'Canada Silver Cobalt Works',
    name: 'Canada Silver Cobalt Works',
    description: 'Highest Silver grades in the world. Latest resource estimate at Castle East marks first grassroots discovery in decades for the Northern Ontario silver cobalt camp.',
    address: 'Coquitlam, British Columbia',
    email: 'waynecheveldayoff@gmail.com',
    phone: '+1 (416) 710-2410',

    //Site Social Media Links
    social: [
      {
        name: 'Linkedin',
        url: 'https://ca.linkedin.com/company/canada-cobalt-works/'
      },
      {
        name: 'Facebook',
        url: 'https://www.facebook.com/canadacobaltworks/'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/canadacobaltworks'
      }
    ],

    // DONT DELETE THESE
    headerMenu: [
      {
        name: 'DONT DELETE',
        slug: '/'
      }
    ],
    footerMenu: [
      {
        title: 'DONT DELETE',
        items: [
          {
            name: 'DONT DELETE',
            slug: '/'
          }
        ]
      }
    ]
  }
}
