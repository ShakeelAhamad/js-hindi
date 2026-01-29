//singleton

//object literals
const mySym = Symbol("key1");
const JsUser = {
    name:"shakeel",
    "full name" : "Shakeel Ahamad",
    age:20,
    [mySym]:"mykey1",
    location:"Ahamedabad",
    email:"shakeel@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
};

// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// JsUser.email = "shakeel@chatgpt.com";
// console.log(JsUser);
// Object.freeze(JsUser);
// JsUser.email = "shakeel@appbets.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
