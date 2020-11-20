export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Free APIs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A list of free APIs',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Free APIs',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Free APIs',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'A list of free APIs',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://free-apis.vercel.app/',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Free APIs',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'A list of free APIs',
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@koo_gio',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: 'https://unpkg.com/ionicons@5.2.3/dist/ionicons.js', body: true },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://api.publicapis.org',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  loading: {
    height: '5px',
  },
}
