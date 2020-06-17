const sveltePreprocess = require('svelte-preprocess');

module.exports = sveltePreprocess({
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            esmodules: true,
          },
        },
      ],
    ],
  },
  scss: sveltePreprocess.scss(),
});
