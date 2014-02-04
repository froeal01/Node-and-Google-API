requirejs.config({
  baseUrl: 'js',

  paths: {
  },

  shim: {
  }
});

require(['app'],

function(App) {
  window.taskList = new App();
});