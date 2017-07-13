# Roman Numeral

#### Roman Numerals, July 2017

#### By Evan Johnson & Joe McKinney

## Description

This takes a number from the user and converts it to Roman Numerals

## BDD

### Recognize Usable Inputs From User
  * Input: $%$#^$ OR 'number' OR 5000
  * Output: Please enter a valid input

### Determine the thousands place by adding 'M' and subtract 1000 from input
  * Input: 2999
  * Output: MM 999

### If number is in 900 range return 'CM' and subtract 900 from input
  * Input: 999
  * Output: CM 99

### If number is 800 or less, return 'C' and subtract 100 from input
  * Input: 765
  * Output: CCCCCCC 65

### If number is 500 or more, return 'D' and subtract 500 from input
  *  Input: 765
  * Output: D CC 65

### If number is 90-100, return 'XC' and subtract 90 from input
  * Input: 598
  * Output: D XC 8

### If single digit, return special cases
  * Input: 199
  * Output: C XC IX


## Technologies Used

* HTML5
* Cascading Style Sheets
* Bootstrap
* JavaScript
* JQuery
