// const airline1 = {
//     airlineName: "StarAir",
//     iataCode: "SA",
//     bookings: [],
//     book(flightNum, passengerName) {
//         console.log(`${passengerName} booked a seat on ${this.airlineName} flight ${this.iataCode}${flightNum}`)
//     }
// };
// airline1.book(239,"john");

// const airline2 = {
//     airlineName : "Eurowings",
//     iataCode: "EW",
//     bookings: [],
// }
// const bookfunction = airline1.book;
// bookfunction.call(airline2,456,"Alice")

// const flightData = [45,"Adish"];
// bookfunction.apply(airline2,flightData);

// const airline3 = {
//   airlineName: "SkyJet",
//   iataCode: "SJ",
//   bookings: []
// };
// const bookSkyJet = bookfunction.bind(airline3);
// bookSkyJet(888, "Charlie Brown");

// const bookFlight999Only = bookfunction.bind(airline3, 999);
// bookFlight999Only("David Miller");



const student = {
    place : 'calicut',
    pin : 673328,
    info (name,work){
        console.log(`Hi,Its me ${name} .I am from ${this.place} pin is ${this.pin} And i am working as ${work}`)
    }
};
student.info("Adish","Developer")


const newStud = {
    place : 'kannur',
    pin : 674455
};
const newInfo = student.info;
newInfo.call(newStud,"Sanjay",".Net")

const newerInfo = ["Rashik","Developer"];
newInfo.apply(newStud,newerInfo)
 
const newestInfo = student.info.bind(newStud);
newestInfo("Mufeeda","fullstack");
