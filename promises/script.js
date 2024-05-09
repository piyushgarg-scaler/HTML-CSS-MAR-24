const data = fetch('https://piyushjsonplaceholder.typicode.com/todos/1')

// Chaining Functions ⛓️‍💥
data
    .then(noice)
    .catch(ohhh)
    .finally(neverMind)

// .then, .catch, .finally => Promises



function noice() {
    console.log('Inside Then: Wohoo! 🎉')
}


function ohhh() {
    console.log('In Catch 🤯')
}

function neverMind() {
    console.log('Inside Finally: 🍺')
}