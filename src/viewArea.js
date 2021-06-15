console.log("imported:viewArea.js")
const canvas = document.getElementById('view')
const view = canvas.getContext('2d')
const viewWidth = window.innerWidth
const viewHeight = window.innerHeight
canvas.width = viewWidth
canvas.height = viewHeight
const icon_heal = new Image()
const icon_rapidfire = new Image()
const icon_twinbarrel = new Image()
const icon_upgradebulled = new Image()
const parts_healthframe = new Image()
const parts_healthgauge = new Image()
const parts_plane = new Image()
icon_heal.src = './icon_heal.png'
icon_rapidfire.src = './icon_rapidfire.png'
icon_twinbarrel.src = './icon_twinbarrel.png'
icon_upgradebulled.src = './icon_upgradebulled.png'
parts_healthframe.src = './parts_healthframe.png'
parts_healthgauge.src = './parts_healthgauge.png'
parts_plane.src = './parts_plane.png'


const line = (x1,y1,x2,y2) => {
  view.fillRect(0,255,0,100);
  view.moveTo(x1, y1)
  view.lineTo(x2,y2)
  view.closePath()
  view.stroke()
}


console.log(`w:h = ${viewWidth}:${viewHeight}`)