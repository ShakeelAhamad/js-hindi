const name = "Shakeel "
const repocount = 10
//console.log(name + repocount);
console.log(`Hello My name is ${name} and my repo count is ${repocount}`);

const gameName = new String("Shakeel-HC-com-pt");
// console.log(gameName[0]); //Output => S
// console.log(gameName.__proto__);//Output => {}
// console.log(gameName.length);//Output => 7
// console.log(gameName.toUpperCase());//Output => SHAKEEL
// console.log(gameName.charAt(2));//Output => a
//console.log(gameName.indexOf('k'));//Output => 3
const newString = gameName.substring(0,3);
//console.log(newString); //Output => Sha
const anotherString = gameName.slice(-10,3);
// console.log(anotherString); //Output => Sha
const newStringOne = "   Shakeel     ";
console.log(newStringOne);
// console.log(newStringOne.trim());

//const url = "https://shakeel.com/shakeel%20ahamad"
// url.replace('%20','-');
// console.log(url.replace('%20','-'));
console.log(url.includes('shakeel'));
console.log(gameName.split('-'))