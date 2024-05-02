// Functional Programming


// Any programmer can write a code which computes can understand <- Monkey Coders
// only a good programmer will write code which other programmers can also understand

// Design Principles

function add(a, b) {
    return a + b
}

DRY - Don't repeat yourself
let a = 10
let b = 20
let c = add(a, b)
console.log('a+b=', c);

let x = 50
let y = 80
let z = add(x, y)
console.log('x+y=', z);

// Pure Functions vs Impure Functions

let count = 1

function doesSomething(a, b) {
    count++;
    return a + b + count;
}

// High Order Functions
function hackNasaWithHTML(refFn) {
    console.log('Hacking nasa 1%...')
    console.log('Hacking nasa 40%...')
    console.log('Hacking nasa 80%...')
    console.log('Hacking nasa 100%...')
    refFn('Super Secret Data found from nasa') // callback fn
}

hackNasaWithHTML(function (ans) {
    console.log('I was able to hack nasa', ans)
})

const fs = require('fs');

fs.readFile('secret.txt', 'utf-8', onDone)

function onDone(err, data) {
    // 
}

console.log('Continue rest of work....')




const arr = ['🚀', '🦀', '😄', undefined, '👀', '🫡', undefined, '🦀', '🦀']

arr.forEach((value, idx) => console.log(value))

const newCopy = arr.map((value) => value + ' 🦠')

const newCopyOfArr = arr.filter((val) => val)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = nums.reduce(function (prev, current) {
    return current + prev
}, 0)




