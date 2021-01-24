// https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/in-general.md

const sveltePreprocess = require('svelte-preprocess');

function createPreprocessors() {
  return sveltePreprocess({
    coffeescript: {
        bare: true
    }
  })
}

module.exports = {
  preprocess: createPreprocessors(),
  createPreprocessors
};