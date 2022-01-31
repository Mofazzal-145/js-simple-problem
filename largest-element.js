
// find largest number

/* function largestElement(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const elements = numbers[i];
        // console.log(elements);
        if (elements > largest){
            largest = elements;
        }
    }
    return largest;
}

const ages = [12, 23, 34, 28, 18, 26, 44, 51];
const value = largestElement(ages);
console.log('The large number', value);

const littleBoy = ([-12, -3, -20]);
const valu2 = largestElement(littleBoy);
console.log('The number', valu2); */

// find small number

function smallestNumber(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const elements = numbers[i];
        if(elements < smallest){
            smallest = elements;
        }
    }
    return smallest;
}

const ages = [12, 23, 34, 28, 18, 26, 44, 51, 1];
const value = smallestNumber(ages);
console.log('The large number', value);

const littleBoy = ([-12, -3, -20, -1]);
const valu2 = smallestNumber(littleBoy);
console.log('The number', valu2);

