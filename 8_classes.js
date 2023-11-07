class Person {
  type = 'human'
  constructor(name) {
    this.name = name
  }
  greet() {
    console.log(this.name + ' говорит привет!')
  }
}
// const max = new Person('Max')
// max.greet()

// console.log(max)
// console.log(max.type)

// console.log(max.__ptoto__ === Person.prototype)

// ======================
// ==== Наследование ====
// ======================

class Programmer extends Person {
  constructor(name, job) {
    super(name)

    this._job = job
  }

get job() {
  return this._job
}

set job(job) {
  // добавим логики валидации, скажем, если число символов меньше 2, то выдаём ошибку
  if (job.length < 2) {
    throw new Error('Validation failed')
  } else {
  this._job = job
  }
} 

// можно переписать метод, но если мы хотим обращаться к родительскому методу, то надо через вызвать "super" как объект и вызывать уже метод
  greet() {
    super.greet()
    console.log('Rewritten')
  }
}

const frontend = new Programmer('Max', 'Frontend')
// console.log(frontend)
// frontend.greet()
// console.log(frontend.job)
frontend.job = 'Backend'
// console.log(frontend.job)

//  Static
class Util {
   static average(...args) {
    return args.reduce( (acc, i) => acc += i, 0) / args.length
  }
}

// const util = new Util()

// console.log(util.average(1, 1, 2, 3, 4, 8, 13))

// Вариант лучше (через указание типа метода static)

const res = Util.average(1, 1, 2, 3, 4, 8, 13)
console.log(res)