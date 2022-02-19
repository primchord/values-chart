export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '価値観マップ | Values-Chart',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: '価値観マップ | Values-Chart',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://value.chord4me.info/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: '価値観マップ | Values-Chart',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'あなたの価値観を5段階で可視化する無料のWebアプリです。自己理解・価値観を深堀りするワーク等にご利用ください。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://value.chord4me.info/logo.png',
      },
      { name: 'twitter:card', content: 'summary' }, // twitterの画像サイズ
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-highcharts', '@nuxtjs/google-gtag'],
  'google-gtag': {
    id: 'G-8XJPJ7BH3K',
    debug: false, // Enable to track in dev mode.
  },

  highcharts: {
    exporting: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
