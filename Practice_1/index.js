'use strict';
console.log('Executing your tests:')

const numberOfBits = require('./tasks/task_01_number_of_bits');
console.log('It\'s a:', numberOfBits);
console.log(numberOfBits(1556));

const euclidean = require('./tasks/task_02_euclidean_algorithm');
console.log('It\'s a:', euclidean);
console.log(euclidean(64, 8));