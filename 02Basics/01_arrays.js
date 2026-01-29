//Array
const myArray = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagrag"]
const myArr2  = new Array(1,2,3,4,5);
// console.log(myArr2);//Output => [ 1, 2, 3, 4, 5 ]

//Array methode
// myArray.push(6);//The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
// console.log(myArray);//Output [ 1, 2, 3, 4, 5 ]
// myArray.pop();//The pop() method of Array instances removes the last element from an array and returns that element. This method changes the length of the array.
// console.log(myArray.pop());//Output is => 4
// console.log(myArray);//output => [0,1,2,3,4]
// myArray.unshift(8);//The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.
// console.log(myArray);//output [8, 0, 1, 2,3, 4, 5]
// myArray.shift();//The shift() method of Array instances removes the first element from an array and returns that removed element. This method changes the length of the array.
// console.log(myArray);//output =>  1, 2, 3, 4, 5 ]
// console.log(myArray.includes(9));//output => false
// console.log(myArray.indexOf(9));//output =>  -1 
// console.log(myArray.indexOf(22));//output =>  1 

// const newArr = myArray.join();//all value convert is string
// console.log(newArr);//output => 0,22,2,3,4,5

// slice,splice
console.log("A ",myArray);
const myn1 = myArray.slice(1,3);
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1,3);
console.log("C ",myArray);
console.log(myn2);