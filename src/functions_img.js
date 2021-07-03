import { kakashi, plane } from './global.js'
import header_upgrade_key_path from './assets/header_upgrade_keys@2x.png'
import header_options_path from './assets/header_options@2x.png'
import button_q from './assets/button_q@2x.png'
import button_w from './assets/button_w@2x.png'
import button_e from './assets/button_e@2x.png'
import button_r from './assets/button_r@2x.png'
import button_q_n from './assets/button_q_nonactive@2x.png'
import button_w_n from './assets/button_w_nonactive@2x.png'
import button_e_n from './assets/button_e_nonactive@2x.png'
import button_r_n from './assets/button_r_nonactive@2x.png'

import arrow_active_path from './assets/option_arrow_active@2x.png'
import arrow_nonactive_path from './assets/option_arrow_nonactive@2x.png'
import option_defaultshot from './assets/option_defaultshot@2x.png'
import option_defaultbullet from './assets/option_defaultbullet@2x.png'
import option_twinbarrel from './assets/option_twinbarrel@2x.png'
import option_twinbarrel_nonActive from './assets/option_twinbarrel_nonActive@2x.png'
import option_tripletbarrel from './assets/option_tripletbarrel@2x.png'
import option_tripletbarrel_nonActive from './assets/option_tripletbarrel_nonActive@2x.png'
import option_rapidfire from './assets/option_rapidfire@2x.png'
import option_rapidfire_nonActive from './assets/option_rapidfire_nonActive@2x.png'
import option_powerup1 from './assets/option_powerup1@2x.png'
import option_powerup1_nonActive from './assets/option_powerup1_nonActive@2x.png'
import option_powerup2 from './assets/option_powerup2@2x.png'
import option_powerup2_nonActive from './assets/option_powerup2_nonActive@2x.png'
import option_powerup3 from './assets/option_powerup3@2x.png'
import option_powerup3_nonActive from './assets/option_powerup3_nonActive@2x.png'
import option_heal from './assets/option_heal@2x.png'
import option_heal_nonActive from './assets/option_heal_nonActive@2x.png'
import health_label from './assets/health_label@2x.png'
import health_dot_alive from './assets/health_dot_on@2x.png'
import health_dot_dead from './assets/health_dot_off@2x.png'
import parts_plane from './assets/parts_plane.png'
import bullet_1 from './assets/bullet_1.png'
import bullet_2 from './assets/bullet_2.png'
import bullet_3 from './assets/bullet_3.png'
import bullet_4 from './assets/bullet_4@2x.png'
import kakashi_path from './assets/kakashi@2x.png'

const header_upgrade_key = new Image()
const header_options = new Image()
const marker_q = new Image()
const marker_w = new Image()
const marker_e = new Image()
const marker_r = new Image()
const marker_q_nonActive = new Image()
const marker_w_nonActive = new Image()
const marker_e_nonActive = new Image()
const marker_r_nonActive = new Image()

const defaultshot = new Image()
const defaultbullet = new Image()
const arrow_active = new Image()
const arrow_nonactive = new Image()
const twinbarrel = new Image()
const tripletbarrel = new Image()
const rapidfire = new Image()
const upgradebulled_a = new Image()
const upgradebulled_b = new Image()
const upgradebulled_c = new Image()
const heal = new Image()

const twinbarrel_hide = new Image()
const tripletbarrel_hide = new Image()
const rapidfire_hide = new Image()
const upgradebulled_a_hide = new Image()
const upgradebulled_b_hide = new Image()
const upgradebulled_c_hide = new Image()
const heal_hide = new Image()

const healthLabel = new Image()
const healthgauge_alive = new Image()
const healthgauge_dead = new Image()
const plane_img = new Image()
const bullet_elipse = new Image()
const bullet_triangle = new Image()
const bullet_rect = new Image()
const bullet_star = new Image()
const kakashi_img = new Image()

const loaded_buttons_message = [false,false,false,false]
const loaded_icon_message = [false,false,false,false,false,false,false]
const loaded_healthItem_message = [false,false]
const loaded_plane_message = [false]
const loaded_bullet_message = [false,false,false,false]

function loadImages(){
  header_upgrade_key.src = header_upgrade_key_path
  header_options.src = header_options_path
  marker_q.src = button_q
  marker_w.src = button_w
  marker_e.src = button_e
  marker_r.src = button_r
  marker_q_nonActive.src = button_q_n
  marker_w_nonActive.src = button_w_n
  marker_e_nonActive.src = button_e_n
  marker_r_nonActive.src = button_r_n

  defaultshot.src = option_defaultshot
  defaultbullet.src = option_defaultbullet
  arrow_active.src = arrow_active_path
  arrow_nonactive.src = arrow_nonactive_path
  twinbarrel.src = option_twinbarrel 
  tripletbarrel.src = option_tripletbarrel
  rapidfire.src = option_rapidfire 
  heal.src = option_heal 
  upgradebulled_a.src = option_powerup1 
  upgradebulled_b.src = option_powerup2
  upgradebulled_c.src = option_powerup3

  twinbarrel_hide.src = option_twinbarrel_nonActive
  tripletbarrel_hide.src = option_tripletbarrel_nonActive
  rapidfire_hide.src = option_rapidfire_nonActive
  heal_hide.src = option_heal_nonActive
  upgradebulled_a_hide.src = option_powerup1_nonActive
  upgradebulled_b_hide.src = option_powerup2_nonActive
  upgradebulled_c_hide.src = option_powerup3_nonActive

  healthLabel.src = health_label 
  healthgauge_alive.src = health_dot_alive 
  healthgauge_dead.src = health_dot_dead
  plane_img.src = parts_plane
  bullet_elipse.src = bullet_1
  bullet_triangle.src = bullet_2
  bullet_rect.src = bullet_3
  bullet_star.src = bullet_4
  kakashi_img.src = kakashi_path
  console.log("loading images.....")
}

