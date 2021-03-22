/* Дублирующийся элемент в массиве */

let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8];

function doubleEl(array, arrMaxSize) { // На вход массив и его максимальное значение
    let sumOfArrEl = 0;
    let count = 0;

    // Считаем обычную сумму элементов массива без учёта дублирующегося элемента
    for(let j = 1; j <= arrMaxSize; j++){
        sumOfArrEl += j;
    }

    // Считаем сумму элементов поступившего массива
    for(let i in array){
        count += array[i];
    }

    // Отнимаем суммы, результат - дублирующийся элемент
    return (count - sumOfArrEl);
}

const result = doubleEl(arr, 8)
console.log('doubling element: ', result)

