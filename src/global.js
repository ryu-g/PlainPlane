const canvas = document.getElementById('view')
const view = canvas.getContext('2d')
const mousepos = {x : 0, y: 0}
canvas.addEventListener('mousemove', (e) => {
  let rect = e.target.getBoundingClientRect()
  mousepos.x = Math.floor(e.clientX - rect.left)
  mousepos.y = Math.floor(e.clientY - rect.top)
  // console.log(`${mousepos.x} : ${mousepos.y}`)
})
canvas.addEventListener("mousedown", (e) => {
  console.log("!!!!!!!!!clicked!!!!!!!!!")
})

const dpr = window.devicePixelRatio || 1;
const viewWidth = 1024 //window.innerWidth
const viewHeight = 600 //window.innerHeight
console.log(`w:h = ${viewWidth}:${viewHeight}`)

canvas.width = viewWidth * dpr
canvas.height = viewHeight * dpr
view.scale(dpr,dpr)
canvas.style.width = viewWidth + 'px'
canvas.style.height = viewHeight + 'px'

export { viewWidth, viewHeight, view, mousepos }