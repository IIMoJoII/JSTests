/* Сумма квадратных корней для чётных значений массива */

let arr = [16, 16, 4, 1, 3, 5, 9, 13, 4]

const squareSum = (arr) => arr.filter(el => !(el % 2)).reduceRight((accum, el) => accum + el ** (1/2), 0)

console.log(squareSum(arr))