// const promise = new Promise( (resolve, reject) => {
//   setTimeout( () => {
//     resolve('Success')
//     // console.log('After delay')
//   }, 500)
// })

// promise.then( data => console.log(data))

const delay = ms => new Promise((resolve, reject) => {
  setTimeout( () => 
  resolve(`Done! ${ms}`), ms)
  // reject
})

// delay(1000)
//   .then( data => delay(500))
//   .then( data => console.log(data))
//   .catch(err => console.log(err))
//   .finally( () => console.log('Finally'))

// async function asyncDelay() {
//   try {
//     const data = await delay(2000)
//     console.log(data)
//   } catch (e) {
//     console.log('Error', e)
//   }
// }
// asyncDelay()

// ждёт последний промис
Promise.all( [
  delay(1000),
  delay(500),
  delay(2000)
]).then( data => console.log(data))

// ждёт самый шустрый промис
Promise.race( [
  delay(1000),
  delay(500),
  delay(2000)
]).then( data => console.log(data))