const defaultB = 30
const getDefualt = c => c*2

// function compute(a, b = 20) {
//   return a + b
// }

// function compute(a, b = defaultB) {
//   return a + b
// }

// function compute(a, b = getDefault(10)) {
//   return a + b
// }

function compute(a, b = getDefault(a)) {
  return a + b
}

console.log((compute(10)))