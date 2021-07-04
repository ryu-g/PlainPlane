import {
  viewWidth,
  viewHeight,
  view,
  plane,
  kakashi, 
  kakashi_bullets, 
  bullets_a,
  bullets_b, 
  bullets_c 
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
  drawBullets 
} from './functions_img.js'
import { rect } from './functions_canvas.js'
import { zeroPadding } from './functions_logics.js'
console.log("imported:viewArea.js")
const leftSide = 40

function draw(){
  view.clearRect(0,0,viewWidth,viewHeight) 
  rect( viewWidth/2, 50, viewWidth/2 - 40, viewHeight-100, view)
  drawScore(zeroPadding(plane.score), leftSide, 50, view)
  drawHeaderOfKeys(leftSide, 80, view)
  drawKeyMarkers(leftSide, 100, view)
  drawHeaderOfOptions(leftSide, 140, view)
  // drawOptions(leftSide, 160, view)
  drawOptions_multishoot(leftSide, 160, view)
  drawOptions_rapidFire(leftSide + 70, 160, view)
  drawOptions_bullets(leftSide + 140, 160, view)
  drawOptions_heals(leftSide + 210, 160, view)
  drawPlayerHealth(viewWidth/2, viewHeight-34, view )
  drawKakashiHealth(viewWidth/2, 17, view)
  drawPlane(plane.posx, viewHeight-90, view)
  drawKakashi(kakashi.posx, kakashi.posy, view)
  drawBullets(view, bullets_a)
  drawBullets(view, bullets_b)
  drawBullets(view, bullets_c)
  drawBullets(view, kakashi_bullets)
  // for(let i = 0; i < kakashi_bullets.length; i++){
  //   if(kakashi_bullets[i].alive){
  //     drawBullets(kakashi_bullets[i].x, kakashi_bullets[i].y, view)
  //   }
  // }
}

export { draw }
