// Code your solutions in this file


// //  //          debugging()
// //  //                                                                        nextNote()

// const number = 10;

// function addTwoNumbers(a, b) {
//    a + b;
// }

// function multiplyByTwo(n) {
//     number * 2;
// }
// console.log(multiplyByTwo(addTwoNumbers(1, 3))); //=> undefined(?!)
// console.error("use a return for functions")

// const family = {
//     mother: {
//       firstName: "Susan",
//       lastName: "Doyle",
//       age: 32,
//     },
//     father: {
//       firstName: "John",
//       lastName: "Doyle",
//       age: 33,
//     },
//     daughter: {
//       firstName: "Lily",
//       lastName: "Doyle",
//       age: 5,
//     },
//     son: {
//       firstName: "Mike",
//       lastName: "Doyle",
//       age: 8,
//     },
//   };
//   console.table(family)


// //  //          debugging()
// //  //                                                                        nextNote()

// for ([initialization]; [condition]; [iteration]) {
//     [loop body]

// for (let age = 30; age < 45; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }


// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

//const name = ["Charlie", "Samip", "Ali"]

const messages =[ ]
function writeCards(name, eventName) {
    for (let i = 0; i < name.length; i++){
        messages.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
        debugger;
    }
      return messages
 }//writeCards(name) 

let startNumber = 10

function countDown(startNumber){
  let i = 0
  while (startNumber >= 0){
  console.log(startNumber--)
  debugger;
  }
  return startNumber
}