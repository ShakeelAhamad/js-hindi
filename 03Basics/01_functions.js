

function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("K");
    console.log("E");
    console.log("E");
    console.log("L");
}
// sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3,"2");
// console.log("Result :",result);

function addTwoNumbers(number1,number2){
    const result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3,2);
// console.log("Result :",result);
function loginUserMessage(username="Sam"){
    // if(username == undefined){
    //     console.log("Please enter a username");
    //     return;
    // }
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(loginUserMessage("Shakeel"));
// function calculateCartPrice(value1,value2,...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,100,300,400,500));//output = [ 200,100,300]

const user = {
    username:"Shakeel",
    price:200
}
function handleObject(anyObject){
   console.log(`User is ${anyObject.username} and price is ${anyObject.price}`)
}
handleObject(user);

const myNewArray = [200,4000,1000,600];
function returnSecondValue(getArray){
    return getArray[3]
}
// console.log(returnSecondValue(myNewArray));