import favicon from './extensions/favicon.png';

const config = {
  locales: ['pt-BR'],
  head: {
    favicon: favicon
  },
  tutorials: false
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
