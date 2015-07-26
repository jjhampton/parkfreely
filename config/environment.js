/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'parkfreely',
    environment: environment,
    baseURL: '/parkfreely/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      'default-src': "'self'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' maps.googleapis.com maps.gstatic.com *.googleapis.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self'",
      'img-src': "'self' maps.googleapis.com csi.gstatic.com maps.gstatic.com *.googleapis.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
