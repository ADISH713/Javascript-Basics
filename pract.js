// function bigWord(str){
//     const words = str.split(" ");
//     let longest = "";
//     for(let word of words){
//         if(word.length > longest.length){
//             longest = word;
//         }
//     }
//     console.log(longest);
// }
// bigWord("I adish jacob");


// function notA(students){
//     return students.filter(student => student.grade !=="A") .map (student => student.name);
// }
// const studentArray = [
//     { name: "Alice", grade: "A" },
//     { name: "Bob", grade: "B" },
//     { name: "Charlie", grade: "D" },
//     { name: "David", grade: "C" }
// ];
// console.log(notA(studentArray));



// function lastCap(str){
//     return str.split(" ").map(word =>{
//         const first = word.slice(0,-1);
//         const last = word.slice(-1).toUpperCase();
//         return first+last;

//     }).join(" ")
// }
// console.log(lastCap("I am Adish"))



// function Bylen (arr,num1,num2){
//     return arr.filter(str => str.length > num1 && str.length < num2);
// }
// console.log(Bylen(["i","am","Adish","how","are","guyssss"],2,8));

// function vow(str){
//     const vowels = ['a','e','i','o','u'];
//     let count = 0;
//     for (i of str){
//         for(j of vowels){
//             if(i==j){
//                 count++;
//             }
            
//         }

//     }
//     console.log(count);
// }
// vow("i am adish");

// function vow(str){
//     const vowels = ['a','e','i','o','u'];
//     let count = 0;
//     for(i of str.toLowerCase()){
//         if(vowels.includes(i)){
//             count++;
//         }
//     }
//     console.log(count);
// }
// vow("i am adIsh");



// function getTopStudents(arr,cutoff){
//     return arr.filter(student=>student.score >= cutoff)
//     .map(student => student.name)
// }
// const classList = [
//   { name: "Anna", score: 85 },
//   { name: "Ben", score: 70 },
//   { name: "Chloe", score: 92 },
//   { name: "Dan", score: 60 }
// ];
// console.log(getTopStudents(classList, 80));


// function maskWord(word){
//     const lword = word.slice(-3);
//     console.log(lword.padStart(word.length,"#"));

// }
// maskWord("programming");


// function filterByType(arr, type){
//     for (i of arr){
//         let x = typeof i;
//         if(type == x){
//             console.log(i)
//         }
//     }
// }
// filterByType([1, "hello", true, 42, "world"], "number");


// function filterByType(arr, type){
//     return arr.filter(item => typeof item === type);
// }
// console.log(filterByType([1, "hello", true, 42, "world"], "string"));


// function value (obj){
//     let tot = obj.reduce((sum,item)=>{
//         return sum+item.price;
//     },0);
//     console.log(tot);
//     let names = obj.map(products => products.name);
//     console.log(names);
//     let totPrice = obj.map((items)=>{
//         return (items.qty*items.price);
//     });
//     let hprice = totPrice.filter((items)=>{
//         return items>3000;
//     });
//     console.log(hprice);
//     let name = obj.map(items=>{
//         return{
//          name : items.name,
//          total : (items.price*items.qty)
//         }
//     })
//     console.log(name);

// }

// const cart = [
//   { id: 1, name: "Phone", price: 20000, qty: 2 },
//   { id: 2, name: "Mouse", price: 500, qty: 3 },
//   { id: 3, name: "Keyboard", price: 1500, qty: 1 },
// ];
// value(cart);




// const users = [
//   { id: 1, name: "Arjun", age: 22, isActive: true, marks: 80 },
//   { id: 2, name: "Sara", age: 17, isActive: false, marks: 65 },
//   { id: 3, name: "Rahul", age: 25, isActive: true, marks: 90 },
//   { id: 4, name: "Neha", age: 19, isActive: true, marks: 45 },
//   { id: 5, name: "Aman", age: 16, isActive: true, marks: 70 }
// ];
// function Mufeeda (obj){
//     let x = obj.filter(items=> items.age>=18);
//     let xage = x.map(items=>items.age);
//     let xname = x.map(items=>items.name);
//     console.log(xname);
//     let y = x.reduce((sum,item)=>{
//         return sum + item.age;
//     },0);
    
//     let avg = y/obj.length;
//     console.log(avg);
//     let newprop = obj.map(items =>{
//         return{
//             ...items,
//             state:'kerala'
//         }
//     });
//     console.log(newprop);
//   let topScore = Math.max(...xage);
//   console.log(topScore);
// }
// Mufeeda(users);

// function objectToArr(obj){
//     return Object.entries(obj);
// }
// console.log(objectToArr({name:"adish"}));




