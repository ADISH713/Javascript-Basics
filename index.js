const arr = ['apple','banana','grapes']

// PUSH
// let fruits = arr.push('orange','mango');
// console.log(fruits);

// POP
// let fruits = arr.pop();
// console.log(arr);
// console.log(fruits);

// SHIFT
// let fruits = arr.shift();
// console.log(arr);
// console.log(fruits);

// UNSHIFT
// let fruits = arr.unshift('orane','mango');
// console.log(arr);
// console.log(fruits);

// SLICE
// let fruits = arr.slice(1,3);
// let fruits = arr.slice(-2);
// console.log(fruits);
// console.log(arr);

// const arr = ['apple','banana','grapes']


     // SPLICE

//REMOVING
// let fruits = arr.splice(1,1);
// console.log(fruits);
// console.log (arr);

// INSERTING
// let fruits = arr.splice(2,0,'mango','orange');
// console.log(fruits);
// console.log(arr);

// REPLACING
// let fruits = arr.splice(1,1,"orange");
// console.log(fruits);
// console.log(arr);

//   DELETE
// let del = delete arr[1];
// console.log(del);
// console.log(arr);
// console.log(arr[1]);

//    CONCAT
// let wor = ['apple','ball','cat']
// let wor2 = ['dog','elephant']
// let res = wor.concat(wor2,"Rashik");
// console.log(res);

//   indexOf
 const col = ['red','blue','green','orange','blue']
// let ind = col.indexOf('blue');
// let ind2 = col.indexOf('blue',2);
// console.log(ind);
// console.log(ind2);

//  lastIndexOfind
// let ind = col.lastIndexOf('blue');
// let ind2 = col.lastIndexOf('blue',3);
// console.log(ind);
// console.log(ind2);
  

//    Find() & FindIndex()
// let per = [
//      {id:1,name:'ADISH',age:21},
//      {id:2,name:'RASHIK',age:21},
//      {id:3,name:'SANJAY',age:21},
//      {id:4,name:'FATHAH',age:21},
//      {id:5,name:'MUFEEDA',age:21},
// ];
// const res = per.find(person=>person.id==3);
// console.log(res);
// const res1 = per.find(person => person.name == 'ADISH');
// console.log(res1); 
// const findind = per.findIndex(person => person.name == 'FATHAH');
// console.log(findind);

     //  SORTING
// Alphabet sortingorange
// const fruits = ['banana','','apple','mango'];
// fruits.sort();
// console.log(fruits);

// Numeric sort
//  const scores = [25,3,8,56,5];
// scores.sort();
// console.log(scores);
// This will show a broken sort

// scores.sort((a,b) => a-b);
// console.log(scores);
// Ascending order

// scores.sort((a,b)=>b-a);
// console.log(scores);
// Descending order

//    Sorting Object
const student =[
     {id:1,name:'ADISH',age:21},
     {id:2,name:'RASHIK',age:22},
     {id:3,name:'SANJAY',age:23},
     {id:4,name:'FATHAH',age:18},
     {id:5,name:'MUFEEDA',age:26},
];
// student.sort();
// console.log(student);
// Sorted by numeric(id)

// student.sort ((a,b) => a.age - b.age );
// console.log(student);
// sorted by age

// student.sort ((a,b) => {
//      if (a.name<b.name) return -1;
//      if (a.name>b.name) return 1;
//      return 0;
// });
// console.log(student);
// sorted by name

// const num = [1,2,3,4,5,6];
// num.sort(()=> Math.random()-0.5);
// console.log(num);
// // sort by Math.random

// let x = Math.min(1,2,3,4,5,6,7,8)
// let y = Math.max(1,2,3,4,5,6,7,8)
// console.log(x);
// console.log(y);
// math.min & math.max

// math.min and math.max in array
// const ages = [21,43,56,24,98];
// let minage = Math.min(...ages);
// let maxage = Math.max(...ages);
// console.log(minage);
// console.log(maxage);

// const name = ['Adish','Rashik','Sanjay','Mufeeda','Fathah'];
// name.forEach((user,index)=>{
//      console.log(`${index+1}:${user}`)
// });

//           MAP()
// const ob = [{product:'laptop',price:900},
//             {product:'phone',price:400},
// ]
// let x = ob.map(obj =>{
// return `<div class='card'>${obj.product} - ${obj.price}</div>`;});
// console.log(x);

               // FILTER()
// const items = [
//      {name:'apple',stock:3},
//      {name:'orange',stock:5},
//      {name:'grape',stock:9},
//      {name:'cherry',stock:0}
// ];
// let x = items.filter(item => item.stock<=3);
// console.log(x);


//      // REDUCE

// const prod = [
//      {item:'pen',price:20},
//      {item:'book',price:50},
//      {item:'bag',price:720}

// ];
// let x = prod.reduce((total,cItem) =>{
//      return total+cItem.price;
// },0);
// console.log(x);


// const scores = [12,22,43,59,74,64,7,5];
// let filt = scores.filter(score => score>10);
// console.log(filt);
// let map = filt.map(score => score+5);
// console.log(map);
// let total = map.reduce((tot,score)=>tot+score,0);
// console.log(total);