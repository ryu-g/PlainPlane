import './main.sass'
import './global.js'
import './functions_logics'
import { loadImages } from './functions_img'
import { proc } from './mainproc'
import { draw } from './viewArea'

console.log("add eventListener...")
console.log("setting canvas window...")
console.log("task name")
console.log("task name")
console.log("task name")
console.log("task name")

const mainProc = () =>{
  proc()
  draw()
  setTimeout(mainProc, 10) // Nfps
}

loadImages().then(
  mainProc()
)
