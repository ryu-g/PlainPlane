import {
  viewWidth,viewHeight, view,
  bullets,kakashi_bullets} from './global.js'
import { shootBullets, kakashiShootBullets} from './functions_logics'
import { loadImages, drawPlane,drawKakashiHealth,drawPlayerHealth, drawScore, drawOptions, drawKeyMarkers, drawKakashi } from './functions_img.js'
import { rect } from './functions_canvas.js'
import { plane, kakashi} from './global.js'
console.log("imported:viewArea.js")
const leftSide = 40

function draw(){
  view.clearRect(0,0,viewWidth,viewHeight) 
  rect( viewWidth/2, 50, viewWidth/2 - 40, viewHeight-100, view)
  drawScore(3420000000009, leftSide, 50, view)
  drawKeyMarkers(leftSide, 60, view)
  drawOptions(leftSide, 90, view)
  drawPlayerHealth(viewWidth/2, viewHeight-34, view )
  drawKakashiHealth(viewWidth/2, 17, view)
  drawPlane(plane.posx, viewHeight-90, view)
  
  drawKakashi(kakashi.posx, kakashi.posy, view)
  shootBullets(bullets, view)
  kakashiShootBullets(kakashi_bullets, view)
  
  window.requestAnimationFrame(draw)
}

function display(){
  window.requestAnimationFrame(draw)
}

loadImages()
export {display}