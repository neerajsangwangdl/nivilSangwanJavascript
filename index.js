// function firstFunction() {
//     document.getElementById('Nivil').innerHTML = 'I popped up';
// }
// -------------------------  1.Variables  -----------------------------
// var x, y, z;
// x = 5;
// y = 10;
// z = x + y;
// console.log(x, y + z, z);
// ----------------------- 2.Data Types --------------------------
// let CarName = 'lymbergymber'
// document.gr = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// let score = '40fgh';
// console.log(typeof score)
// console.log(typeof (score))

// let IsloggedIn = ""
// let booleanisloggedin = Boolean(IsloggedIn)
// console.log(booleanisloggedin);

// --------------------------- 3.OPERATIONS ----------------------------
// console.log(Boolean(2-2))        idk how this came to my mind and was correct

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true);

// --------------------------- 4.Comparison -----------------------------

// console.log(2 > 1);
// console.log(2 > 1);
// console.log(2 == 1);
// console.log(2 != 1);
// console.log(2 >= 1);

// console.log( "2" > 1)
// console.log( "02" > 1)

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
/* ------------- 5.Data Types Summary --------------
1. Primitive Data types

7 Types: String, numbers, booleans, null, undefind, symbol, BigInt

2. Reference/Non-Primitive Data types

3 Types: Arreys, Objects, Functions.

*/
/* -------------------- Stack, Heap ---------------------
1. Stack: Primitive
2. Heap: Non-Primitive
*/
// ------------------- Strings In JS ---------------------

const name = "Nivil"
const repocount = 2
// console.log(name + repocount + "Value");
// console.log(`Hello, my name is ${name} and my repocount is ${repocount}`);   // string interpolation
const gamename = new String('hiteshhc')
// console.log(gamename[2]);
// console.log(gamename.length);
// console.log(gamename.toUpperCase);
// console.log(gamename.charAt('1'));
// console.log(gamename.indexOf('l'));
const newstring = gamename.substring(0, 7)
// console.log(newstring);
const ultstring = gamename.slice(-8, 4);
// console.log(ultstring);

// ---------------------- Numbers and Maths -------------------------
const balance = 500
const newbalance = new Number(1000)
console.log(newbalance);