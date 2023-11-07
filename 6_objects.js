const cityField = 'city'

const job = 'Frontend'

const person = {
  age: 26,
  name: 'Irina',
  [cityField + Date.now]: 'Saint-Peterburg',
  'country-live': 'Russia',
  out: () => 'Person',
  toString() {
    return Object.keys(this)
    .filter(key => key !== 'toString' && key !== 'out')
    .map(key => this[key])
    .join(' ')
  }
}

// console.log(person.toString())
// console.log(person.out())
// console.log(person)

// Methods
const first = {a: 1}
const second = {b: 2}

// console.log(Object.is(20, 20))
// console.log(Object.assign(first, second))
// console.log(first)
// console.log(Object.assign({}, first, {
//   c:2, d:3
// }))

const obj = Object.assign({}, first, {
  c:2, d:3
})

console.log(obj)

console.log(Object.entries(obj)) // массив массивов