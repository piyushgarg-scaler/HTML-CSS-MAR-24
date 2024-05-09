const fs = require('fs')
const crypto = require('crypto')

process.env.UV_THREADPOOL_SIZE = 10

for (let i = 0; i < 1_00_00_000; i++) {
    console.log('i', i)
}

setTimeout(() => console.log('Inside SetTimeout'), 0)

setImmediate(() => console.log('Inside Set Immediate'))

Promise.resolve().then(() => console.log('Promise Resolved'))

fs.readFile('secret.txt', 'utf-8', function () {
    console.log('IO Polling Finish')

    const start = Date.now()

    crypto.pbkdf2('aaaaa', 'aa', 111, 12, 'sha512', (err, b) => { })

    crypto.pbkdf2('password', 'salt1', 1000000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 1 Hashed')
    })

    crypto.pbkdf2('password', 'salt1', 1000000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 2 Hashed')
    })

    crypto.pbkdf2('password', 'salt1', 1000000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 3 Hashed')
    })

    crypto.pbkdf2('password', 'salt1', 1000000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 4 Hashed')
    })


    crypto.pbkdf2('password', 'salt1', 1000000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 5 Hashed')
    })

    crypto.pbkdf2('password', 'salt1', 1000000, 1024, 'sha512', () => {
        console.log(`${Date.now() - start}ms`, 'Password 6 Hashed')
    })
})

console.log('Top Level')

