/* const numbers = [11, 23, 34, 56, 12, 18, 19, 20, 7];
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const elements = numbers [i];
    sum = sum + elements;
}

console.log(sum);
 */

// with function

function arrayTotal(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const elements = numbers[i];
        sum  = sum + elements;
    }
    return sum;
}

const total = arrayTotal ([11, 23, 34, 56, 12, 18, 19, 20, 7]);
console.log('The sum is',total);

