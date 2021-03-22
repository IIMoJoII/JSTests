/* Функция вывода чисел фибоначчи */

function fib(size) {
    let count = [];
    count.push(1);
    count.push(1);
    console.log(count[0])

    for(let i = 1; i <= size; i++){
        count.push(count[i] + count[i-1])
        console.log(count[i])
    }
}

//fib(8);

/* Вернуть число из списка фибоначчи по n номеру */

function findFibNum(num) {
    let count = [0, 1, 1];

    if(num === 1)
        console.log(0)
    else {
        for(let i = 2; i < num; i++){
            count[0] = count[1]
            count[1] = count[2]
            count[2] = count[0] + count[1]
        }
        console.log('at position', num , 'num =', count[1])
    }
}

//findFibNum(14)


/* Рекурсия но работает немного неправильно (на один номер большее значение) */
const fibonacci = num => {
    // Если num равно 0 или 1, возвращаем num
    if(num < 2) {
        return num
    }
    // Рекурсия здесь
    return fibonacci(num - 1) + fibonacci(num - 2)
}
