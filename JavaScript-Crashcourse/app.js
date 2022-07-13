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

// same excercise as above but without filter method 
// let grades= ["A+", "A", "B+", "FAIL"]; 
// let goodGrades = [];

// for (let i = 0; i < grades.length; ++i) {
//     if(grades[i] !== "FAIL") {
//     goodGrades.push(grades[i]);

//     }
// }

// console.log(goodGrades);


// let arr = [1, 4, 9, 16];

// let newArray = arr.map(element => "dog")

// console.log(newArray);

// EXCERCISE : Turn each element in an array of dollars into cents

// let dollars = [1, 5, 10, 3];
// let cents = [];


// for(let i = 0; i < dollars.length; ++i) {
//     cents.push(dollars[i] * 100);
// console.log(cents);
// }


    









//without using the map method 

// let cents = dollars.map(element => element * 100 )

// console.log(cents);


// let dollarss= [0, 10, 20];

// let centss = dollarss.map(element => element * 100);

// console.log(centss);


// let userFirstName = "David";
// let unserLastName = "Bragg";
// let userDiscordId = "David Brag#0001";
// let userSubscriptionStatus = "VIP";

// let users = [
//     {
//     username: "David", 
//     email: "david@frontendsimplified.com",
//     password: "test123",
//     subscriptionStatus: "VIP",
//     discordId: "David Brag#0001",
//     lessonsCompleted:[0, 1]
// }, 
// {
//     username: "Mitri", 
//     email: "mitri@frontendsimplified.com",
//     password: "mitri123",
//     subscriptionStatus: "VIP",
//     discordId: "Mitri #0001",
//     lessonsCompleted:[0, 1, 2, 3],
// }

    // ];

    // function login(email, password) {
    //     for (i = 0; i < users.length; ++i){
    //         if(users[i].email === email){
    //             console.log(users[i]);
    //             if(users[i].password === password){
    //                 console.log("log the user in - the details are correct");
    //             }
    //             else{
    //                 console.log("password is incorrect -try again")
    //             }
    //             return;
    //         }
    //     }
    //     console.log("could not find an email that matches");
    
    // }

    // login("david@frontendsimplified.com", "wrong Password");


    // Create a register function that accepts:
    // username, email, password, subscriptionStatus, discordId, lessonsCompleted
    // Inside your register function: 1. create a user object, 2. push this user object onto the "users" array


//     function register(user) {
//     users.push(user);
//  }



//     register({
//     username: "chris",
//     email: "chris@frontendsimplified.com", 
//     password : "testi123",
//     subscriptionStatus: "VIP",
//     discordId: "Chris #0001",
//     lessonsCompleted: [0, 1, 2, 3, 4, 5, 6]
// });

//     // log in new user
//     console.log(users);



//DOM
//First way of accessing an element
// console.log(document.querySelector("h1"));


//Second way of accessing an element

// console.log(document.getElementById("title"));


// Change String in Element 

document.querySelector(".title").innerHTML ="Frontend Simplified";


// Change CSS

document.querySelector(".title").style.fontSize = "24px";

function changeTitleToRed(){
    document.querySelector(".title").style.color = "red"
    console.log("clicked");
}


