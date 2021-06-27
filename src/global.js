import { Plane, Bullet } from './Plane.js'
import { Kakashi, KakashiBullet } from './kakashi.js'
import { getRandomInt } from './functions_logics.js'
import { drawKakashi } from './functions_img'
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
const BULLETS_MAX_COUNT = 5000
const bullets = new Array(BULLETS_MAX_COUNT)
const kakashi_bullets = new Array(BULLETS_MAX_COUNT)
const kakashi = new Kakashi(getRandomInt(542,945), 60)


console.log(`${plane.x}, ${plane.y}`)

canvas.addEventListener('mousemove', (e) => {
  let rect = e.target.getBoundingClientRect()
  mousepos.x = Math.floor(e.clientX - rect.left)
  mousepos.y = Math.floor(e.clientY - rect.top)
  if (mousepos.x < 535) { plane.posx = 535} 
  else if (960 < mousepos.x) { plane.posx = 960} 
  else { plane.posx = mousepos.x} 
  plane.posy = viewHeight-90
  console.log(`${plane.posx}, ${plane.posy}`)
})

for(let i = 0; i < BULLETS_MAX_COUNT; i++){
  bullets[i] = new Bullet()
}
for(let i = 0; i < BULLETS_MAX_COUNT; i++){
  kakashi_bullets[i] = new KakashiBullet()
}

canvas.addEventListener("mousedown", (e) => {
    for(let i = 0; i < bullets.length; i++){
      if(!bullets[i].alive ){ // bullet[0] = alive  bullet[1] = fase
        bullets[i].set(plane.posx, plane.posy, 2)
        bullets[i + 200].set(plane.posx-20, plane.posy, 2)
        bullets[i + 400].set(plane.posx+20, plane.posy, 2)
        break
      }
    }
  }
)

canvas.addEventListener("mouseup", (e) => {
  for(let i = 0; i < kakashi_bullets.length; i++){
    if(!kakashi_bullets[i].alive ){
      kakashi_bullets[i].set(kakashi.posx, kakashi.posy, 2)
      kakashi_bullets[i+200].set(kakashi.posx+20, kakashi.posy, 2)
      kakashi_bullets[i+400].set(kakashi.posx-40, kakashi.posy, 2)
      kakashi_bullets[i+600].set(kakashi.posx+35, kakashi.posy, 2)
      break
    }
  }
}
)

export { viewWidth, viewHeight, view, BULLETS_MAX_COUNT, bullets, kakashi_bullets }
export { plane }
export { canvas }
export { kakashi }