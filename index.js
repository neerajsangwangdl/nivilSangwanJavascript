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

// console.log(typeof newdate);
// let mycreateddate = new Date(2023, 0, 23, 5, 3)

let mycreateddate = new Date("01-14-2024");
// console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(mycreateddate.getTime());
// console.log(Math.floor(Date.now()/1000));

let adate = new Date()
// console.log(adate);

// ------------------- Arrays --------------------------

// const myArr = [0, 1, 2, 3, 4, 5, true, "Nivil"]
// const myheros = ["Batman", "Flash", "Superman", "Dr.Strange", "Hulk", "Spiderman"]
// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2[0]);

// array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

//slice, splice

// console.log("A", myArr);
// const myn1 = myArr.slice(1, 3)
// console.log("B", myArr);
// console.log(myn1);
// const myn2 = myArr.splice(1, 3)
// console.log("C", myArr);
// console.log(myn2);

// const marvelheros = ["Thor", "Spiderman", "Dr.Strange"]
// const dcheros = ["Superman", "Batman", "Flash"]
// marvelheros.push(dcheros)
// console.log(marvelheros);
// console.log(marvelheros[3][1]);

// const allheros = marvelheros.concat(dcheros)
// console.log(allheros);

// const allnewheros = [...marvelheros, ...dcheros]
// console.log(allnewheros);

// const new_arr = [1, 2, 3, [4, 5, 6], [7, 8, 9, [4, 1]]]
// const realarr = new_arr.flat(Infinity)
// console.log(realarr);

// console.log(Array.isArray("Nivil"));
// console.log(Array.from("Nivil"));
// console.log(Array.from({name: "Nivil"})); <<< interesting

// let score1, score2, score3
// score1 = 100
// score2 = 200
// score3 = 300
// console.log(Array.of(score1, score2, score3));

// -------------------------- Objects(Very Important) -------------------------
// Singleton
//object literals
const mysym = Symbol("key1")
Object.create
const JSuser = {
    name: "Nivil",
    "fullname": "Nivil Sangwan",
    [mysym]: "mykey1",
    age: 13,
    location: "Sector 19B, Dwarka",
    email: "Nivil@gmail.com",
    isloggedin: false,
    lastlogindays: ["Monday, Tuesday, Friday"]
}
// console.log(JSuser.email)
// console.log(JSuser["email"])
// console.log(JSuser["fullname"])  <<<Correct and only way
// console.log(JSuser.fullname)  <<<Incorrect
// console.log(JSuser."full name")  <<<Incorrect

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["fullname"]);
// console.log(JSuser[mysym]);

JSuser.email = "NivilSangwan@gmail.com"
// Object.freeze(JSuser)
JSuser.email = "NivilSangwan@microsoft.com"
// console.log(JSuser);

JSuser.greeting = function(){
    // console.log("Hello JSuser");
}
JSuser.greeting2 = function(){
    // console.log(`Hello JSuser, ${this.name}`);
}
// console.log(JSuser.greeting());
// console.log(JSuser.greeting2());

// const youtubeuser = new Object()
const youtubeuser = {}
youtubeuser.id = "123abc"
youtubeuser.name = "Sammy"
youtubeuser.isloggedin = "false"
// console.log(youtubeuser);

const regularuser = {
    email: "Sammy@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Nivil",
            lastname: "Sangwan"
        }
    }
}

// console.log(regularuser.fullname?.userfullname.firstname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "N@gmail.com"
    },
    {
        id: 1,
        email: "N@gmail.com"
    },
    {
        id: 1,
        email: "N@gmail.com"
    }
]
// users[1].email
// console.log(youtubeuser);

// console.log(Object.keys(youtubeuser));
// console.log(Object.values(youtubeuser));
// console.log(Object.entries(youtubeuser));

// console.log(youtubeuser.hasOwnProperty("isloggedin"));
// ---------------------- JS objects de-structuring ----------------------------
const course = {
    coursename: "Hindi JS course",
    courseinstructor: "Nivil",
    cost: 700
}
// course.courseinstructor

const {courseinstructor: instructor} = course
console.log(instructor);
// {
//     name: "Nivil"
//     coursename: "JS in hindi"
//     price: "free"
// }

