export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: true,
  generate: {
    dir: 'generte_pages', // gh_pages/ instead of dist/
    subFolders: false // HTML files are generated according to the route path
  },

  buildDir: "dist",
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'online school',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'description', hid: 'description' },
    ],
    link: [
      { rel: 'shortcut icon', href: 'favicon.ico' }
    ]
  },
  serverMiddleware: [
    { path: "/server", handler: "~/server/index.js" }
  ],
  loading: { color: '#ddd' },
  css: [
    './assets/sass/default.sass',
    './assets/fonts/font-face.sass'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-trailingslash-module',
    'nuxt-webfontloader',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    'nuxt-font-loader-strategy'
  ],

  fontLoader: {
    url: '~~/assets/fonts/font-face.sass' // Path to your css file
  },
  
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