// ---- option interface loading message -----
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

// ---- health item loading message ----
healthLabel.addEventListener("load",function(){
  console.log("- loaded: health_label.png")
  loaded_healthItem_message[0] = true
  }
)
healthgauge_alive.addEventListener("load",function(){
  console.log("- loaded: health_dot.png")
  loaded_healthItem_message[1] = true
  }
)
plane_img.addEventListener("load",function(){
  console.log("- loaded: parts_plane.png")
  loaded_plane_message[0] = true
  }
)

// ---- bullet loading message ----//
bullet_elipse.addEventListener("load", function(){
  console.log("- loaded: bullet_elipse")
  loaded_bullet_message[0] = true
  }
)
bullet_triangle.addEventListener("load", function(){
  console.log("- loaded: bullet_triangle")
  loaded_bullet_message[1] = true
  }
)
bullet_rect.addEventListener("load", function(){
  console.log("- loaded: bullet_rect")
  loaded_bullet_message[2] = true
  }
)
bullet_star.addEventListener("load", function(){
  console.log("- loaded: bullet_star")
  loaded_bullet_message[3] = true
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
    const size = plane_img.width / 10
    // view.drawImage( plane, x - size/2, plane_posy - size/2, size, size)
    view.drawImage(plane_img, plane_posx - size/2, plane_posy - size/2, size, size)
  }
}

function drawKakashi(kakashi_x, kakashi_y, view){
  view.drawImage(kakashi_img, kakashi_x, kakashi_y)
}

function drawHeaderOfKeys(header_x, header_y, view){
  const w = header_upgrade_key.width / 2
  const h = header_upgrade_key.height / 2 
  view.drawImage(header_upgrade_key, header_x, header_y, w, h)
}

function drawHeaderOfOptions(header_x, header_y, view){
  const w = header_options.width / 2
  const h = header_options.height / 2
  view.drawImage(header_options, header_x, header_y, w, h)
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
    view.drawImage(marker_q_nonActive,marker_x + (w + gap) * 0, marker_y,w,h)
    view.drawImage(marker_w_nonActive,marker_x + (w + gap) * 1, marker_y,w,h)
    view.drawImage(marker_e_nonActive,marker_x + (w + gap) * 2, marker_y,w,h)
    view.drawImage(marker_r_nonActive,marker_x + (w + gap) * 3, marker_y,w,h)
  }
}

function drawKakashiHealth(Health_posx, Health_posy, view){
  let itemAllLoaded = true
  for(let judge of loaded_healthItem_message){
    if(!judge){
      itemAllLoaded = false
      break
    }
  }
  if(itemAllLoaded){
    const health = kakashi.health
    const gauge_dot_w = healthgauge_alive.width / 2
    const gauge_dot_h = healthgauge_alive.height / 2
    const gauge_dot_gap = 0.5
    const label_w = healthLabel.width / 2
    const label_h = healthLabel.height / 2
    view.drawImage(healthLabel, Health_posx, Health_posy, label_w, label_h)
    let item
    for(let i = 0 ; i < kakashi.maxhp; i++){
      if(i < health){ item = healthgauge_alive } else { item = healthgauge_dead }
      view.drawImage
        (
          item,
          Health_posx + label_w + gauge_dot_gap + (gauge_dot_w + gauge_dot_gap) * i,
          Health_posy,
          gauge_dot_w,gauge_dot_h
        )
      }
  }
}

