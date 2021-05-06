import data from './static/data/portfolio.json';

let dynamicRoutes = () => {
  return new Promise((resolve) => {
    resolve(
      data.map((el) => {
        return {
          route: `investments/${el.id}`,
          payload: `${el}`,
        };
      })
    );
  });
};

export default {
  target: 'static',
  // ssr: 'true',

  // router: {
  //   base: '/incubator/',
  // },

  generate: {
    routes: dynamicRoutes,
  },
  head: {
    title: 'YY Goshthi | Social Business incubator by YY Ventures',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'We believe that a more equitable and just world is possible if we foster ‘Social Business’ while leveraging young people’s talents and ideas.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon_2.png' },
      // { rel: 'shortcut_icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/uikit@3.4.0/dist/css/uikit.min.css',
        defer: true,
      },
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/uikit@3.4.0/dist/js/uikit.min.js',
        defer: true,
      },
      {
        src:
          'https://cdn.jsdelivr.net/npm/uikit@3.4.0/dist/js/uikit-icons.min.js',
        defer: true,
      },
    ],
  },
  loading: { color: '#fff' },
  css: [
    '~/assets/styles/global.less',
    '~/assets/styles/transitions.css',
    '~/assets/styles/components.sass',
    '~/assets/styles/global.sass',
    '~/assets/styles/utils.sass',
    '~/assets/styles/typography.sass',
    '~/assets/styles/colors.sass',
    '~/assets/styles/animations.sass',
    // '~/assets/styles/resets.sass',
  ],
  plugins: ['~/plugins/typed.js'],
  modules: ['@nuxtjs/style-resources', '@nuxt/content'],
  contnet: {},
  styleResources: {
    less: ['./assets/styles/globalvariables.less'],
    sass: ['./assets/styles/variables.sass'],
  },
  build: {
    extend(config, ctx) {},
  },
};
