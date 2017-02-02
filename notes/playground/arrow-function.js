// Two major differences between arrow functions and regular functions
// 1. arrow functions have a block scope instead of a function scope
//    Means they dont bind the this keyword to the own function but to the parent function

// 2. For arrow functions the the arguements array doesnt exist

// Both things can lead to problems when creating methods on objects, so 
// its better to use the new ES6 function short hand when creating methods 
// for objects!
// in genereal - if you dont need the this keyword or the arguements keyword 
// then you can use the arrow function without problem 

var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Andrew',
  sayHi: () => {
    console.log(arguments);
    // causes an error (name is undefinded) 
    // because arrow functions dont bind the this keyword to the current function, but 
    // to the parent function - which in this case doesnt exist - so this gets bound to the 
    // global object 
    }
    console.log(`Hi. I'm ${this.name}`);
  },
  // the solution to the this problem is using the ES6 specified functions 
  // short hand - as demonstrated below:
  sayHiAlt () {

    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi(1, 2, 3);