function drawPlayerHealth(Health_posx, Health_posy, view){
  let itemAllLoaded = true
  for(let judge of loaded_healthItem_message){
    if(!judge){
      itemAllLoaded = false
      break
    }
  }
  if(itemAllLoaded){
    const health = plane.health
    const gauge_dot_w = healthgauge_alive.width / 2
    const gauge_dot_h = healthgauge_alive.height / 2
    const gauge_dot_gap = 0.5
    const label_w = healthLabel.width / 2
    const label_h = healthLabel.height / 2
    let item
    view.drawImage(healthLabel, Health_posx, Health_posy, label_w, label_h)
    for(let i = 0 ; i < plane.maxhp; i++){
      if(i <= health){ item = healthgauge_alive } else { item = healthgauge_dead }
      view.drawImage
        (
          item,
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
    const gap_x = 10
    const gap_y = 30
    const optionSize = twinbarrel.width / 2
    let _twinbarrel, _tripletbarrel, _rapidfire, _upgradebulled_a, _upgradebulled_b, _upgradebulled_c, _heal_a,  _heal_b,  _heal_c
    if( plane.score > 1000 ){ _twinbarrel = twinbarrel } else { _twinbarrel = twinbarrel_hide }
    if( plane.score > 10000 ){ _tripletbarrel = tripletbarrel } else { _tripletbarrel = tripletbarrel_hide }
    if( plane.score > 3000 ){ _rapidfire = rapidfire } else { _rapidfire = rapidfire_hide }
    if( plane.score > 5000 ){ _upgradebulled_a = upgradebulled_a } else { _upgradebulled_a = upgradebulled_a_hide }
    if( plane.score > 20000 ){ _upgradebulled_b = upgradebulled_b } else { _upgradebulled_b = upgradebulled_b_hide }
    if( plane.score > 100000 ){ _upgradebulled_c = upgradebulled_b } else { _upgradebulled_c = upgradebulled_b_hide }
    if( plane.score > 5000 ){ _heal_a = heal } else { _heal_a = heal_hide }
    if( plane.score > 15000 ){ _heal_b = heal } else { _heal_b = heal_hide }
    if( plane.score > 30000 ){ _heal_c = heal } else { _heal_c = heal_hide }

    view.drawImage(defaultshot, Options_posx, Options_posy + (optionSize + gap_y) * 0, optionSize, optionSize)
    view.drawImage(_twinbarrel, Options_posx, Options_posy + (optionSize + gap_y) * 1,  optionSize, optionSize)
    view.drawImage(_tripletbarrel, Options_posx, Options_posy + (optionSize + gap_y) * 2 ,  optionSize, optionSize)
    drawArrows(Options_posx + optionSize/3, Options_posy + (optionSize + gap_y/3) * 1, false, view)
    drawArrows(Options_posx + optionSize/3, Options_posy + (optionSize + gap_y*2/3) * 2, false, view)

    view.drawImage(defaultshot, Options_posx + optionSize + gap_x, Options_posy + (optionSize + gap_y) * 0, optionSize, optionSize)
    view.drawImage(_rapidfire, Options_posx + optionSize + gap_x, Options_posy + (optionSize + gap_y) * 1,  optionSize, optionSize)
    drawArrows(Options_posx + optionSize + gap_x + optionSize/3, Options_posy + (optionSize + gap_y/3) * 1, false, view)

    view.drawImage(defaultbullet, Options_posx + (optionSize + gap_x) * 2, Options_posy + (optionSize + gap_y) * 0, optionSize, optionSize)
    view.drawImage(_upgradebulled_a, Options_posx + (optionSize + gap_x) * 2 , Options_posy + (optionSize + gap_y) * 1,  optionSize, optionSize)
    view.drawImage(_upgradebulled_b, Options_posx + (optionSize + gap_x) * 2 , Options_posy + (optionSize + gap_y) * 2,  optionSize, optionSize)
    view.drawImage(_upgradebulled_c, Options_posx + (optionSize + gap_x) * 2 , Options_posy + (optionSize + gap_y) * 3,  optionSize, optionSize)
    drawArrows(Options_posx + (optionSize + gap_x) * 2 + optionSize/3, Options_posy + (optionSize + gap_y/3) * 1, false, view)
    drawArrows(Options_posx + (optionSize + gap_x) * 2 + optionSize/3, Options_posy + (optionSize + gap_y*2/3) * 2, false, view)
    drawArrows(Options_posx + (optionSize + gap_x) * 2 + optionSize/3, Options_posy + (optionSize + gap_y*7/9) * 3, false, view)

    view.drawImage(_heal_a, Options_posx + (optionSize + gap_x) * 3 , Options_posy,  optionSize, optionSize)
    view.drawImage(_heal_b, Options_posx + (optionSize + gap_x) * 3 , Options_posy + (optionSize + gap_y) * 1,  optionSize, optionSize)
    view.drawImage(_heal_c, Options_posx + (optionSize + gap_x) * 3 , Options_posy + (optionSize + gap_y) * 2,  optionSize, optionSize)
    drawArrows(Options_posx + (optionSize + gap_x) * 3 + optionSize/3, Options_posy + (optionSize + gap_y/3) * 1, false, view)
    drawArrows(Options_posx + (optionSize + gap_x) * 3 + optionSize/3, Options_posy + (optionSize + gap_y*2/3) * 2, false, view)
  }
}

function drawArrows(x,y,isActive,view){
  if(isActive){
    view.drawImage(arrow_active, x, y)
  }else{
    view.drawImage(arrow_nonactive, x, y)
  }
}

function drawBullets(view, bullets){
  for(let i = 0; i < bullets.length; i++){
    if(bullets[i].alive){
      view.drawImage(bullet_star, bullets[i].x, bullets[i].y)
    }
  }
}

export{
  loadImages,
  drawPlane,
  drawKakashiHealth,
  drawPlayerHealth,
  drawScore,
  drawHeaderOfKeys,
  drawHeaderOfOptions,
  drawOptions,
  drawKeyMarkers,
  drawBullets,
  drawKakashi
}
export{ bullet_elipse }