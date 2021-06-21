import {
  viewWidth,viewHeight, view,
  bullets, fire } from './global.js'
import { shootBullets, makeAliveBullets } from './functions_logics'
import { loadImages, drawPlane,drawHealth, drawScore, drawOptions, drawKeyMarkers, drawBullets } from './interfaceView.js'
import { rect } from './functions_canvas.js'
import { plane } from './global.js'
console.log("imported:viewArea.js")
const leftSide = 40

function draw(){
  view.clearRect(0,0,viewWidth,viewHeight)
  drawScore(3420000000009, leftSide, 50, view)
  drawKeyMarkers(leftSide, 60, view)
  drawOptions(leftSide, 90, view)
  rect( viewWidth/2, 50, viewWidth/2 - 40, viewHeight-100, view)
  drawPlane(plane.posx, viewHeight-90, view)
  drawHealth(viewWidth/2, viewHeight-34, view )
  drawHealth(viewWidth/2, 17, view)
  makeAliveBullets(plane, fire, bullets)
  shootBullets(bullets, view)

  window.requestAnimationFrame(draw)
}

function display(){
  window.requestAnimationFrame(draw)
}

loadImages()
export {display}