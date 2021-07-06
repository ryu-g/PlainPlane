import { Plane, Bullet } from './Plane.js'
import { Kakashi, KakashiBullet } from './kakashi.js'
import { getRandomInt } from './functions_logics.js'

const canvas = document.getElementById('canvas')
const view = canvas.getContext('2d', { alpha: false })
const dpr = window.devicePixelRatio || 1
const viewWidth = 1024 //window.innerWidth
const viewHeight = 600 //window.innerHeight
canvas.width = viewWidth * dpr
canvas.height = viewHeight * dpr
view.scale(dpr, dpr)
canvas.style.width = viewWidth + 'px'
canvas.style.height = viewHeight + 'px'
const mousepos = { x: 0, y: 0 }

const MAX_HP = 134
const plane = new Plane(0, 0, MAX_HP)
const kakashi = new Kakashi(getRandomInt(542, 945), 60, MAX_HP)

const BULLETS_MAX_COUNT = 500
const bullets_a = new Array(BULLETS_MAX_COUNT)
const bullets_b = new Array(BULLETS_MAX_COUNT)
const bullets_c = new Array(BULLETS_MAX_COUNT)
const bullets_d = new Array(BULLETS_MAX_COUNT)
const bullets_e = new Array(BULLETS_MAX_COUNT)
const bullets_f = new Array(BULLETS_MAX_COUNT)
const kakashi_bullets = new Array(BULLETS_MAX_COUNT)

const RIGHT_LIMIT = 960
const LEFT_LIMIT = 535

canvas.addEventListener('mousemove', (e) => {
  let rect = e.target.getBoundingClientRect()
  mousepos.x = Math.floor(e.clientX - rect.left)
  mousepos.y = Math.floor(e.clientY - rect.top)
  if (mousepos.x < LEFT_LIMIT) {
    plane.posx = LEFT_LIMIT
  } //自機の左端の移動限界
  else if (RIGHT_LIMIT < mousepos.x) {
    plane.posx = RIGHT_LIMIT
  } //自機の右端の移動限界
  else {
    plane.posx = mousepos.x
  }
  plane.posy = viewHeight - 90
  // console.log(`${plane.posx}, ${plane.posy}`)
})

for (let i = 0; i < BULLETS_MAX_COUNT; i++) {
  bullets_a[i] = new Bullet()
  bullets_b[i] = new Bullet()
  bullets_c[i] = new Bullet()
  bullets_d[i] = new Bullet()
  bullets_e[i] = new Bullet()
  bullets_f[i] = new Bullet()
}
for (let i = 0; i < BULLETS_MAX_COUNT; i++) {
  kakashi_bullets[i] = new KakashiBullet()
}

canvas.addEventListener('mousedown', (e) => {
  for (let i = 0; i < BULLETS_MAX_COUNT; i++) {
    if (
      !bullets_a[i].alive &&
      !bullets_b[i].alive &&
      !bullets_c[i].alive &&
      !bullets_d[i].alive &&
      !bullets_e[i].alive &&
      !bullets_f[i].alive
    ) {
      if (plane.stats.wideshotLv % 2 == 1) {
        bullets_a[i].set(plane.posx - 5, plane.posy, 2)
        if (plane.stats.rapidFireLv == 2) {
          console.log('hello from rapidfire')
          bullets_d[i].set(plane.posx - 5, plane.posy, 1)
        }
      }
      if (plane.stats.wideshotLv >= 2) {
        bullets_b[i].set(plane.posx + 25, plane.posy, 3)
        bullets_c[i].set(plane.posx - 35, plane.posy, 3)
        if (plane.stats.rapidFireLv == 2) {
          bullets_e[i].set(plane.posx + 45, plane.posy, 2)
          bullets_f[i].set(plane.posx - 55, plane.posy, 2)
        }
      }
      break
    }
  }
})

canvas.addEventListener('mouseup', (e) => {
  for (let i = 0; i < BULLETS_MAX_COUNT; i++) {
    if (!kakashi_bullets[i].alive) {
      kakashi_bullets[i].set(kakashi.posx, kakashi.posy, 2)
      break
    }
  }
})

window.addEventListener('keydown', (e) => {
  if (e.key == 'q') {
    console.log(`[message] pressed ${e.key}`)
    plane.upgradeWideShot()
  }
  if (e.key == 'w') {
    console.log(`[message] pressed ${e.key}`)
    plane.upgradeRapidFire()
  }
  if (e.key == 'e') {
    console.log(`[message] pressed ${e.key}`)
    plane.upgradeBullet()
  }
  if (e.key == 'r') {
    console.log(`[message] pressed ${e.key}`)
    plane.heal()
  }
  if (e.key == 's') {
    // debug用
    console.log(`[message] plane stats\n
    wideshotLv : ${plane.stats.wideshotLv}\n
    rapidFireLv :  ${plane.stats.rapidFireLv}\n
    bulletLv : ${plane.stats.bulletLv}\n
    healLv : ${plane.stats.healLv}`)
  }
  if (e.key == 'f') shoot()
})

function shoot() {
  for (let i = 0; i < BULLETS_MAX_COUNT; i++) {
    if (
      !bullets_a[i].alive &&
      !bullets_b[i].alive &&
      !bullets_c[i].alive &&
      !bullets_d[i].alive &&
      !bullets_e[i].alive &&
      !bullets_f[i].alive
    ) {
      if (plane.stats.wideshotLv % 2 == 1) {
        bullets_a[i].set(plane.posx - 5, plane.posy, 2)
        if (plane.stats.rapidFireLv == 2) {
          console.log('hello from rapidfire')
          bullets_d[i].set(plane.posx - 5, plane.posy, 1)
        }
      }
      if (plane.stats.wideshotLv >= 2) {
        bullets_b[i].set(plane.posx + 25, plane.posy, 3)
        bullets_c[i].set(plane.posx - 35, plane.posy, 3)
        if (plane.stats.rapidFireLv == 2) {
          bullets_e[i].set(plane.posx + 45, plane.posy, 2)
          bullets_f[i].set(plane.posx - 55, plane.posy, 2)
        }
      }
      break
    }
  }
}
export {
  viewWidth,
  viewHeight,
  view,
  BULLETS_MAX_COUNT,
  bullets_a,
  bullets_b,
  bullets_c,
  bullets_d,
  bullets_e,
  bullets_f,
  kakashi_bullets,
}
export { plane }
export { canvas }
export { kakashi }
