module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'itunes-search',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  plugins: ['~plugins/vuetify.js'],
  css: ['~assets/app.styl'],

  /* ㅠ
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
    // vendor: ['axios', 'vuetify'] // nuxt 에서 모듈을 임트할 때마다 웹팩이 생성한 웹 페이지 번들이 코드에 추가됨, 웹팩은 코드를 번들로 구분하고
    // 요구에 따라 혹은 병렬로 번들을 불러옴, vendor 옵션을 추가하면 vendor 번들 파일이 딱 한 번만 추가됩니다. 그렇지 않으면 각 임포트가
    // 모든 웹 페이지 번들에 추가되어 프로젝트 크기가 커집니다. 항상 모듈을 vendor 옵션에 추가해서 프로젝트에 중복되지 않도록 하는게 중요 했는데
    // 2.X 버전부터는 이거 안해도 됩니다.
  }
}

