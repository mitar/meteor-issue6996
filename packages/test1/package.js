Package.describe({
  name: 'test1',
  version: '0.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    'test2'
  ], 'web.browser');

  api.addFiles([
    'load.js'
  ], ['web.browser', 'server']);
});
