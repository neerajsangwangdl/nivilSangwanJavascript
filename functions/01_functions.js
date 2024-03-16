function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("V");
    console.log("I");
    console.log("L");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginusermessage(username = "Sam") {
    if(!username){
        console.log("PleWAzE AntER a YuUzErNEm");
        return
    }
    return `${username} jazt loged in`
}
// console.log(loginusermessage("Nivil"));
// console.log(loginusermessage());

function calculatecartprice(...num1){
    return num1
}
console.log(calculatecartprice(200, 400, 600));
const user = {
    username: "Nivil",
    price: 200
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handleobject(user)
handleobject({
    username: "Sam",
    price: "400"
})

const mynewarray = [200, 400, 600, 800, 1000]
function returnsecondvalue(getarray){
    return getarray[1]
}

console.log(returnsecondvalue([200, 400, 600, 800, 1000]));