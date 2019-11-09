const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'https://4868c6c65ace45f3a36d7375b3eeb4e9@sentry.io/1814264' });

Sentry.configureScope(function(scope) {
 scope.setTag("5835512007 ", "Napat Binsaard");
 scope.setUser({
   email: "naphat1811@gmail.com",
   username: "Napat07"
 });
});

myUndefinedFunction();