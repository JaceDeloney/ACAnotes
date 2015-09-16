'use strict';

var prompt = require('prompt');
prompt.start();

prompt.get(['name'], function(error, result){
	console.log('Hello, ' + result['name'] + '!');


	var word = result['name'];
	var firstletter = word[0];
	console.log(firstletter)


	console.log(word.replace(firstletter, ''));

	var pigLatin = console.log(word.replace(firstletter, '') + firstletter + 'ay');

	// if(breakLetter !== 'a' || 'e' || 'i' || 'o' || 'u') {
		// continue to next letter in string
	}
});