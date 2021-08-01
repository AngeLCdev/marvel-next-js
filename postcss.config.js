const path = require("path");
const mixins = require ('./styles/pcss/tools/_mixins')

const variables = require('./styles/pcss/settings/_variables');


module.exports = {
  plugins: {
    'precss': {variables},
    'postcss-preset-env': {stage: 3},
    'postcss-nested': {},
    'autoprefixer': {},
    'postcss-mixins': {mixins},
    'cssnano': {preset: 'default'}

  }

};
