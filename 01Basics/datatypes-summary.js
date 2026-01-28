//Primitive DataType
// 7 DataType
// 1) String => ('Shakeele'),
// 2) Number => (100,100.3),
// 3) Boolean  => (true/false),
// 4) null => (iska matlab hai empty or zero nahi hai),
// 5) undefined => (aapne variable declare kardiya hai but usmein app kya valu dalenge aapne decide nhi kiya hai),
// 6) Symbol => (kisi bhi value ko unique banane ke liye use kiya jata hai),
// 7) BigInt => (jo badi valuse hoti hai oo hum BigInt mein use karte hai)
//Example
const score = 100 //DataType (Number)
const scoreValue = 100.3 //DataType (Number)
const isLoggedIn = false //DataType (Boolean)
const outsideTemp = null //DataType (null)
let userEmail;
const id = Symbol('123');
const anotherId = Symbol('123'); //DataType (Symbol)
//console.log("ID:",id); //Output => Symbol(123)
//console.log("anotherId:",anotherId); //Output => Symbol(123)
//console.log(id === anotherId) //Output => false
const bigNumber = 325464588958987545754 //DataType (BigInt)

//Reference Type (Non primitive)

// DtatType 
// 1) Array => ([]),
// 2) Objects ({}),
// 3) Functions (function(){}),
//Example
const heros = ["shaktiman","naagraj","doga"]; //DataType (Array)
let myObj = {
    name: "Shakeel Ahamad",
    age:20
} //DataType (Objects)

const myFunction = function(){
    console.log("Hello World");
} //DataType (Functions)  

//console.log(typeof myFunction) //Output => function;
//console.log(typeof myObj) //Output => object;
//console.log(typeof heros) //Output => object;
// https://262.ecma-international.org/5.1/#sec-11.4.
