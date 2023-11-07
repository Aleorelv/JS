// Rest

// function averaage(arr) {
// return arr.reduce( (acc, i) => acc += i, 0) / arr.length
// }
// console.log( averaage([10, 20, 30, 40, 50]) )

// function average() {
//   return Array.from(arguments).reduce( (acc, i) => acc += i, 0) / arguments.length
// }
// console.log( average(10, 20, 30, 40, 50) )

/// С Rest можно удобнее сделать

// function average(...args) {
//   return args.reduce( (acc, i) => acc += i, 0) / args.length
// }

// console.log( average(10, 20, 30, 40, 50) )

// function average(a, b, ...args) {
//   return args.reduce( (acc, i) => acc += i, 0) / args.length
// }

// console.log( average(10, 20, 30, 40, 50) )

/// Spread
// const array = [1, 2, 3, 5, 8, 13]
// console.log(array)
// console.log(...array) // развёртка array
// console.log(Math.max(...array)) // определяет наибольшее число
// console.log(Math.min(...array)) // наименьшее
// console.log(Math.max.apply(null, array)) // old style

// const fib = [1, ...array]; console.log(fib)

/// Destructuring
const array = [1, undefined, 3, 5, 8, 13]

// const a = array[0]; const b = array[1];
// const [a, b] = array // последовательная передача значений согласно индексам массива номеру переменной в "массиве" переменных
// console.log(a, b)
// const [a, b, ...c] = array // ост. значения запишутся в переменную "с" как в массив
// console.log(a, b, c)
// ещё можно придать переменной значение по умолчанию, например, b = 42, если значение отсутствует, то будет значение по умолчанию, если нет, то будет переданное значение

// const [a,, c] = array; console.log(a, c)

// Object
const address = {
  country: 'Russia',
  city: 'Moscow',
  street: 'Lenin',
  concat: function() {
    return `${this.country}, ${this.city}, ${this.street}`
  }
}

// const {city, country, street = 'Tverskaya', concat: adressConcat} = address

// console.log(city)
// console.log(adressConcat.call(address))

const {city, ...rest} = address
console.log(city)
console.log(rest)
// console.log(address.concat())

const newAddress = {...address, street: 'Tverskaya', code: 123}

console.log(newAddress)