
//         Function declaration

// function sayHi(){
//     console.log("Hello");
// }
// sayHi();


        // Function Expression
    
// const greet = function(){
//     return "good morning";
// }
// console.log(greet());

// const greet = (greet) => "Goodmorning";
// console.log(greet());

// const add = (a,b) => a+b;
// console.log(add(2,3));

// const squa = x => x*x;
// console.log(squa(5));

        // this 

// const greet = {
//     name : 'Adish',
//     x : function(){
//         console.log(`I am ${this.name}`)
//     },
//     y : ()=>{
//         console.log(`I am ${this.name}`)
//     }

//     }
// greet.x();
// greet.y();


        // CALLBACK Function

// function calc(num1,num2,mathop){
//     return mathop(num1,num2);
// }
// const add = (num1,num2) => num1+num2;
// const mult = (num1,num2) => num1*num2;

// console.log(calc(2,5,add));
// console.log(calc(17,2,mult));

        // IIFE

// (function(){
//     const x = "Hello world";
//     console.log(x);
// })
// ();

// (function (name){
    
//     console.log(`${name} is gay`);
// } )
// ("Rashik");


// const globalVar = "I am global";

// function outer() {
//   const outerVar = "I am in outer";

//   function inner() {
//     const innerVar = "I am in inner";
//     // Accessible via the scope chain
//     console.log(innerVar); 
//     console.log(outerVar); 
//     console.log(globalVar); 
//   }
//   inner();
// }
// outer();

            // CLOSURE

//         function createCounter() {
//   let count = 0;

//   return function() {
//     count++; 
//     return count;
//   };
// }

// const counter = createCounter(); 

// console.log(counter());  
// console.log(counter()); 
// console.log(counter()); 

// function createAc(initialBal){
//     let balance = initialBal;
//     return{
//         deposit: function (amount){
//             balance += amount;
//             console.log(`Deposited: ${amount}. New balance:${balance} `);
//         } ,
//         checkBal : function (){
//             console.log(`Your current balance is ${balance}`);
//         }
//     }
// }
// const myac = createAc(100);
// myac.deposit(50);
// myac.checkBal();
// myac.deposit(1000);


//                 CURRYING
// function curry(a){
//         return function(b){
//                 return a+b;
//         }
// }

// const logger = (type)=>(message)=>[`${type.toUpperCase()}:${message}`];

// const logErr = logger("Error");
// const login = logger("Info");
// const name = logger("Name");

// console.log(logErr("DataBase not found"));
// console.log(login("Server started"));
// console.log(name("Adish"));


// console.log(curry(5)(15));
                

        // (...Rest) 

// function calcTot(tax,...prices){
//     const tot = prices.reduce((sum,price)=>price+sum,0);
//     console.log(tot+(tot*tax));
// }
// calcTot(0.05,2,4,6,5,7,8,9);


// CALLBACK FUNCTION
// ----------------- 

// function calc (num1,num2,math){
//        return math(num1,num2)
// }
// const add = (num1,num2)=>num1+num2;
// const mult = (num1,num2)=>num1*num2;
// const div = (num1,num2)=>num1/num2;

// console.log(calc(5,70,mult));
