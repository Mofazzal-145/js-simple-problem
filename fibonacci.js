/* const fibo = [0, 1];
for(let i = 2; i <= 10; i++){
    fibo [i] = fibo [i - 1] + fibo [i - 2];
}
console.log(fibo); */


// with function

/* function fibonacciSeries(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num ; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;

}

const fibonacci = fibonacciSeries(5);
console.log(fibonacci); */


// error handleing

function fibonacciSeries(num) {
    if (typeof num != 'number'){
        return 'pleasae give a number';
    }
    if (num < 2){
        return 'please enter a positive number';
    }
    const fibo = [0, 1];
    for (let i = 2; i <= num ; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;

}

// const fibonacci = fibonacciSeries('jiosdrjg');
const fibonacci = fibonacciSeries(-7);
console.log(fibonacci);