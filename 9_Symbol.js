const symbol = Symbol('deno')
const other = Symbol('deno')

// console.log(symbol)
// console.log(other)
// что интересно: если сравнивать вроде два одинаковых Символа, то они по логике JS разные

// console.log(symbol == other)
// console.log(symbol === other)

const obj = {
  name: 'Elena',
  demo: 'DEMO',
  [symbol]: 'meta'
}

// console.log(obj[symbol]) // meta
// console.log(obj[other]) // undefined

for (let key in obj) {
  console.log(key)
}

console.log(obj.demo)
console.log(obj [symbol])

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol