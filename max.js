// find max between two num 

/* const num1 = 100;
const num2 = 662;
if(num1 > num2) {
    console.log('num1 is greater than num2');
}
else{
    console.log('num2 is greater than num1');
}
 */
// find max between three num 

const num1 = 300;
const num2 = 400;
const num3 = 50;

/* if( num1 > num2 && num1 > num3){
    console.log('num1 is max');
}
else if (num2 > num1 && num2 > num3) {
    console.log('num2 is max');
}
else{
    console.log('num3 is max');
}  */


const max = Math.max(num1, num2, num3);
console.log('largest is max',max);

const min = Math.min(num1, num2, num3);
console.log('smallest is min',min);

// find largest among two with funtion 

/* function findLargest(first, second){
    if (first > second){
        return first;
    }
    else{
        return second;
    }
}

const largest = findLargest(100, 23);
console.log('largest is ',largest); */


// find largest among three with funtion

/* 
function findLargest(first, second, third){
    if (first > second && first > third){
        return first;
    }
    else if (second > first && second > third){
        return second ;
    }
    else{
        return third;
    }
}

const largest = findLargest(100, 230, 550);
console.log('largest is ',largest); */



// find smallest among two 
/* 
function findSmallest(first, second){
    if(first <= second){
        return first;
    }
    else {
        return second;
    }
}

const smallest = findSmallest(4,5);
console.log('smallest is ',smallest); */

// find smallest among three

/* function findSmallest(first, second, third){
    if(first < second && first < third){
        return first;
    }
    else if(second < first && second < third){
        return second;
    }
    else {
        return third;
    }
}

const smallest = findSmallest(40,5,8);
console.log('smallest is ',smallest); */


























