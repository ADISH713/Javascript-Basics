// const contact = new Map();
// contact.set("Adish",7559087713);
// contact.set("Shamil",7559087714);
// contact.set("Rashik",7559087715);
// let check = contact.has("Shamil");
// console.log(check);
// let del = contact.delete("Rashik");
// console.log(contact);
// console.log(contact.size);



// function countWords(str){
//     const freq = new Map();
//     let words = str.toLowerCase().split(" ");
//     for(word of words){
//         if(freq.has(word)){
//             freq.set(word,freq.get(word)+1);
//         }
//         else{
//             freq.set(word,1);
//         }
//     }

//     console.log(freq)
// }


countWords("The cat chased the mouse and the cat won")

function countWords(str){
    const res = new Map();
    const words = str.toLowerCase().split(" ");
    for(word of words){
        if(res.has(word)){
            res.set(word,res.get(word)+1)
        }
        else{
            res.set(word,1);
        }
    } 
    console.log(res);
}

