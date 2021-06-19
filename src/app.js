import './assets/*.png'
import './main.sass'
import './global.js'
import { display } from './viewArea.js'
import { Point } from './common.js'

const unchi = new Point(5,5)
console.log(unchi.x)

const game = new display()
