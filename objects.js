// const user = {
//     name:"Amar Kumar Shaw",
//     age:24
//  }


//  console.log(user)

// Question 1 : What will be the output of this object in JavaScript 
// const func = (function (a){
//     delete a;
//     return a;

// })(5)
// console.log(func);


// Key of the object in JavaScript 
// const user = {
//     name:"Amar Kumar Shaw",
//     age:24,
// }


// for (key in user){
//     console.log(key)
// }

// for (key in user){
//     console.log(user[key])
// }

// Question 3 
// const obj ={

//     a:"one",
//     b:"two",
//     a:"three"

// }

// console.log(obj)

// Question 4: Create function multiplyByTwo(obj) that multiplies
// all numeric property of nums by 2

// let nums = {
//     a:100,
//     b:200,
//     title:"My nums"
// }
// multiplyNumeric(nums);

// function multiplyNumeric(obj){
//     for (key in obj){
//         if(typeof obj[key] === "number"){
//             obj[key] *= 2
//         }
//     }
    
// }
// console.log(nums)


// Question 5: What is JSON.stringify vs JSON.parse

const user ={
    name:"Amar",
    age:24
}

const strObj = JSON.stringify(user)
console.log(strObj);
console.log(JSON.parse(strObj));



