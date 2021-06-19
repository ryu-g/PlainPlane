import { viewWidth, viewHeight, view, mousepos } from './global.js'
import { initInterface, drawPlane,drawHealth, drawScore, drawOptions } from './interfaceView.js'
console.log("imported:viewArea.js")

function draw(){
  view.clearRect(0,0,viewWidth,viewHeight)
  drawPlane(mousepos.x, mousepos.y, view)
  drawHealth(15, 30, view )
  drawScore(3429, 15, 110, view)
  drawOptions(15, 140, 60, 10, view)
  window.requestAnimationFrame(draw)
}

function display(){
  window.requestAnimationFrame(draw)
}

initInterface()
export {display}