import { Plane, Bullet } from './Plane.js'
import { Kakashi, KakashiBullet } from './kakashi.js'
import { getRandomInt } from './functions_logics.js'

const mainCanvas = document.getElementById('ui')
const subCanvas = document.getElementById('battlezone')
const view = mainCanvas.getContext('2d', { alpha: false })
const battlefield = subCanvas.getContext('2d')
const dpr = window.devicePixelRatio || 1
const viewWidth = 1024 //window.innerWidth
const viewHeight = 600 //window.innerHeight
const battleFieldWidth = 472 //window.innerWidth
const battleFieldHeight = 500 //window.innerHeight
mainCanvas.width = viewWidth * dpr
mainCanvas.height = viewHeight * dpr
subCanvas.width = battleFieldWidth * dpr
subCanvas.height = battleFieldHeight * dpr
view.scale(dpr, dpr)
battlefield.scale(dpr, dpr)
mainCanvas.style.width = viewWidth + 'px'
mainCanvas.style.height = viewHeight + 'px'
subCanvas.style.width = battleFieldWidth + 'px'
subCanvas.style.height = battleFieldHeight + 'px'
const mousepos = { x: 0, y: 0 }

const MAX_HP = 134
const plane = new Plane(0, 0, MAX_HP)
const kakashi = new Kakashi(getRandomInt(0, 460), 20, MAX_HP)

const BULLETS_MAX_COUNT = 500
const bullets_a = new Array(BULLETS_MAX_COUNT)
const bullets_b = new Array(BULLETS_MAX_COUNT)
const bullets_c = new Array(BULLETS_MAX_COUNT)
const bullets_d = new Array(BULLETS_MAX_COUNT)
const bullets_e = new Array(BULLETS_MAX_COUNT)
const bullets_f = new Array(BULLETS_MAX_COUNT)
const kakashi_bullets = new Array(BULLETS_MAX_COUNT)

const SCORE_LENGTH = 14
const score_nums_dy = new Array(SCORE_LENGTH).fill(0)

const RIGHT_LIMIT = 448
const LEFT_LIMIT = 25

subCanvas.addEventListener('mousemove', (e) => {
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
  plane.posy = battleFieldHeight - 40
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

subCanvas.addEventListener('mousedown', (e) => {
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

subCanvas.addEventListener('mouseup', (e) => {
  for (let i = 0; i < BULLETS_MAX_COUNT; i++) {
    if (!kakashi_bullets[i].alive) {
      kakashi_bullets[i].set(kakashi.posx, kakashi.posy, 2)
      break
    }
  }
  // console.log(
  //   `${viewWidth / 2}, ${50}, ${viewWidth / 2 - 40}, ${viewHeight - 100}, view`
  // )
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
  mainCanvas,
  subCanvas,
  view,
  viewWidth,
  viewHeight,
  battlefield,
  battleFieldWidth,
  battleFieldHeight,
  BULLETS_MAX_COUNT,
  bullets_a,
  bullets_b,
  bullets_c,
  bullets_d,
  bullets_e,
  bullets_f,
  score_nums_dy,
  plane,
  kakashi,
  kakashi_bullets,
}
