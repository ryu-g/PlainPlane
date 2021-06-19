import icon_twinbarrel from './assets/icon_twinbarrel.png'
import icon_rapidfire from './assets/icon_rapidfire.png'
import icon_upgradebulled from './assets/icon_upgradebulled.png'
import icon_heal from './assets/icon_heal.png'
import parts_healthframe from './assets/parts_healthframe.png'
import parts_healthgauge from './assets/parts_healthgauge.png'
import parts_plane from './assets/parts_plane.png'

const twinbarrel = new Image()
const rapidfire = new Image()
const upgradebulled = new Image()
const heal = new Image()
const healthframe = new Image()
const healthgauge = new Image()
const plane = new Image()

const loaded_icon_message = [false,false,false,false]
const loaded_healthItem_message = [false,false]
const loaded_plane_message = [false]

function initInterface(){
  twinbarrel.src = icon_twinbarrel 
  rapidfire.src = icon_rapidfire 
  heal.src = icon_heal 
  upgradebulled.src = icon_upgradebulled 
  healthframe.src = parts_healthframe 
  healthgauge.src = parts_healthgauge 
  plane.src = parts_plane 
  console.log("loading images.....")
}

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

function drawPlane(plane_posx, plane_posy, view){
  let itemAllLoaded = true
  for(let judge of loaded_plane_message){
    if(!judge){
      itemAllLoaded = false
      break
    }
  }
  if(itemAllLoaded){
    const size = plane.width / 10
    view.drawImage(plane,plane_posx - size/2, plane_posy - size/2,size,size)
  }
}

function drawHealth(Health_posx, Health_posy, view){
  let itemAllLoaded = true
  for(let judge of loaded_healthItem_message){
    if(!judge){
      itemAllLoaded = false
      break
    }
  }
  if(itemAllLoaded){
    const health = 22
    const gauge_dot_w = healthgauge.width / 4
    const gauge_dot_h = healthgauge.height / 4
    const gauge_dot_gap = gauge_dot_w * 0.4
    const frame_w = healthframe.width / 4
    const frame_h = healthframe.height / 4
    view.drawImage(healthframe,Health_posx,Health_posy,frame_w,frame_h)
    for(let i = 0 ; i < health; i++){
      view.drawImage
        (
          healthgauge,
          10 + Health_posx + gauge_dot_gap * i,
          Health_posy+20,
          gauge_dot_w,gauge_dot_h
        )
      }
  }
}

function drawScore(score, score_posx, score_posy, view){
  let s = 0
  s += score
  view.font = "14px sans-serif";
  view.fillStyle = "#94FFA0"
  view.fillText(`SCORE : ${s}`, score_posx, score_posy);
}

function drawOptions(Options_posx, Options_posy, size, gap, view){
  let itemAllLoaded = true
  for(let judge of loaded_icon_message){
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
  }
}

export{initInterface, drawPlane, drawHealth, drawScore, drawOptions}