const colors = require('vuetify/es5/util/colors').default
const builtAt = new Date().toISOString()
const path = require('path');
const fs = require('fs');
const Mode = require("frontmatter-markdown-loader/mode")
const MarkdownIt = require('markdown-it')
const mip = require('markdown-it-prism')

function getPaths (lang, type) {
  let initial = lang
  if (lang === 'en') { initial = '' }
  return fs.readdirSync(path.resolve(__dirname, 'contents', `${lang}/${type}`))
    .filter(filename => path.extname(filename) === '.md')
    .map(filename => `${initial}/${type}/${path.parse(filename).name}`)
}

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
    title: 'Csaba Szabo - Frontend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'I’m a Frontend Developer, SEO and Analytics expert based in Budapest.'
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:title', content: 'Csaba Szabo - Frontend, SEO and Analytics' },
      { property: 'og:image', content: '/img/logo-cs-light.png'},
      { property: 'og:description', content: 'I’m a Frontend Developer, SEO and Analytics expert based in Budapest.' },
      { property: 'og:updated_time', content: builtAt }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/favicon/android-icon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/favicon/android-icon-192x192.png', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-57x57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-60x60.png', sizes: '60x60' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-72x72.png', sizes: '72x72' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-76x76.png', sizes: '76x76' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-114x114.png', sizes: '114x114' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-120x120.png', sizes: '120x120' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-144x144.png', sizes: '144x144' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-152x152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', href: '/favicon/apple-icon-180x180.png', sizes: '180x180' },
      { rel: 'manifest', href: '/manifest.json' },
    ]
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
    '~/plugins/globalComponents',
    '~/plugins/LightGallery',
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
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
      '@/assets/css/base/_buttons.scss',
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

  generate: {
    routes: [
      '404'
    ]
    .concat(getPaths('en', 'blog'))
  }
}
