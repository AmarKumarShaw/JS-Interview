// Question 1: 

// Answer 
// function sum (a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(sum(2)(6)(1))

// Question 2  : 
//  evaluate("sum")(4)(2) => 6
//  evaluate("multiply")(4)(2) => 8
//  evaluate("divide")(4)(2) => 2 


// function evaluate(operation){
//     return function(a){
//             return function(b){
//                     if (operation  == "sum") return a+b
//                     if (operation == "subtract") return a-b                       
//                     if (operation == "divide") return a/b
//                     if  (operation == "multiply") return a*b
//                     else return "Invalid Operation"   
//                 }
//             }
// }
// console.log(evaluate("multiply")(4)(2))


// Currying in JavaScript 
// Question 3 : Infinite Currying ->  sum(a)(b)(c)...(n)
// sum(5)(2)(4)(8)()


// Solutions 
// function sum(a){
//     return function(b){
//         if(b) return sum(a+b);
//         else return a;
//     }
// }



// console.log(sum(5)(2)(4)(8)())

// Question 4 : Currying vs Partial Application 
// function sum(a){
//     return function (b,c){
//             return a+b+c
//     }
// }

// const x = sum(10);
// console.log(x(5,3));
// console.log(x(10,3));

// console.log(sum(20)(1,4))

// Question:6 curry implementation
// Convert f(a,b,c) into f(a)(b)(c) 

// The most important 

// Convert a normal Function to a curried function 
// function curry(func){
//     return function curriedFunc (...args){
//         console.log(args)
//         if (args.length >= func.length){
//             console.log(...args)
//             return func(...args)
            
//         }else {
//             return function(...next){
//                 return curriedFunc(...args,...next)
//             }
//         }
//     }
// }

// const sum = (a,b,c,d) => a+b+c+d;

// const totalSum = curry(sum)

// console.log(totalSum(1)(6)(5)(6));

// function curry(func){
//     return function curriedFunc(...args){
//         if(args.length >= func.length){
//             return func(...args)
//         }
//         else{
//             return function (...next){
//                 return curriedFunc(...args,...next)
//             }
//         }
//     }
// }
function curry(func){
    return function curriedFunc(...args){
        if(args.length >= func.length){
            return func(...args)
        }else{
            return function(...next){
                return curriedFunc(...args,...next)
            }
        }
    }
}


// const sum = (a,b,c,d) => a+b+c+d

// const totalSum = curry(sum)
// console.log(totalSum(1)(5)(6)(8))

