// function getUniqueUsers(logs){
//     let sorted = logs.sort();
//     let set = new Set();
//     for(i of sorted){
//         set.add(i);
//     }
//     console.log([...set]);



    

// }

// getUniqueUsers(['alice', 'bob', 'alice', 'charlie', 'bob'])


// function getIntersection(arr1, arr2){
//     const res = new Set();
//     for(i of arr1){
//         for(j of arr2){
//             if(i==j){
//                 res.add(i);
//             }
//         }
//     }
//     console.log(res);
// }



// getIntersection([1, 2, 2, 1], [2, 2, 3])


// function getIntersection(arr1,arr2){
//     const res = new Set(arr1);
//     const x = new Set();
//     for(i of arr2){
//         if(res.has(i)){
//             x.add(i)
//         }
//     }
//        console.log(x);
// }

const nums = [3,1,11,6,15];
let target = 9;
const map = new Map();
for(i=0;i<nums.length;i++){
    const val = nums[i];
    const com = target - val;
    if(map.has(com)){
        console.log([map.get(com),i]);
    }
    map.set(val,i);
}

