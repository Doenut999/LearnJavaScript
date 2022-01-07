// if-else statements

const y = "hh"
if (y.length>3){
    console.log("Medium length word")
}else if (y.length>6){
    console.log("Long word")
}else{
    console.log("Short word")
}

//switch statements

let name = "Alfred"

switch (name) {
    case "Alfred":
        console.log("You got it right, great!");
        break
    case "James":
        console.log("Oh come on that's so close [Not really]");
        break
    case "Belle":
        console.log("This is not Disney!");
        break
    case "Susan":
        console.log("Oh my gawd");
        break
    default:
        console.log("Mass ei")
}

//ternary operator
let age =13
let message = age > 12 ? "yay" : "nah"
console.log(message)


//for loops

for (let i =0; i<=10; i++){
    console.log(`Phase ${i}`)
}

//while and do while loops

//while loop
let b = 0
while (b<10){
    console.log(b+1)
    b++
}

//do while loop

let j = 0
do {
    console.log("Increasing by 0.1")
    j+=0.1

}while (j<10){
    console.log(j);
}

//for-in loop [used with  objects]
let goob = {
    name :"ss",
    age: 11,
    class: 'B',
    tall: false
}

for (let y in goob){
    console.log(`${y}: ${goob[y]}`)
}


//for-of loop [used with arrays]
let boobar = ["Alfred", "Seyram", "Kojo", "Lotsu", "Henry", "Sedem", "Kwame", "Lotsu"]

console.log(boobar.slice(0,3))

for (let g of boobar.slice(0,3)){
    console.log(g)
}

//arrays
let h = [1,2,3,4,5]
console.log(h[1]) //refers to item at index 1
delete h[2] //delete item at index 2
h[2] = "beans" // replaces value in deleted position(index)

let ya = [1,2,3,4,5,['a','b','c',["!","@",["#","$"]]]]
console.log(ya[5][3][2][1])//"$"

//array.methods
console.log(ya.length)
console.log(ya[ya.length-1])
// ya.length = 3 //removes items from 4th to last
console.log(ya.indexOf(['l']));
console.log(ya.pop());
console.log(ya.shift());
console.log(ya.push(11));
console.log(ya.unshift(12));
console.log(ya.concat(["go","go", "ga", "ga", "go","go"]));
console.log(ya.join(';'));
console.log(ya.split());
let co = ya.slice(0,2);
let ca = ya.splice(0,3);
console.log(co)
console.log(ca)
console.log(ya.reverse())
console.log(ya.sort())




