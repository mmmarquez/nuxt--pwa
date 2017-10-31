module.exports = {
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios']
  },
  plugins: [{ src: '~/plugins/flickity', ssr: false }],
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Abrakadabra' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [
    // "tachyons/css/tachyons.min.css"
    // "tachyons-debug/css/tachyons-debug.min.css"
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */

  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: ['@nuxtjs/pwa']
};
