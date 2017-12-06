/* eslint-env node */
'use strict';

const christmasStyles = require('./christmas-styles.css');

module.exports = {
  name: 'merry-ember',

  contentFor: function (type, config) {
    if (type === 'header') {
      return `<style type="text/css">${christmasStyles}</style>`;
    }
  }
};
