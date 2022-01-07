//number methods
let y = 3.151596254
console.log(y.toFixed(4)); //4 decimal places
console.log(y.toPrecision(4)); // 4 digits, including decimal places

let z = 2500000
console.log(z.toExponential()); //2.5e+6
let z1 = 0.000025
console.log(z1.toExponential()) //2.5e-5

console.log(2.5e+3.toFixed())//2500
//string
//using backticks is the modern way
let myName = `Alfred`

let dialogue = "\"Come over for dinner with me?\", my mom offered"

//string template literals
let i = `${myName} reported what his mom said, ${dialogue}`
console.log(i)

//string methods : length, trim()
let g = "   Help meeeee               "
console.log(g)
console.log(g.trim().length)
let j = "Alfred Lotsu Derfla"
console.log(j.toUpperCase()) //uppercase the string
console.log(j.toLowerCase()) //lowercase the string
console.log(j.indexOf('L')) //find position of character
console.log(j.lastIndexOf('e')) //find position of last occurrence of character
console.log(j.slice(0,12)) // cut out a part of the whole string
console.log(j.replace("Derfla", "Seyram")) //replace first with second
console.log(j.charAt(8));  //find character at [position]


//Date
let today = new Date()//right now
console.log(today.getFullYear()) //this year
let ms = new Date(0) // 0 milliseconds from when the Unix time started
console.log(ms)

let newDate = new Date("Aug 29 2019 08:34:00") //get DateString

let fDate = new Date(1999, 11, 24, 14, 0, 9, 0); //will convert to  nice Date

console.log(fDate.getFullYear())
console.log(fDate.getDate())
console.log(fDate.getHours())
console.log(fDate.getMinutes())
console.log(fDate.getSeconds())
console.log(fDate.getMonth())


console.log(newDate.toLocaleString('default', {month: "short", weekday: "short"}))

//Math
let power = Math.pow(3,5) //243, 3 to the power 5
console.log(power)

let u = Math.max(1,2,3,4,5) // 5, the  largest number in the list
console.log(u)

g = Math.random() //random number between 0 and 1

g.toFixed(1) //1 decimal place
console.log(g);

g *=10 + 5;

console.log(Math.floor(g)) // round to nearest smaller whole number
console.log(Math.round(g)) //round to nearest bigger whole number


//Comparison
let a = 8
let b = 12

let c ='a'
let d = 'A'
let e = '12'
let f = '8'

{
    console.log(a > b)
    console.log(a >= b)
    console.log(a < b)
    console.log(a <= b)
    console.log(a === b)
}
{
    console.log(c !== d)
    console.log(c > d)
    console.log(c === d)


    console.log(e > f)
    console.log(e >= f)
    console.log(e < f)
    console.log(e <= f)
    console.log(e === f)
}



//Logic
// falsy values - false, undefined, Nan, 0, null, ""
prompt("&&-> (both conditions true)")
alert("||-> (at least one condition true)")
confirm("! -> reverse of condition : if false-true, if true-false")
console.log("?? null coalescing")

let p = 1;
p = !p
console.log(p)

let h = true
let bb = false

console.log(h || "whee")
console.log(bb || "whoo");


//nullish coalescing
let name = null;
let age = undefined;
let tallerThanMe = true;
let height = 5.44;

console.log(name ?? "unidentified")
console.log(age ?? "age not known")
console.log(tallerThanMe ?? "I am taller")
console.log(height || "strange")

