import button_q from './assets/button_q@2x.png'
import button_w from './assets/button_w@2x.png'
import button_e from './assets/button_e@2x.png'
import button_r from './assets/button_r@2x.png'
import option_twinbarrel from './assets/option_twinbarrel@2x.png'
import option_tripletbarrel from './assets/option_tripletbarrel@2x.png'
import option_rapidfire from './assets/option_rapidfire@2x.png'
import option_powerup1 from './assets/option_powerup1@2x.png'
import option_powerup2 from './assets/option_powerup2@2x.png'
import option_powerup3 from './assets/option_powerup3@2x.png'
import option_heal from './assets/option_heal@2x.png'
import health_label from './assets/health_label@2x.png'
import health_dot from './assets/health_dot@2x.png'
import parts_plane from './assets/parts_plane.png'

const marker_q = new Image()
const marker_w = new Image()
const marker_e = new Image()
const marker_r = new Image()
const twinbarrel = new Image()
const tripletbarrel = new Image()
const rapidfire = new Image()
const upgradebulled_a = new Image()
const upgradebulled_b = new Image()
const upgradebulled_c = new Image()
const heal = new Image()
const healthLabel = new Image()
const healthgauge = new Image()
const plane = new Image()

const loaded_buttons_message = [false,false,false,false]
const loaded_icon_message = [false,false,false,false,false,false,false]
const loaded_healthItem_message = [false,false]
const loaded_plane_message = [false]

function initInterface(){
  marker_q.src = button_q
  marker_w.src = button_w
  marker_e.src = button_e
  marker_r.src = button_r
  twinbarrel.src = option_twinbarrel 
  tripletbarrel.src = option_tripletbarrel
  rapidfire.src = option_rapidfire 
  heal.src = option_heal 
  upgradebulled_a.src = option_powerup1 
  upgradebulled_b.src = option_powerup2
  upgradebulled_c.src = option_powerup3 
  healthLabel.src = health_label 
  healthgauge.src = health_dot 
  plane.src = parts_plane 
  console.log("loading images.....")
}

marker_q.addEventListener("load", function(){
  console.log("- loaded: button_q.png")
  loaded_buttons_message[0] = true
})
marker_w.addEventListener("load", function(){
  console.log("- loaded: button_w.png")
  loaded_buttons_message[1] = true
})
marker_e.addEventListener("load", function(){
  console.log("- loaded: button_e.png")
  loaded_buttons_message[2] = true
})
marker_r.addEventListener("load", function(){
  console.log("- loaded: button_r.png")
  loaded_buttons_message[3] = true
})

heal.addEventListener("load",function(){
  console.log("- loaded: option_heal.png")
  loaded_icon_message[3] = true
  }
)
rapidfire.addEventListener("load",function(){
  console.log("- loaded: option_rapidfire.png")
  loaded_icon_message[1] = true
  }
)
twinbarrel.addEventListener("load",function(){
  console.log("- loaded: option_twinbarrel.png")
  loaded_icon_message[0] = true
  }
)
tripletbarrel.addEventListener("load",function(){
  console.log("- loaded: option_tripletbarrel.png")
  loaded_icon_message[4] = true
  }
)
upgradebulled_a.addEventListener("load",function(){
  console.log("- loaded: option_powerup1.png")
  loaded_icon_message[2] = true
  }
)
upgradebulled_a.addEventListener("load",function(){
  console.log("- loaded: option_powerup1.png")
  loaded_icon_message[5] = true
  }
)
upgradebulled_a.addEventListener("load",function(){
  console.log("- loaded: option_powerup1.png")
  loaded_icon_message[6] = true
  }
)
healthLabel.addEventListener("load",function(){
  console.log("- loaded: health_label.png")
  loaded_healthItem_message[0] = true
  }
)
healthgauge.addEventListener("load",function(){
  console.log("- loaded: health_dot.png")
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

function drawKeyMarkers(marker_x, marker_y, view){
  let itemAllLoaded = true
  for(let judge of loaded_buttons_message){
    if(!judge){
      itemAllLoaded = false
      break
    }
  }
  if(itemAllLoaded){
    const w = marker_q.width / 2
    const h = marker_q.height / 2
    const gap = 10
    view.drawImage(marker_q,marker_x + (w + gap) * 0, marker_y,w,h)
    view.drawImage(marker_w,marker_x + (w + gap) * 1, marker_y,w,h)
    view.drawImage(marker_e,marker_x + (w + gap) * 2, marker_y,w,h)
    view.drawImage(marker_r,marker_x + (w + gap) * 3, marker_y,w,h)
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
    const health = 40
    const gauge_dot_w = healthgauge.width / 2
    const gauge_dot_h = healthgauge.height / 2
    const gauge_dot_gap = 2
    const label_w = healthLabel.width / 2
    const label_h = healthLabel.height / 2
    view.drawImage(healthLabel, Health_posx, Health_posy, label_w, label_h)
    for(let i = 0 ; i < health; i++){
      view.drawImage
        (
          healthgauge,
          Health_posx + label_w + gauge_dot_gap + (gauge_dot_w + gauge_dot_gap) * i,
          Health_posy,
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

function drawOptions(Options_posx, Options_posy, view){
  let itemAllLoaded = true
  for(let judge of loaded_icon_message){
    if(!judge){
      itemAllLoaded = false
      break
    }
  }
  if(itemAllLoaded){
    const gap = 10
    const size = twinbarrel.width / 2
    view.drawImage(twinbarrel, Options_posx, Options_posy,  size, size)
    view.drawImage(tripletbarrel, Options_posx, Options_posy + size + gap ,  size, size)
    view.drawImage(rapidfire, Options_posx + size + gap, Options_posy,  size, size)
    view.drawImage(upgradebulled_a, Options_posx + (size + gap) * 2 , Options_posy,  size, size)
    view.drawImage(upgradebulled_a, Options_posx + (size + gap) * 2 , Options_posy + (size + gap) * 1,  size, size)
    view.drawImage(upgradebulled_a, Options_posx + (size + gap) * 2 , Options_posy + (size + gap) * 2,  size, size)
    view.drawImage(heal, Options_posx + (size + gap) * 3 , Options_posy,  size, size)
    view.drawImage(heal, Options_posx + (size + gap) * 3 , Options_posy + (size + gap) * 1,  size, size)
    view.drawImage(heal, Options_posx + (size + gap) * 3 , Options_posy + (size + gap) * 2,  size, size)
  }
}

export{initInterface, drawPlane, drawHealth, drawScore, drawOptions, drawKeyMarkers}