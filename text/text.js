/** Copyright (c) 2024 Mason Wilde

  This file is part of Run It Yourself Software (RIYS).

  RIYS is free software: you can redistribute it and/or modify it under the terms
  of the GNU General Public License as published by the Free Software Foundation,
  either version 3 of the License, or (at your option) any later version.

  RIYS is distributed in the hope that it will be useful, but WITHOUT ANY 
  WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
  PARTICULAR PURPOSE. See the GNU General Public License for more details.

  You should have received a copy of the GNU General Public License along with
  Foobar. If not, see <https://www.gnu.org/licenses/>. 
*/

// Text tools for RIYS

/**
 * Convert text to a base output.
 * @param {string} input The input text.
 * @param {int} base The base of the output.
 * @returns {string} The base-base output.
 */
function TexttoBaseString(input, base) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += input.charCodeAt(i).toString(base) + ' ';
    }
    return output;
}

/**
 * Convert a base input to ASCII.
 * @param {string} input The input text.
 * @param {int} base The base of the input.
 * @returns {string} The ASCII output.
 */
function baseToASCII(input, base) {
    let output = '';
    let inputArray = input.split(' ');
    let re = new RegExp('(.{1.' + str(base) + '})', 'g');
    inputArray.map((x) => x.match(re)).flat()
    for (let i = 0; i < inputArray.length; i++) {
        output += String.fromCharCode(parseInt(inputArray[i], base));
    }
    return output;
}

/**
 * Update the binary output.
 * @param {string} input The input text.
 */
function updateBinary(input) {
    document.getElementById('binary').innerHTML = TexttoBaseString(input, 2);
}

/**
 * Update the octal output.
 * @param {string} input The input text.
 */
function updateOctal(input) {
    document.getElementById('octal').innerHTML = TexttoBaseString(input, 8);
}

/**
 * Update the decimal output.
 * @param {string} input The input text.
 */
function updateDecimal(input) {
    document.getElementById('decimal').innerHTML = TexttoBaseString(input, 10);
}

/**
 * Update the hex output.
 * @param {string} input The input text.
 */
function updateHexadecimal(input) {
    document.getElementById('hexadecimal').innerHTML = TexttoBaseString(input, 16);
}

/**
 * Update the base64 output.
 * @param {string} input The input text.
 */
function updateBase64(input) {
    document.getElementById('base64').innerHTML = btoa(input);
}

/**
 * Execute and update all sub-methods.
 */
function execute() {
    let input = document.getElementById("input").value;
    let format = document.getElementById("text-format").value;

    updateBinary(input)
    updateOctal(input);
    updateDecimal(input);
    updateHexadecimal(input);
    updateBase64(input);
}
