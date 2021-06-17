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
const dpr = window.devicePixelRatio || 1;
const viewWidth = 350 //window.innerWidth
const viewHeight = 733 //window.innerHeight
console.log(`w:h = ${viewWidth}:${viewHeight}`)

canvas.width = viewWidth * dpr
canvas.height = viewHeight * dpr
view.scale(dpr,dpr)
canvas.style.width = viewWidth + 'px';
canvas.style.height = viewHeight + 'px';

//-----init image-----//
const twinbarrel = new Image()
const rapidfire = new Image()
const upgradebulled = new Image()
const heal = new Image()
const healthframe = new Image()
const healthgauge = new Image()
const plane = new Image()

//-----setting src-----//
const init = () =>{
  twinbarrel.src  = icon_twinbarrel 
  rapidfire.src  = icon_rapidfire 
  heal.src  = icon_heal 
  upgradebulled.src  = icon_upgradebulled 
  healthframe.src  = parts_healthframe 
  healthgauge.src  = parts_healthgauge 
  plane.src  = parts_plane 
  console.log("loading images.....")
  window.requestAnimationFrame(draw)
}
//-----loaded message define-----//
const loaded_icon_message = [false,false,false,false]
const loaded_healthItem_message = [false,false]
const loaded_plane_message = [false]

heal.addEventListener("load",function(){
  console.log("- loaded: icon_heal.png")
  loaded_icon_message[3] = true
  }
)
rapidfire.addEventListener("load",function(){
  console.log("- loaded: icon_rapidfire.png")
  loaded_icon_message[1] = true
  }
)
twinbarrel.addEventListener("load",function(){
  console.log("- loaded: icon_twinbarrel.png")
  loaded_icon_message[0] = true
  }
)
upgradebulled.addEventListener("load",function(){
  console.log("- loaded: icon_upgradebulled.png")
  loaded_icon_message[2] = true
  }
)
healthframe.addEventListener("load",function(){
  console.log("- loaded: parts_healthframe.png")
  loaded_healthItem_message[0] = true
  }
)
healthgauge.addEventListener("load",function(){
  console.log("- loaded: parts_healthgauge.png")
  loaded_healthItem_message[1] = true
  }
)
plane.addEventListener("load",function(){
  console.log("- loaded: parts_plane.png")
  loaded_plane_message[0] = true
  }
)

//-----define drawing OptionIcons function-----//
function drawPlane(plane_posx, plane_posy, size, flag){
  let itemAllLoaded = true
  for(let judge of flag){
    if(!judge){
      itemAllLoaded = false
      break
    }
  }
  if(itemAllLoaded){
    view.drawImage(plane,plane_posx, plane_posy,size,size)
  }
}

function drawHealth(Health_posx, Health_posy, w, flag){
  const health = 20
  const gauge_dot_w = w * 0.1
  let itemAllLoaded = true
  for(let judge of flag){
    if(!judge){
      itemAllLoaded = false
      break
    }
  }
  if(itemAllLoaded){
    view.drawImage(healthframe,Health_posx,Health_posy,w*0.9,40)
    for(let i = 0 ; i < health; i++)
      view.drawImage(healthgauge,
                    5 + Health_posx + (w * 0.04) * i ,
                    10 + Health_posy + gauge_dot_w * 0.1 ,
                    gauge_dot_w, gauge_dot_w)
  }
}

function drawScore(score, score_posx, score_posy){
  let s = 0
  s += score
  view.font = "14px sans-serif";
  view.fillStyle = "#94FFA0"
  view.fillText(`SCORE : ${s}`, score_posx, score_posy);
}

function drawOptions(Options_posx, Options_posy, size, gap, flag){
  let itemAllLoaded = true
  for(let judge of flag){
    if(!judge){
      itemAllLoaded = false
      break
    }
  }
  if(itemAllLoaded){
    view.drawImage(twinbarrel, Options_posx, Options_posy,  size, size)
    view.drawImage(rapidfire, Options_posx + size + gap, Options_posy,  size, size)
    view.drawImage(upgradebulled, Options_posx + (size + gap) * 2 , Options_posy,  size, size)
    view.drawImage(heal, Options_posx + (size + gap) * 3 , Options_posy,  size, size)
    view.drawImage(heal, Options_posx + (size + gap) * 4 , Options_posy,  size, size)
    view.drawImage(heal, Options_posx + (size + gap) * 5 , Options_posy,  size, size)
  }
}

//----- DRAWING images-----//
function draw(){
  view.clearRect(0,0,viewWidth,viewHeight)
  drawPlane(viewWidth/2, viewHeight/2, viewWidth/6, loaded_plane_message)
  drawHealth(15,viewHeight*0.8, viewWidth*0.65, loaded_healthItem_message )
  drawScore(3429, 15, viewHeight*0.88)
  drawOptions(15, viewHeight*0.9, viewWidth*0.13, 10, loaded_icon_message)
  window.requestAnimationFrame(draw)
}

init()