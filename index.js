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
// ---------------------- Numbers ---------------------------

const balance = 500
const newbalance = new Number(1000)
// console.log(newbalance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
const tullu = 48.4332
// console.log(tullu.toPrecision(5));

const one = 1000000
// console.log(one.toLocaleString('en-IN'));

// ------------------------- Math -------------------------

// console.log(Math);
// console.log(Math.abs(-5));

// ------------------------- Dates --------------------------

let newdate = new Date()
// console.log(newdate.toString()); // day, date, time with spaces(coordinated universal time)
// console.log(newdate.toDateString()); // day and date
// console.log(newdate.toISOString()); // date and time separated with 'T'
// console.log(newdate.toJSON());  // everything same as upper
// console.log(newdate.toLocaleDateString()); // tells the date directly(nothing else)
// console.log(newdate.toLocaleString()); // tells date and time separated with comma  " , "(coordinated universal time)

console.log(typeof newdate);
// let mycreateddate = new Date(2023, 0, 23, 5, 3)

let mycreateddate = new Date("01-14-2024");
// console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));

let adate = new Date()
console.log(adate);