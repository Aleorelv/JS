// import MyLog, {color, compute} from './module'
import * as Module from './module.js'

// compute(1, 2)
// console.log(color)
// MyLog.log() // при export default можно исп. любое имя

Module.color
Module.compute(1, 2)
Module.default.log()