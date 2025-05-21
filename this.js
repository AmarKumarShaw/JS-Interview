//   Normal function: Has its own this context, which is dynamically determined based on how the function is called.

// Arrow function: Inherits this from the enclosing lexical scope; it does not have its own this.
  
/* 
===========================
📌 JavaScript `this` Keyword Explained with Output
===========================
*/

// 1. Global Context (non-strict mode)
console.log("1. Global context (non-strict):", this); // Window (in browsers)

// 2. Global Context (strict mode)
"use strict";
console.log("2. Global context (strict):", this); // undefined

// 3. Regular Function
function show() {
  console.log("3. Regular function:", this);
}
show(); // Window or undefined in strict mode

// 4. Object Method
const user1 = {
  name: "Alice",
  greet() {
    console.log("4. Inside object method:", this.name);
  }
};
user1.greet(); // Alice

// 5. Callback Losing this
const user2 = {
  name: "Bob",
  greet() {
    setTimeout(function () {
      console.log("5. setTimeout regular function:", this.name);
    }, 100);
  }
};
user2.greet(); // undefined (this is not user2)

// 6. Arrow Function Fix
const user3 = {
  name: "Carol",
  greet() {
    setTimeout(() => {
      console.log("6. setTimeout arrow function:", this.name);
    }, 100);
  }
};
user3.greet(); // Carol

// 7. Constructor Function
function Person(name) {
  this.name = name;
}
const p = new Person("John");
console.log("7. Constructor function:", p.name); // John

// 8. call() Method
function greetCall() {
  console.log("8. Using call():", this.name);
}
const person1 = { name: "Emma" };
greetCall.call(person1); // Emma

// 9. apply() Method
function greetApply(age) {
  console.log("9. Using apply():", this.name, age);
}
const person2 = { name: "Liam" };
greetApply.apply(person2, [30]); // Liam 30

// 10. bind() Method
function greetBind() {
  console.log("10. Using bind():", this.name);
}
const person3 = { name: "Olivia" };
const boundFunc = greetBind.bind(person3);
boundFunc(); // Olivia

// 11. Arrow Function Inside Object (not recommended)
const user4 = {
  name: "Noah",
  greet: () => {
    console.log("11. Arrow function in object:", this.name);
  }
};
user4.greet(); // undefined

// 12. Arrow Function Inside Method (good practice)
const user5 = {
  name: "Ava",
  greet() {
    const inner = () => {
      console.log("12. Arrow inside method:", this.name);
    };
    inner();
  }
};
user5.greet(); // Ava

/*
===========================
✅ Summary
===========================
- Global scope: `this` = window (non-strict), undefined (strict)
- Regular function: `this` = global or undefined
- Method in object: `this` = object
- Arrow functions: inherit `this` from enclosing scope
- `call()`, `apply()`, `bind()` used for explicit binding
- Arrow functions are best used inside methods for `this` binding
*/

