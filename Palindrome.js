/* Палиндром */
console.log('-------------------------------resolve palindrome--------------------------------')

function isPalindrome(str) {
    str = str.toLowerCase()

    return str === str.split('').reverse().join('')
}

let a = isPalindrome('racecar') //true
let b = isPalindrome('table') //false

console.log('1: ', a)
console.log('2: ', b)