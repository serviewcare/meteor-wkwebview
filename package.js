Package.describe({
  name: 'silvervue:wkwebview',
  version: '0.1.5',
  summary: 'Use the significantly better and faster WKWebView in mobile apps on iOS 8+.',
  git: 'https://github.com/serviewcare/meteor-wkwebview/',
  documentation: 'README.md'
});

Cordova.depends({
  // the cordova plugin built by Meteor Core team that "emulates a server" on
  // the mobile device. Serving the files and checking for the HCP updates.
  //'com.meteor.cordova-update': 'https://github.com/practicalmeteor/com.meteor.cordova-update/tarball/a7e98f27a26b727288da81dcfd8047eccb5f6036',
  'com.telerik.plugins.wkwebview': 'https://github.com/serviewcare/WKWebview.git#8a509331e5d30c88efa40555d949e891fc9dfadd'
});

//meteor add cordova:com.meteor.cordova-update@https://github.com/practicalmeteor/com.meteor.cordova-update/tarball/a7e98f27a26b727288da81dcfd8047eccb5f6036

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use(['coffeescript', 'practicalmeteor:loglevel@1.2.0_1']);

  api.addFiles('wkwebview.coffee');
});

Package.onTest(function(api) {
  api.use(['coffeescript', 'practicalmeteor:loglevel@1.2.0_1', 'tinytest', 'practicalmeteor:wkwebview']);

  api.addFiles('wkwebview-tests.coffee', 'client');
});
