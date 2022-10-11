

// function to execute, miliseconds to wait
setTimeout(() => { console.log('5 second passed') }, 5000)

const operation = (onFinish) => {
    // tast that take a min
    const result = "????"
    onFinish()
}

const showResult = () => {
    console.log('finished ')
}

const storageResult = (value) => {
    localStorage.setItem('result', value)
}

operation(storageResult)

// How to sequence JS