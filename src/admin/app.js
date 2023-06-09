import favicon from './extensions/favicon.png';

const config = {
  locales: ['pt-BR'],
  head: {
    favicon: favicon
  },
  tutorials: false,
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Won Games"
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
