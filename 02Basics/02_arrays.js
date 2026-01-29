const marvel_hereos = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"];
// marvel_hereos.push(dc_heros);
// console.log(marvel_hereos);//Output => [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_hereos[3][2]);
// const allHeros = marvel_hereos.concat(dc_heros);
// console.log(allHeros);//Output =>[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_hereos,...dc_heros];
// console.log(all_new_heros);//Output => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);//Output => [1, 2, 3, 4, 5,6, 7, 6, 7, 4,5]

// console.log(Array.isArray("Shakeel"));//output => false
// console.log(Array.from("Shakeel"));//Output =>  ['S', 'h', 'a','k', 'e', 'e','l']
// console.log(Array.from({name:"shakeel"}));//Output =>  [] intersting
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]