// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = 101;
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// const regularUser = {
//     email:"some@gmail.com",
//     fullname : {
//         userfullname:{
//             firstname:"Shakeel",
//             lastname:"Ahamad"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
// const obj3 = {obj1,obj2};
// console.log(obj3);//Output => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);//Output => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// const obj3 = {...obj1,...obj2};
// console.log(obj3);//Output => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const users = [
    {
        id:1,
        email:"s@gmail.com"
    },
    {
        id:2,
        email:"s2@gmail.com"
    },
    {
        id:3,
        email:"s3@gmail.com"
    },
    {
        id:4,
        email:"s4@gmail.com"
    }
]

// console.log(users[1].email);
// console.log(tinderUser);//Output => { id: 101, name: 'Sammy', isLoggedIn: false }
// console.log(Object.keys(tinderUser));//Output => [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));//Output => [ 101, 'Sammy', false ]
// console.log(Object.entries(tinderUser));//Output => [ [ 'id', 101 ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//true


const course = {
    username:"js in hindi",
    price:299,
    courseInstructor:"Shakeel"
}
// course.courseInstructor
const {username,courseInstructor:instructor} = course;
console.log(instructor);
