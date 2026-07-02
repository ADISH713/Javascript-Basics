const local = {name:'Adish',place:'calicut'};
localStorage.setItem("user",JSON.stringify(local));

const x = JSON.parse(localStorage.getItem("user"));
console.log(x.name);