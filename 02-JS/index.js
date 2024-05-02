function add(a, b) {
    console.log('Trying to add', a, 'and', b)
    return a + b
}


function createAdder() {
    const cache = {}

    return function (a, b) {
        const key = `${a}.${b}`;
        if (cache[key]) return cache[key];

        const value = add(a, b);
        cache[key] = value

        return value
    }
}

const addv2 = createAdder();

addv2(2, 5)
addv2(2, 5)
addv2(2, 5)
addv2(3, 5)
addv2(3, 5)
addv2(3, 5)