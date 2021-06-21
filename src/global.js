import { Plane, Bullet } from './Plane.js'
const canvas = document.getElementById('view')
const view = canvas.getContext('2d')
const dpr = window.devicePixelRatio || 1;
const viewWidth = 1024 //window.innerWidth
const viewHeight = 600 //window.innerHeight
  canvas.width = viewWidth * dpr
  canvas.height = viewHeight * dpr
view.scale(dpr,dpr)
canvas.style.width = viewWidth + 'px'
canvas.style.height = viewHeight + 'px'
const mousepos = {x : 0, y: 0}

const plane = new Plane(0, 0)
const BULLETS_MAX_COUNT = 400
const bullets = new Array(BULLETS_MAX_COUNT)
let fire = false

console.log(`${plane.x}, ${plane.y}`)

canvas.addEventListener('mousemove', (e) => {
  let rect = e.target.getBoundingClientRect()
  mousepos.x = Math.floor(e.clientX - rect.left)
  mousepos.y = Math.floor(e.clientY - rect.top)
  if (mousepos.x < 535) { plane.posx = 535} 
  else if (960 < mousepos.x) { plane.posx = 960} 
  else { plane.posx = mousepos.x} 
  plane.posy = viewHeight-90
})

for(let i = 0; i < BULLETS_MAX_COUNT; i++){
  bullets[i] = new Bullet()
}

canvas.addEventListener("mousedown", (e) => {
  fire = true
  console.log(`fire! : ${fire}`)
})
canvas.addEventListener("mouseup", (e) => {
  fire = false
})

export { viewWidth, viewHeight, view, BULLETS_MAX_COUNT, bullets, fire }
export { plane }
export { canvas }