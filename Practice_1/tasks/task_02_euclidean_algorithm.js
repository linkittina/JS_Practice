'use strict';

/**
 * The function determines the greatest common divisor of
 * the given two numbers.
 *
 * @param {number} a (a > 0)
 * @param {number} b (b > 0)
 * @returns {number} GCD or 0 if any arguments are not proper
 */

/*
* Your task is to compute the greatest common divisor of
* the numbers given in a and b variables, using the
* Euclidean algorithm (https://en.wikipedia.org/wiki/Euclidean_algorithm).
* If you have the result, assign it to the variable, called gcd.
* Also take into consideration the documentation of the function!
*/

function euclidean(a, b) {
    let gcd;
    let biggerNumber = 0;
    let smallerNumber = 0;
    let modulo = 0;

    if (a > b) {
        biggerNumber = a;
        smallerNumber = b;
    } else {
        biggerNumber = b;
        smallerNumber = a;
    }

    modulo = biggerNumber % smallerNumber;
    
    while (modulo != 0) {
        biggerNumber = smallerNumber;
        smallerNumber = modulo;
        modulo = biggerNumber % smallerNumber;
    }
    
    gcd = smallerNumber;

    return gcd;
}
module.exports = euclidean;