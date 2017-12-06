/* eslint-env node */
'use strict';

const christmasStyles = `
  @keyframes blink {
    0% { opacity: 1.0; }
    50% { opacity: 0.0; }
    100% { opacity: 1.0; }
  }

  html {
    /* https://uigradients.com/#Christmas */
    background: #2F7336;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #AA3A38, #2F7336);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #AA3A38, #2F7336); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    min-height: 100%;
    z-index: 0;
    position: relative;
  }

  html::after {
    background-color: rgba(255, 255, 255, 0.8);
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation: 1s infinite alternate blink;
    pointer-events: none;
  }

  body {
    background: none !important;
    z-index: 10;
    position: relative;
  }
`;

module.exports = {
  name: 'merry-ember',

  contentFor: function (type, config) {
    if (type === 'head') {
      return `<style type="text/css">${christmasStyles}</style>`;
    }
  }
};
