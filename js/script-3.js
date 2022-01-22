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