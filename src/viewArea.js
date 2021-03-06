import {
  viewWidth,
  viewHeight,
  view,
  plane,
  kakashi,
  kakashi_bullets,
  bullets_a,
  bullets_b,
  bullets_c,
  bullets_d,
  bullets_e,
  bullets_f,
  battlefield,
  battleFieldHeight,
  battleFieldWidth,
  score_nums_dy
} from './global.js'
import {
  drawPlane,
  drawKakashiHealth,
  drawPlayerHealth,
  drawScore,
  drawHeaderOfKeys,
  drawHeaderOfOptions,
  drawOptions_multishoot,
  drawOptions_rapidFire,
  drawOptions_bullets,
  drawOptions_heals,
  drawKeyMarkers,
  drawKakashi,
  drawBullets,
} from './functions_img.js'
import { rect } from './functions_canvas.js'
import { zeroPadding } from './functions_logics.js'
console.log('imported:viewArea.js')
const leftSide = 40

function draw() {
  view.clearRect(0, 0, viewWidth, viewHeight)
  battlefield.clearRect(0, 0, battleFieldWidth, battleFieldHeight)
  view.fillStyle = 'black'
  view.fillRect(0, 0, viewWidth, viewHeight)
  rect(viewWidth / 2, 50, viewWidth / 2 - 40, viewHeight - 100, view)
  drawScore(zeroPadding(plane.score), leftSide, 50, score_nums_dy,  view)
  drawHeaderOfKeys(leftSide, 80, view)
  drawKeyMarkers(leftSide, 100, view)
  drawHeaderOfOptions(leftSide, 140, view)
  drawOptions_multishoot(leftSide, 160, view)
  drawOptions_rapidFire(leftSide + 70, 160, view)
  drawOptions_bullets(leftSide + 140, 160, view)
  drawOptions_heals(leftSide + 210, 160, view)
  drawPlayerHealth(viewWidth / 2, viewHeight - 34, view)
  drawKakashiHealth(viewWidth / 2, 17, view)
  drawPlane(plane.posx, battleFieldHeight - 40, battlefield)
  drawKakashi(kakashi.posx, kakashi.posy, battlefield)
  drawBullets(battlefield, bullets_a)
  drawBullets(battlefield, bullets_b)
  drawBullets(battlefield, bullets_c)
  drawBullets(battlefield, bullets_d)
  drawBullets(battlefield, bullets_e)
  drawBullets(battlefield, bullets_f)
  drawBullets(battlefield, kakashi_bullets)
}

export { draw }
