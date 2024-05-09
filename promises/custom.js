const customPromise = new Promise(function (resolve, reject) {
    console.log('I am doing some million dollar work inside promise')
    // Do 1-2 million line of code here
    resolve('Because I dont want to do this work rn')
})

async function doTask() {
    const result = await customPromise;
    console.log(result)
}

// customPromise
//     .then((data) => console.log('Promise Resolved', data))
//     .catch((eeee) => console.log('Promise Rejected', eeee))
//     .finally(() => console.log('Promise Finally'))