// function sum(a, b) {
//   return a + b
// }

// function cube(a) {
//   return a ** 3
// // }

// const sum = (a, b) => {
//   return a + b
// }

// const cube = a => a ** 3

// console.log(sum(41, 1))
// console.log(cube(2))

// setTimeout(function () {
//   console.log('After 1 second')
// }, 1000)

/// New style. Arrow function

// setTimeout(() => console.log('After 1 second'), 1000)

// Context
function log() {
  console.log(this)
}

const arrowLog = () => console.log(this)
const person = {
  name: 'Elena',
  age: 23,
  log: log,
  arrowLog: arrowLog,
  delayLog: function () {
    // const self = this
    setTimeout(() => {
    console.log(this.name + ' ' + this.age)
    }, 500)
  }
}

// person.log()
// console.log(global)
// person.arrowLog()
person.delayLog()
