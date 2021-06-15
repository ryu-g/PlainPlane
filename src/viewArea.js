console.log("imported:viewArea.js")
const canvas = document.getElementById('view')
const view = canvas.getContext('2d')
const viewWidth = canvas.width
const viewHeight = canvas.height
const line = (x1,y1,x2,y2) => {
  view.fillRect(0,255,0,100);
  view.moveTo(x1, y1)
  view.lineTo(x2,y2)
  view.closePath()
  view.stroke()
}


console.log(`w:h = ${viewWidth}:${viewHeight}`)