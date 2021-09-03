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
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: false,
        fonts: fontFile.fonts
      }
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblog-minimal',
      options: {
        basePath: '/blog',
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
    title: 'FlexiBlog Theme',
    name: 'FlexiBlog',
    description: 'My site description...',
    address: 'New York, NY',
    email: 'email@example.com',
    phone: '+1 (888) 888-8888',

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
        url: 'https://github.com/gatsbyjs'
      }
    ],

    //Header Menu Items
    headerMenu: [
      {
        name: 'Home',
        slug: '/'
      }
      // {
      //   name: 'Contact',
      //   slug: '/contact'
      // }
    ],

    //Footer Menu Items (2 Sets)
    footerMenu: [
      {
        title: 'Quick Links',
        items: [
          {
            name: 'Advertise with us',
            slug: '/contact'
          },
          {
            name: 'About Us',
            slug: '/about'
          },
          {
            name: 'Contact Us',
            slug: '/contact'
          }
        ]
      },
      {
        title: 'Legal Stuff',
        items: [
          {
            name: 'Privacy Notice',
            slug: '/'
          },
          {
            name: 'Cookie Policy',
            slug: '/'
          },
          {
            name: 'Terms Of Use',
            slug: '/'
          }
        ]
      }
    ]
  }
}
