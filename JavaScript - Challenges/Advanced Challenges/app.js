// Show Rating
    //given a rating, display a star * for each full rating and a full-stop . for each half rating 

    // function showRating(rating) {
    //     let ratings= "";
    //     for(let i = 0; i < Math.floor(rating); ++i){
    //         ratings = ratings + "*"
    //         if (i !== Math.floor(rating) - 1){
    //             ratings = ratings + " ";
    //         }
    //     }
    //     if(!Number.isInteger(rating)){
    //         ratings = ratings + " .";
    //     }
    //     return ratings;
    // }

    // console.log(showRating(.5));



    // Sort by lowest to highest price 

    // function sortLowToHigh(numbers){
    //     return numbers.sort((a, b) => a - b);

    // }

    // console.log(sortLowToHigh([1, 5, 0, 10, 4]));

    //  Sort by highest to lowest Price

    // function sortHightoLow (numbers) {
    //     return numbers.sort((a, b) => b.price - a.price);

    // }

    // console.log(sortHightoLow([{id: 1, price: 50}, {id: 2, price: 30}, {id: 3, price: 60}, {id: 4, price: 10}]));



    // Promises


    // Find all the posts by a single user 


// async function postsByUser(userId) {
// const promise =  await fetch("https://jsonplaceholder.typicode.com/posts");

// const result = await promise.json(); // die Backend Daten zu Usern werden mittels json für das Frontend lesbar  und somit für uns nutzbar gemacht. 

// const posts = result.filter(element => element.userId === userId);

// console.log(posts);


// }


//     postsByUser(4);


// First 6  Incomplete Todos. Return the first 6 incomplete todos from the result.

// async function firstSixIncomplete(incompleted) {
//     const promise = await fetch ("https://jsonplaceholder.typicode.com/todos");

//     const result = await promise.json();

//     const incompleteTasks =  result.filter(element => !element.completed).slice(0, 6);
    

//     console.log(incompleteTasks);


// }




// firstSixIncomplete(6);