const score = 400
const balance  = new Number(100);
// console.log(score);//output => 400
// console.log(balance);//output => [Number: 100]
// console.log(balance.toString());//output => 100
// console.log(balance.toFixed(2));//output => 100.00
// console.log(balance.toPrecision(2));//output => 1.0e+2
// console.log(balance.toExponential(2));//output => 1.00e+2
// console.log(balance.toLocaleString(2));//output => 100
// console.log(Number.isInteger(score));//output => true
// console.log(Number.isInteger(balance)); //output => false

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));//output => 123.9
const hundreds = 1000000
// console.log(hundreds.toLocaleString())//Output => 1,000,000
// console.log(hundreds.toLocaleString('en-IN'))//Output => 10,00,000

//++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++
// console.log(Math);//Output => Object [Math] {}
// console.log(Math.abs(-1)); //Output =>1
// console.log(Math.round(4.6));//Output =>5
// console.log(Math.ceil(4.2));//Output =>5
// console.log(Math.floor(4.9));//Output =>4
// console.log(Math.min(4,3,6,8));//Output =>3
// console.log(Math.max(4,3,6,8));//Output =>8

// console.log(Math.random());//this output hamesa to hamesa 1 ke beach value aata hai => 0.9175647807346783
// console.log((Math.random()*10) + 1)//Hamesa he value 0 si jayad aayega = output => 5.701011749733635
// console.log(Math.floor(Math.random()*10) + 1)//floor use tha output is = output => 7

const max = 20;
const min = 10;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNumber);//output => 17

