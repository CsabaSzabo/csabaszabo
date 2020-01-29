const colors = require('vuetify/es5/util/colors').default
const builtAt = new Date().toISOString()
const path = require('path');
const fs = require('fs');
const Mode = require("frontmatter-markdown-loader/mode")
const MarkdownIt = require('markdown-it')
const mip = require('markdown-it-prism')

const md = new MarkdownIt({
  html: true,
  typographer: true
})
md.use(mip)

module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Csaba Szabo - Front-End Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'normalize.css/normalize.css',
    '@/assets/css/main.scss',
    '@/assets/css/prism-material-light.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/firebase.client.js', mode: 'client' },

    '~/plugins/lazyload',
    '~/plugins/globalComponents'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',

    '@nuxtjs/style-resources',

    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/google-tag-manager
    ['@nuxtjs/google-tag-manager', {
      id: 'GTM-W6D6GMG',
      layer: 'dataLayer',
      pageTracking: true,
      dev: false, // disable in dev mode
    }],

    // Doc: https://github.com/potato4d/nuxt-client-init-module
    'nuxt-client-init-module',
  ],
  
  styleResources: {
    scss: [
      '@/assets/css/utilities/_variables.scss',
      '@/assets/css/utilities/_helpers.scss',
      '@/assets/css/base/_grid.scss',
      '@/assets/css/base/_buttons.scss'
    ],
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // default theme is light mode
      dark: false,
      themes: {
        dark: {
          primary: colors.blue,
          secondary: colors.teal.darken4,
          accent: colors.teal.accent4,

          error: colors.deepOrange.accent2,
          info: colors.grey.darken3,
          success: colors.green.accent3,
          warning: colors.amber.base,
        },
        light: {
          primary: '#1976D2',
          secondary: colors.teal.lighten3,
          accent: colors.teal.accent4,

          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    extend (config) {
      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i')
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT],
          vue: {
            root: "dynamicMarkdown"
          },
          markdown(body) {
            return md.render(body)
          }
        }
      }, {
        test: /\.(jpe?g|png)$/i,
        loader: 'responsive-loader',
        options: {
          placeholder: true,
          quality: 60,
          size: 1400,
          adapter: require('responsive-loader/sharp')
        }
      }, {
        test: /\.(gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      });
    }
  },
}
