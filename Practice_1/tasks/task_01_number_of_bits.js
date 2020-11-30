'use strict';

/**
* The function determines and returns the
* number of 1 digits in the binary representation
* of the given number.
*
* @param {number} value (value > 0)
* @returns {number} the number of 1 bits or 0 if any arguments are not proper
*/

/*
* Your task is to determine how many
* 1 bits are there in the binary representation
* of the number stored in the variable,
* called value. If you determined it,
* assign it to the variable, called bitNumber.
* 
* E.g.
*   value = 93 -> 0b1011101
*   bitNumber = 5
*/

function numberOfBits(value) {
    let bitNumber = 0;
    let binary = value.toString(2);

    for (var i = 0; i < binary.length; i++) {
        if (binary[i] === '1' ) {
            bitNumber ++;
        }
    }

    return bitNumber;
}

module.exports = numberOfBits;