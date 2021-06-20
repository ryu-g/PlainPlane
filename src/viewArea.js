import { viewWidth, viewHeight, view, mousepos } from './global.js'
import { initInterface, drawPlane,drawHealth, drawScore, drawOptions, drawKeyMarkers } from './interfaceView.js'
import { rect } from './functions_canvas.js'
console.log("imported:viewArea.js")
const leftSide = 40

function draw(){
  view.clearRect(0,0,viewWidth,viewHeight)
  drawScore(3420000000009, leftSide, 50, view)
  drawKeyMarkers(leftSide, 60, view)
  drawOptions(leftSide, 90, view)

  rect( viewWidth/2, 50, viewWidth/2 - 40, viewHeight-100, view)
  drawPlane(mousepos.x, viewHeight-90, view)
  drawHealth(viewWidth/2, viewHeight-34, view )
  drawHealth(viewWidth/2, 17, view )
  window.requestAnimationFrame(draw)
}

function display(){
  window.requestAnimationFrame(draw)
}

initInterface()
export {display}