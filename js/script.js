//remember to end your statements with a semicolon
//alert affirmation (e.g. JS Wizard in the making) on the console and run

alert("JS Wizard in the making");

// add JS to web project using script tag, using async or defer

alert("See html file for implementation");

//this is a single-line comment

/*
And this
is a
multi-
line comment
 */


/**
 * @param {number} a The number to be raised
 * @param  {number} b The power to be raised to
 */


function raise(a, b){
    return Math.pow(5, 3);
}
raise(2,2)

//outputting js
prompt("What on earth is your name?");
confirm("The developer of this website loves you");
console.warn("My friend don't do that");
console.error("2 + 2 is not 5 Jenius");

//styled-up output
console.log("%c hey wassup", "color:lime")
console.log("%c js text", "css styling")

//hinted prompt
console.log(prompt("Question", "hint"))

//variable declaration
let r = 12.1 //mutable, changeable
const y = 13.1//immutable, unchangeable
if (y>10)
    console.log(`${y} is bigger than 10`)

//data types
/*
primitives: number, string, boolean, null, undefined, symbol, bigint
higher: function, object, array
 */

console.log(typeof  r)

//arithmetic operators

/*
addition(+), subtraction (-), division (/), multiplication (*)
modulus(%), increase[before: ++value, after: value++], decrease [before: --value, after: value--]
 */

//assignment operators
/*
add (+=)
subtract (-=)
multiply (*=)
divide (/=)
modulus (%=)
 */


//numbers
/*
exponent = aeB
toFixed()
 */


let g = [1,2,3,4,1,2,3,4]

g.splice(5,1,9)