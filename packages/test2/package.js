Package.describe({
  name: 'test2',
  version: '0.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    'test1'
  ], 'server');

  api.addFiles([
    'load.js'
  ], ['web.browser', 'server']);
});
