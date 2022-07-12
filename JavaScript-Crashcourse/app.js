//  DRY - Don't Repeat Yourself 
// Functions






// Function Definition



function welcomePersonToFES(name) {

console.log(`Welcome to FES, ${name}`);


}





// // Call the function

// welcomePersonToFES("David");
// welcomePersonToFES("Zen");
// welcomePersonToFES("Mitri");



// function sumOfTwoNumbers(num1, num2){   // num1, num2 --> Parameter
//     return num1 + num2
// }
// console.log(sumOfTwoNumbers(10, 10)); // 10, 10  --> arguments 



// Excercise with functions and returns


//Create a function that converts Celsius to Fahrenheit
//Celsius to Fahrenheit formula: F = C x 1.8 + 32

// function convertCelsiusToFahrenheit(num1, num2, num3) {
//     return num1 * num2 + num3
// }

// console.log(convertCelsiusToFahrenheit(0, 1.8, 32));
// console.log(convertCelsiusToFahrenheit(10, 1.8, 32));
// console.log(convertCelsiusToFahrenheit(30, 1.8, 32));


// OR BETTER


// function convertCelsiusToFahrenheit(celsius){
//    return  celsius * 1.8 + 32
     
// }

// console.log(convertCelsiusToFahrenheit(10));




// OR ARROW

// const convertCelsiusToFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32

// }
// console.log(convertCelsiusToFahrenheit(0));



// ARRAYS





//   First element of array;

// console.log(arr[0])

// last element of array;

// console.log(arr[arr.length - 1]);



//add element onto end of array:


// arr.push(200);

// let arr = [20, 30, 40 , 50 , 100];

// // Shortcut for 1 element you want to cheeck to go through one condition 
// let newArr = arr.filter(element =>  element < 50)

// console.log(newArr);


// //Excercise for Arrays:
// //Filter out all the "Fail" elements in an array
// //["A+", "FAIL"] => ["A+", "A"]
// // ["FAIL", "FAIL", "B"] => ["B"]
// // ["FAIL"] => []

// let grades = ["FAIL"]

// let newGrades = grades.filter(element => element !== "FAIL")

// console.log(newGrades);


let grades= ["A+", "A", "FAIL"]; 
