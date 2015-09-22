'strict mode';

  'use strict';

var prompt = require('prompt');

// For this particular package, we need to "start" it
prompt.start()

// To prompt the user, you need to start the prompt like so
prompt.get(['first', 'second'], function (error, result) {
  console.log('First Input: ' + result['first']);
  console.log('Second Input: ' + result['second']);
});