// const title = 'Hello'

// const isVisible = () => Math.random() > 0.5

// const template = `
// ${isVisible() ? `<p>Visible</p>` : ''}

// <h1 id='demo' style="color: red">${title}</h1>`

// console.log(template)

// Methods
const str = 'Hello'

// проверка начала строки с данных символов
console.log(str.startsWith('He'))
// проверка того, на какие символы строка заканчивается
console.log(str.endsWith('lo'))
// есть ли вообще в строке?
console.log(str.includes('el'))
// удаление пробелов слева или справа
console.log(str.trim())
// удаление пробелов в начале и с конца
console.log(str.trimStart())
console.log(str.trimEnd())
// задаёт мин значение длины строки, + добавляет что-то, если надо
console.log(str.padStart(10, '1234'))
// задаёт мах значение строки и заполняет, если надо
console.log(str.padStart(8, 'abc' ))