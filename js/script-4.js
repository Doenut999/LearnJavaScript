//this keyword

let me = {
    name: "Alfred",
    age: 22,
    height: 181,
    weight: 190,
    jump(){
        this.height+=30
    },
    list(){
        console.log(`My name is ${this.name}`)
        console.log(`I am ${this.age} years old`)
    }
};

me.jump();
me.list();
console.log(me.height);
me.jump();
console.log(me.height);
me.jump();
console.log(me.height);


//[call], [apply], [bind]
//use apply when you want to use additional arguments (in an array)
//use call when it is a single  argument
const jsObject = {
    title: "Mr.",
    name: "Alfred",
    surname: "Lotsu",
    age: 30,
};

function info(abba, babe){
    console.log(`${abba} and ${babe} are known as ${this.title}, ${this.name} at ${this.age} years old`);
}
//apply makes the first argument [this]
//same with call, differences above
info.apply(goob,["null", "muller"])


//bind will stick the parameters to the related variable
const gameInfo = info.bind(goob, 'lolo', 'lala')


//destructuring
//objects
const io = {
    title: 0,
    name: '1',
    year: 2007,
    characters: {
        yay: 1,
        boo: true,
        yak: false
    }
}

let {title: gogo, name: gaga, year: lolo,characters, characters: {yay:dj, boo:twami, yak:lala}} = io;
console.log(characters);

console.log(gogo, gaga, lolo)

console.log(dj, twami, lala)


//array destructuring
let bob = ['a','b','c','d',['e','f,','g']]
let [o, o1, o2, o3, [o4, o5,o6]] = bob
console.log(o4)


//spreading

let bib = [1,2,3]
let bibPlus = [...bib, 4,5,6]
console.log(bibPlus)


//rest parameter, works like keyword argument in other languages
function yay(...z){
    let total = 0
    for (let i of z){
        total+=i
    }
    return total
}

console.log(yay(1,2,3,4))

let yap = [1,2,3,4]
//arrow function


//if one parameter no parentheses
const sum = (a,b)=>{
    return console.log(a+b)
}

sum(2,3)

const hopper = () => 'Hello'

console.log(hopper());

//setTimeout

//run a function after specified delay
function sub(channel){
    console.log(`Subscribe to ${channel}`)
}
let timer = setTimeout(sub, 3000, 'Dev Dreamer')

clearTimeout(timer)

//setInterval: repeatedly run a function after specified interval until interval cleared
function sub1(channel){
    console.log(`Subscribe to ${channel}`)
}
let timer1 = setInterval(sub1, 3000, 'Dev Dreamer')

clearInterval(timer1)

//higher order function
const double = n => n*2

let h = [1,2,3,4,5]
h.map(double)
console.log(h.map(double))