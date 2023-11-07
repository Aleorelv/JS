const validator = {
  get(target, prop) {
    return prop in target ? target[prop] : `Поля ${prop} в объекте нет`
  },
  
  set(target, prop, value) {
    if (value.length > 2) {
      Reflect.set(target, prop, value)
    } else {
      console.log('Длинна должна быть больше 2 символов. Сейчас ' + value.length)
    }
  }
}

const form = {
  login: 'tester',
  password: '123'
}

const formProxy = new Proxy(form, validator)

// console.log(formProxy)

// console.log(formProxy.login)
// console.log(formProxy.password)
// console.log(formProxy['username'])

// formProxy.password = '124'
// console.log((formProxy.password))

function log(message) {
  console.log('[Log]: ', message)
}

const proxy = new Proxy(log, {
  apply(target, thisArg, argArray) {
    if (argArray.length === 1) {
      Reflect.apply(target, thisArg, argArray)
    } else {
      console.log('Колво агрументов не совпало')
    }
  }
})

proxy('Custom message')
proxy('Message', 2)