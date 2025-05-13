// Question:1 Output Based question on console.log 

// let count = 0;

// (function printCount(){
//     if(count ==0){
//         let count=1; //shadowing
//         console.log(count); //1
//     }
//     console.log(count) // 1
// })()

// Question 2: Closure in JavaScript 
// Ques 2 :  Write a function that would allow you to do this 
// function createBase(num){
//     return function addSix(num1){
//             return num + num1
            
//     }
// }


// var addSix = createBase(6);
// addSix(10); //return 16 
// addSix(21); // return 27

// console.log(addSix(21))

// Ques 3 : Time Optimization with Closure 

// Question 4 : Block Scope and setTimeout on Closures 

// It will print only 3  theree times 
// function a(){
//     for (var i=0;i<3;i++){
//         setTimeout(function log(){
//             console.log(i) //What is logged ?
//         },1000)
//      }
// }
// a();

// It will print in order 

// function a(){
//     for (let i=0;i<3;i++){
//         setTimeout(function log(){
//             console.log(i) //What is logged
//         },1000)
//     }
// }
// a();

// Do it using var only 
    // for(var i=0;i < 3; i++){
    // function inner(i){
    //         setTimeout(function log(){
    //             console.log(i)
    //         },i*1000)
    //     }
    //     inner(i)
    // }



    // Ques 5: Creating a Private Counter 
    // function counter (){
    //     var _counter = 0;
    //     console.log(_counter)
    //     function add(increment){
    //             _counter += increment;
    //             console.log(_counter)
    //     }
    //     function retrive(){
    //         return "Counter =" + _counter
            
    //     }

    //         return {add,retrive}

    //     }
    //     const c = counter()
    //     c.add(5)



// function counter(){
//     var counter = 0;
//     console.log(counter,"External Counter")
//     function add(increment){
//         counter += increment
//         console.log(counter, "Add Counter")
//     }
//     function retrive(decrement){
//         counter -= decrement
//         console.log(counter,"Reduce Counter")
//     }
//     return {add,retrive}
// } 

// const c =counter()
// c.add(5)
// c.retrive(3)

// Ques 7 : Make this run only once 

// let view;
// function likeTheVideo(){
//     let called = 0;
//     return function (){
//         if(called > 0){
//             console.log("Already called this function")
//         }
//         else{
//             view = "This is the first time running "
//             console.log("Subscribe", view)
//             called++ ;
//         }
//     }
// }

// let isSubscribed = likeTheVideo()
// isSubscribed()
// isSubscribed()
// isSubscribed()
// isSubscribed()

// Ques 9 : Running the function only once in Polyfill
// function once(func,context){
//     let ran;
//     return function(){
//         if(func){
//             ran = func.apply(context || this, arguments);
//             func = null;
//         }
//         return ran;
//     }
// }

// const hello = once((a,b)=>console.log("once",a,b))

// hello(1,2)
// hello()
// hello()
// hello(3,2)

// // Explanation: So here the thing is we searching the func san saving in ran and make it making function null so 
// // it cannot be re run by the things