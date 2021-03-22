/* Продолжить последовательность */

function continueSequence(arr, num) {
    const difference = arr[1] - arr[0];

    for(let i = 0; i < num; i++){
        arr.push(arr[arr.length - 1] + difference)
    }

    return arr;
}


let mySequence = continueSequence([  1, 4, 7, 10  ], 22);

console.log(mySequence)
