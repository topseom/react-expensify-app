//
// Object Destructuring
//

// const person ={
//     name: 'Monchai',
//     age: 22,
//     location: {
//         city: 'Thailand',
//         temp: 92
//     }
// };

// const {name :firstName = "Anonymous",age} = person;
// console.log(`${firstName} is ${age}.`);

// const { city,temp:temperture } = person.location;
// if(city && temperture){
//     console.log(`It's ${temperture} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holidy',
//     publisher:{
//         name:'Penguin'
//     }
// };

// const {name:publisherName = "Self-Published"} = book.publisher;

// console.log(`${publisherName}`);


//
// Array Destructuring
//

const address = ['1299 S Juniper Street','Philiophia','Pennsylvanie','19582'];
const [street,city,state ="New York",zip] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];
const [title,small,medium,big] = item;
console.log(`A medium ${title} costs ${medium}`);