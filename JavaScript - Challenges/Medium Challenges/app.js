// Falsy or Truthy? given 2 values. if one is true return false. likewise.


// function falsyOrTruthy(elem1, elem2) {
//     return !elem1 ? elem1 : elem2

// }

// console.log(falsyOrTruthy(0, 5));

// Return the length of any given array


// function arrLength(arr) {
//     return arr.length;
// }
// console.log(arrLength([1, 2, 3, 4, 5, 6]));

// Get the last element in an array


// function arrLength(arr) {
//     return arr[arr.length - 1];
// }

// console.log(arrLength([1, 2, 3, 4, 5, 6]));


// Find the sum of an array

// function arrSum(arr) {
//     let sum = 0;

//     for(let i = 0; i < arr.length; ++i) {
//         sum = sum + arr[i]; 
        
//     }
//     return sum;


// }

// console.log(arrSum([2, 2, 2, 2, 3]));


//  Add up the numbers from a single number: e.g. 3 = 1 + 2 + 3 = 6


// function progressiveSum(num){
//     let sum = 0;
//     for(let i = 0; i <= num; ++i){
//         sum = sum + i;
//     }
//     return sum; 
// }


// console.log(progressiveSum(4));


//calculate the time: Given an number in seconds, return this number in  mm:ss format.

// function calcTime(seconds){
//     let timerMinutes = Math.floor(seconds/60);
//     let timerSeconds = seconds % 60;

//     if(timerMinutes.toString().length === 1){
//         timerMinutes = "0" + timerMinutes
//     }

//     return timerMinutes + ":" + timerSeconds;

// }

// console.log(calcTime(700));

//Find the largest number


// function getMax(arr){
//     let sum = arr[0];
//     for(let i = 1; i <= arr.length; ++i){
//         if(arr[i] > sum) {
//             max = arr[i];
//         }
       
// }
// return sum;
// }

// console.log(getMax([200, 20, -100,-400,  -200, -300]));




// Reverse a string

// function reverseString(str){
//     let hello = "";
//     for(let i = 0; i < str.length; ++i){
//         hello = str[i] + hello;         // Rückwärts zusammenfügen, weil es durch das let hello ans Ende gerückt wird und von hinten aufgefüllt wird. Ansonsten kannst du auch dekrementieren in der for Loop,



//     }
//     return hello;
// }

// console.log(reverseString("David"));



// Turn every element in an array into 0 

// function convertToZeros(arr){
//     let zeros = [];
//     for(let i = 0; i < arr.length; ++i){
//             zeros[i] = 0;

//     }

//     return zeros;
// }

// console.log(convertToZeros([1, 2, 3, 4, 5]));

//SECOND SOLUTION WITH FILL

// function convertToZeros(arr){
//     return new Array(arr.length).fill(0);
// }

// console.log(convertToZeros([1, 2, 3, 4, 5]));


//  THIRD SOLUTION WITH ARRAY.MAP

// function convertToZeros(arr){
//     return arr.map(elem => elem * 0);


// }

// console.log(convertToZeros([1, 2, 3, 4, 5]));

//  Filter out all the apples

// function removeApples(arr){
//     let withoutApples = [];
//     for(let i = 0; i < arr.length; ++i){
//         if(arr[i] !== "Apple") {
//             withoutApples.push(arr[i]);


//         }
//     }
//     return withoutApples;

// }

// console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));

// SECOND SOLUTION USING FILTER

// function removeApples(arr){
// return arr.filter(elem => elem !== "Apple")
// }

// console.log(removeApples(["Banana", "Apple", "Orange", "Apple"]));

// Filter out all the falsy values


// function filterOutFalsy(arr){
//     let noFalsy= [];
//     for(let i = 0; i < arr.length; ++i){
//         if (!!arr[i] === true ) {
//             noFalsy.push(arr[i]);

//         }
//     }
//     return noFalsy;
// }

// console.log(filterOutFalsy(["", [], 0, null, undefined, "0"]));

// Truthy to true, Falsy to false: convert the value into its boolean value.

function convertToBoolean(arr){
    return arr.map(elem => !!elem)

}

console.log(convertToBoolean(["", NaN, 500, null, false, 0]));