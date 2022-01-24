let family = ["Shelter", "Stella", "Thelma", "Alfred", "Henry", "Abigail", "Tonia"]

let places = [1,2,3,4,5,6,7,8,9,10]


console.log(`places = ${places}`);
//Apply an action to each member of the array
family.forEach(function (person, position, self) {
    console.log(`${person} is at position ${position+1} in the family: ${self}`)
})

/**
 * @returns {string}
 */
function upperCase(value){
    return value.toUpperCase()
}
//create a new array after applying action on said array
console.log(family.map(upperCase))

function addOne(value) {
    value++
    return value
}

const b = places.map(addOne);
console.log(b);

let g = b.filter(
    function (a, b) {
        return b%2===0
    }
)

console.log(g);


let hi = [1,2,3,4,5,6,7,8,9,10]

function fact(finalProduct, value){
    return finalProduct*value
}
//apply function and reduce values to single value
console.log(hi.reduce(fact));


console.log(hi.some(
    function (value) {
        return value % 2 === 0
    }
));

console.log(hi.every(
    function (value) {
        return value >= 3
    }
));

console.log(hi.find(
    function (value){
        return value === 6
    }
))
console.log(hi.findIndex(
    function (value){
        return value === 6
    }
))

const netWorths = new Set()
netWorths.add(100_000).add(5_000).add(30_000).add(58_101).add(291_404)

console.log(netWorths.has(30_000))
netWorths.delete(30_000)
console.log(netWorths.has(30_000))
console.log(netWorths.size)
netWorths.clear()

console.log(netWorths);

//weak sets can only hold elements of non-primitive ty[es
let hoh = new WeakSet()
hoh.add(family)
console.log(hoh);

//map is like an object, name value pairs ::main difference is the syntax
//example object
const sampleObject = {
    name: "Freddie",
    age: 39,
    friends: 6,
    car: "Mystery Machine"
}

//example Map

const personMap = new Map()
personMap.set(1, "Shelter")
personMap.set(2, "Stella")
personMap.set(3, "Jenny")
personMap.set(4, "Thelma")
personMap.set(5, "Alfred")
personMap.set(6, "Henry")
personMap.set(7, "Abigail")
personMap.set(8, "Tonia")

console.log(personMap.get(6))
console.log(personMap.has(4))

// console.log(personMap.keys())
// console.log(personMap.values())
// console.log(personMap.entries())
console.log('/////////////')

console.log("keys")
for (let i of personMap.keys()){
    console.log(i)
}
for (let i of personMap.values()){
    console.log(i)
}
console.log("entries")

for (let i of personMap.entries()){
    console.log(i)
}

//weak maps has only non-primitive keys, and they do not support iteration

//function is a representation of a series of instructions we want to undertake

function printRandomSentences(){
    console.log("I am really handsome")
    console.log("I am not smiling as I write this")
    console.log("I am loving JavaScript now")
}

printRandomSentences()


//function expressions are variables given values of anonymous functions(to be discussed in greater detail later)

let u = function (){
    console.log(1)
    console.log(2)
    console.log(3)
}

//call the function by simply writing the value and parentheses, like you would call any normal function
u()

//function parameters are the values {fed} to function calls

/**
 *
 * @param name {string}
 * @returns {string}
 */
function returnName(name){
    return name
}

//also has default parameters for when no parameter is supplied

//!!default parameter should be the last
/**
 *
 * @param a {number}
 * @param b {number}
 * @returns {number}
 */
function sum(a, b=10){
    return a+b
}

console.log(sum(12));
console.log(sum(3, 9));

//use var let and const
//var is outmoded --should not be used
//let === mutable (changeable) variables
//const == immutable/constant (non-changeable) variables