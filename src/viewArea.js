import icon_twinbarrel from './assets/icon_twinbarrel.png'
import icon_rapidfire from './assets/icon_rapidfire.png'
import icon_upgradebulled from './assets/icon_upgradebulled.png'
import icon_heal from './assets/icon_heal.png'
import parts_healthframe from './assets/parts_healthframe.png'
import parts_healthgauge from './assets/parts_healthgauge.png'
import parts_plane from './assets/parts_plane.png'
console.log("imported:viewArea.js")

const canvas = document.getElementById('view')
const view = canvas.getContext('2d')

//-----get window-size and attach it to canvas tag-----//
const viewWidth = window.innerWidth
const viewHeight = window.innerHeight
canvas.width = viewWidth
canvas.height = viewHeight

//-----init image-----//
const twinbarrel = new Image()
const rapidfire = new Image()
const upgradebulled = new Image()
const heal = new Image()
const healthframe = new Image()
const healthgauge = new Image()
const plane = new Image()

//-----setting src-----//
twinbarrel.src  = icon_twinbarrel 
rapidfire.src  = icon_rapidfire 
heal.src  = icon_heal 
upgradebulled.src  = icon_upgradebulled 
healthframe.src  = parts_healthframe 
healthgauge.src  = parts_healthgauge 
plane.src  = parts_plane 

//-----loaded message define-----//
const loaded_icon_message = [false,false,false,false]
const loaded_healthItem_message = [false,false]
const loaded_plane_message = [false]

let position_x = 50
let position_y = 50

heal.addEventListener("load",function(){
  view.drawImage(heal,position_x,position_y)
  position_y+=50
  console.log("loaded: icon_heal.png")
  loaded_icon_message[3] = true
  }
)
rapidfire.addEventListener("load",function(){
  view.drawImage(rapidfire,position_x,position_y)
  position_y+=50
  console.log("loaded: icon_rapidfire.png")
  loaded_icon_message[1] = true
  }
)
twinbarrel.addEventListener("load",function(){
  view.drawImage(twinbarrel,position_x,position_y)
  position_y+=50
  console.log("loaded: icon_twinbarrel.png")
  loaded_icon_message[0] = true
  }
)
upgradebulled.addEventListener("load",function(){
  view.drawImage(upgradebulled,position_x,position_y)
  position_y+=50
  console.log("loaded: icon_upgradebulled.png")
  loaded_icon_message[2] = true
  }
)
healthframe.addEventListener("load",function(){
  view.drawImage(healthframe,position_x,position_y)
  position_y+=50
  console.log("loaded: parts_healthframe.png")
  loaded_healthItem_message[0] = true
  }
)
healthgauge.addEventListener("load",function(){
  view.drawImage(healthgauge,position_x,position_y)
  position_y+=50
  console.log("loaded: parts_healthgauge.png")
  loaded_healthItem_message[1] = true
  }
)
plane.addEventListener("load",function(){
  view.drawImage(plane,position_x,position_y)
  position_y+=50
  console.log("loaded: parts_plane.png")
  loaded_plane_message[0] = true
  }
)

const line = (x1,y1,x2,y2) => {
  view.fillRect(0,255,0,100);
  view.moveTo(x1, y1)
  view.lineTo(x2,y2)
  view.closePath()
  view.stroke()
}


console.log(`w:h = ${viewWidth}:${viewHeight}`)