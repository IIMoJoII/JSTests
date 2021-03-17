/* Анаграммы */


/* Первое решение сортировкой*/
console.log('-------------------------------resolve by sort--------------------------------')

function isAnagram(str1,str2) {
    if(str1.split('').join('') === str2.split('').join('')){
        return false
    } else {
        return str2.toLowerCase().split('').sort().join()===str1.toLowerCase().split('').sort().join();
    }
}

let a = isAnagram('bbccdd', 'bbccdd') //false
let b = isAnagram('bbccdd', 'dbcbdc') //true
let c = isAnagram('abbccdd', 'dbcbdcu') //false

console.log('1: ', a)
console.log('2: ', b)
console.log('3: ', c)


/* Второе решение с помощью объектов */
console.log('-------------------------------resolve by objects--------------------------------')

function Anagram(str1, str2){
    function buildObject(str) {
        const obj = {};
        str = str.toLowerCase();

        for(let char of str){
            obj[char] = obj[char] + 1 || 1;
        }

        return obj
    }

    const str1Obj = buildObject(str1);
    const str2Obj = buildObject(str2);

    if(Object.keys(str1Obj).length !== Object.keys(str2Obj).length || str1.split('').join('') === str2.split('').join('')) {
        return false;
    }
    for(let char in str1Obj){
        if(str1Obj[char] !== str2Obj[char]){
            return false
        }
    }
    return true;
}

a = Anagram('bbccdd', 'bbccdd') //false
b = Anagram('bbccdd', 'dbcbdc') //true
c = Anagram('abbccdd', 'dbcbdcu') //false

console.log('1: ', a)
console.log('2: ', b)
console.log('3: ', c)















