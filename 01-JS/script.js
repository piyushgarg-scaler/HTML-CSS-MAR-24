const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')
const btn = document.getElementById('btn')
const btn_sub = document.getElementById('btn-sub')
const result = document.getElementById('result')

btn_sub.addEventListener('click', function () {
    const num1 = input1.value
    const num2 = input2.value

    const sub = parseInt(num1) - parseInt(num2)

    result.innerText = sub
})

btn.addEventListener('click', function () {
    const num1 = input1.value
    const num2 = input2.value

    const add = parseInt(num1) + parseInt(num2)

    result.innerText = add
})

myName = "piyush Garg"

console.log(myName)


var myName