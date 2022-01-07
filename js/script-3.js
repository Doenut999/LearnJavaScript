
let supers = ['Superman', 'Batman', 'Flash', 'Thor', 'Aquaman','Spider-Man']
//for each apply, series of sections to all
supers.forEach(
    function (hi,ho,mm) {
        console.log(`${hi} with ${ho}`)
    }
)

/**
 *
 * @param value
 * @returns {string}
 */
function upperCase(value){
    return value.toUpperCase()
}
//apply function on all array items using map
supers.map(upperCase)

let values = [1,2,3,4,5,6,7,8,9,12,14,16,18,20]


//[filter] to select and return only the values that
// satisfy a given condition [predicate]
let gg = values.filter(
    function (value){
        return value%2 ===0
    }
)
console.log(gg)

//use [reduce] to work on values to return a single value

let you = [1,2,3,4,5]

function add(total, value) {
    return total+value
}

console.log(you.reduce(add))

//[some] returns true if at least one member of the list
//is true, els, false

let jj = you.some(
    function kk(k){
        return k>10
    }
)


//[every] returns true if each member satisfies the condition
let jj = you.every(
    function kk(k) {
        return k > 10
    }
)

//[find] returns query or undefined

console.log(jj.find(4));

//[findIndex] returns query or -1

console.log(jj.find(40));



//sets

let b = new Set();
b.add('i')
    .add('o')

let yy = [1,2,3,4,5]
let v = new Set(yy)

//to check for existence

console.log(b.has('p'))

b.delete('u') //to delete an item if it exists

console.log(b.size) //to check length

b.clear() // empty the set


//maps: simply key value pairs of primitives
let map1 =new Map()
map1.set(1,2)
map1.set(2,3)
map1.set(3,4)
map1.set(4,5)
map1.set(5,6)
map1.get(3) // return value of this key
console.log(map1.has(8)) // return if exists


console.log(map1.keys())
console.log(map1.values())
console.log(map1.entries())


//functions
/**
 *
 * @param value
 * @returns {string}
 */

//create a function [with parameter]
function boring(value){
    return `JavaScript is ${value}`
}

boring("so much fun") //invoking a function

//function expressions
let boi = function (){
    console.log('1')
    console.log('2')
    console.log('3')
}

//single parameter function
function name(i, o){
    console.log(i + o);
}

name(11,12)

//dual param function
function name1(u, i){
    console.log(u*i);
}

name1("hi", 3)


//function with return keyword
//!! return keyword must be the last line in the scope

function g(i){
    return Math.pow(i,4)
}

function k(o){
    if(o>10){
        return console.log('yes')
    }else{
        return console.log(`false`)
    }
}