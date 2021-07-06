import { kakashi, plane } from './global.js'
import { req_wideshot, req_rapidfire, req_bullet, req_heal } from './config.js'
import header_upgrade_key_path from './assets/header_upgrade_keys@2x.png'
import header_options_path from './assets/header_options@2x.png'
import label_score from './assets/label_score@2x.png'
import num_0_active from './assets/num_0_active@2x.png'
import num_0_nonactive from './assets/num_0@2x.png'
import num_1 from './assets/num_1@2x.png'
import num_2 from './assets/num_2@2x.png'
import num_3 from './assets/num_3@2x.png'
import num_4 from './assets/num_4@2x.png'
import num_5 from './assets/num_5@2x.png'
import num_6 from './assets/num_6@2x.png'
import num_7 from './assets/num_7@2x.png'
import num_8 from './assets/num_8@2x.png'
import num_9 from './assets/num_9@2x.png'
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
import bullet_4 from './assets/bullet_4.png'
import kakashi_path from './assets/kakashi@2x.png'

const image_sources = {
  header_upgrade_key: header_upgrade_key_path,
  header_options: header_options_path,
  marker_q: button_q,
  marker_w: button_w,
  marker_e: button_e,
  marker_r: button_r,
  marker_q_nonActive: button_q_n,
  marker_w_nonActive: button_w_n,
  marker_e_nonActive: button_e_n,
  marker_r_nonActive: button_r_n,
  label_score: label_score,
  num_0_active: num_0_active,
  num_0_nonactive: num_0_nonactive,
  num_1: num_1,
  num_2: num_2,
  num_3: num_3,
  num_4: num_4,
  num_5: num_5,
  num_6: num_6,
  num_7: num_7,
  num_8: num_8,
  num_9: num_9,
  defaultshot: option_defaultshot,
  defaultbullet: option_defaultbullet,
  arrow_active: arrow_active_path,
  arrow_nonactive: arrow_nonactive_path,
  twinbarrel: option_twinbarrel,
  tripletbarrel: option_tripletbarrel,
  rapidfire: option_rapidfire,
  heal: option_heal,
  upgradebulled_a: option_powerup1,
  upgradebulled_b: option_powerup2,
  upgradebulled_c: option_powerup3,

  twinbarrel_hide: option_twinbarrel_nonActive,
  tripletbarrel_hide: option_tripletbarrel_nonActive,
  rapidfire_hide: option_rapidfire_nonActive,
  heal_hide: option_heal_nonActive,
  upgradebulled_a_hide: option_powerup1_nonActive,
  upgradebulled_b_hide: option_powerup2_nonActive,
  upgradebulled_c_hide: option_powerup3_nonActive,

  healthLabel: health_label,
  healthgauge_alive: health_dot_alive,
  healthgauge_dead: health_dot_dead,
  plane_img: parts_plane,
  bullet_elipse: bullet_1,
  bullet_triangle: bullet_2,
  bullet_rect: bullet_3,
  bullet_star: bullet_4,
  kakashi_img: kakashi_path,
}
const images = {}

// 全画像のロードを待つpromise
function loadImages() {
  for (const [key, value] of Object.entries(image_sources)) {
    images[key] = new Image()
    images[key].src = value
  }
  const promise = Promise.all(
    Object.values(images).map((img) => {
      return new Promise((resolve, reject) => {
        img.onload = () => resolve(img)
        img.onerror = (e) => reject(e)
      })
    })
  )
  return promise
}

function drawPlane(plane_posx, plane_posy, view) {
  const size = images.plane_img.width / 10
  // view.drawImage( plane, x - size/2, plane_posy - size/2, size, size)
  view.drawImage(
    images.plane_img,
    plane_posx - size / 2,
    plane_posy - size / 2,
    size,
    size
  )
}

function drawKakashi(kakashi_x, kakashi_y, view) {
  view.drawImage(images.kakashi_img, kakashi_x, kakashi_y)
}

function drawHeaderOfKeys(header_x, header_y, view) {
  const w = images.header_upgrade_key.width / 2
  const h = images.header_upgrade_key.height / 2
  view.drawImage(images.header_upgrade_key, header_x, header_y, w, h)
}

function drawHeaderOfOptions(header_x, header_y, view) {
  const w = images.header_options.width / 2
  const h = images.header_options.height / 2
  view.drawImage(images.header_options, header_x, header_y, w, h)
}

function drawKeyMarkers(marker_x, marker_y, view) {
  const w = images.marker_q.width / 2
  const h = images.marker_q.height / 2
  const gap = 10
  let _q = images.marker_q_nonActive
  let _w = images.marker_w_nonActive
  let _e = images.marker_e_nonActive
  let _r = images.marker_r_nonActive
  if (plane.score >= req_wideshot[plane.stats.wideshotLv]) _q = images.marker_q
  if (plane.score >= req_rapidfire[plane.stats.rapidFireLv])
    _w = images.marker_w
  if (plane.score >= req_bullet[plane.stats.bulletLv]) _e = images.marker_e
  if (plane.score >= req_heal[plane.stats.healLv]) _r = images.marker_r
  view.drawImage(_q, marker_x + (w + gap) * 0, marker_y, w, h)
  view.drawImage(_w, marker_x + (w + gap) * 1, marker_y, w, h)
  view.drawImage(_e, marker_x + (w + gap) * 2, marker_y, w, h)
  view.drawImage(_r, marker_x + (w + gap) * 3, marker_y, w, h)
}

function drawKakashiHealth(Health_posx, Health_posy, view) {
  const health = kakashi.health
  const gauge_dot_w = images.healthgauge_alive.width / 2
  const gauge_dot_h = images.healthgauge_alive.height / 2
  const gauge_dot_gap = 0.5
  const label_w = images.healthLabel.width / 2
  const label_h = images.healthLabel.height / 2
  view.drawImage(images.healthLabel, Health_posx, Health_posy, label_w, label_h)
  let item
  for (let i = 0; i < kakashi.maxhp; i++) {
    if (i < health) {
      item = images.healthgauge_alive
    } else {
      item = images.healthgauge_dead
    }
    view.drawImage(
      item,
      Health_posx + label_w + gauge_dot_gap + (gauge_dot_w + gauge_dot_gap) * i,
      Health_posy,
      gauge_dot_w,
      gauge_dot_h
    )
  }
}

function drawPlayerHealth(Health_posx, Health_posy, view) {
  const health = plane.health
  const gauge_dot_w = images.healthgauge_alive.width / 2
  const gauge_dot_h = images.healthgauge_alive.height / 2
  const gauge_dot_gap = 0.5
  const label_w = images.healthLabel.width / 2
  const label_h = images.healthLabel.height / 2
  let item
  view.drawImage(images.healthLabel, Health_posx, Health_posy, label_w, label_h)
  for (let i = 0; i < plane.maxhp; i++) {
    if (i <= health) {
      item = images.healthgauge_alive
    } else {
      item = images.healthgauge_dead
    }
    view.drawImage(
      item,
      Health_posx + label_w + gauge_dot_gap + (gauge_dot_w + gauge_dot_gap) * i,
      Health_posy,
      gauge_dot_w,
      gauge_dot_h
    )
  }
}

function drawScore(score, score_posx, score_posy, view) {
  const s = score
  const numw = images.num_0_active.width / 2
  const numh = images.num_0_active.height / 2
  const label_w = images.label_score.width / 2
  const label_h = images.label_score.height / 2

  const nums = s.split('')
  let posx_gap = 55
  view.drawImage(images.label_score, score_posx, score_posy, label_w, label_h)
  for (let num of nums) {
    let targetImage = ''
    posx_gap += 14
    switch (num) {
      case '_':
        targetImage = images.num_0_nonactive
        break
      case '0':
        targetImage = images.num_0_active
        break
      case '1':
        targetImage = images.num_1
        break
      case '2':
        targetImage = images.num_2
        break
      case '3':
        targetImage = images.num_3
        break
      case '4':
        targetImage = images.num_4
        break
      case '5':
        targetImage = images.num_5
        break
      case '6':
        targetImage = images.num_6
        break
      case '7':
        targetImage = images.num_7
        break
      case '8':
        targetImage = images.num_8
        break
      case '9':
        targetImage = images.num_9
        break
    }
    view.drawImage(targetImage, score_posx + posx_gap, score_posy, numw, numh)
  }
}

function drawOptions_multishoot(Options_posx, Options_posy, view) {
  const gap_y = 30
  const optionSize = images.twinbarrel.width / 2
  let _twinbarrel, _tripletbarrel
  if (plane.stats.wideshotLv >= 2) {
    _twinbarrel = images.twinbarrel
  } else {
    _twinbarrel = images.twinbarrel_hide
  }
  if (plane.stats.wideshotLv >= 3) {
    _tripletbarrel = images.tripletbarrel
  } else {
    _tripletbarrel = images.tripletbarrel_hide
  }
  view.drawImage(
    images.defaultshot,
    Options_posx,
    Options_posy + (optionSize + gap_y) * 0,
    optionSize,
    optionSize
  )
  view.drawImage(
    _twinbarrel,
    Options_posx,
    Options_posy + (optionSize + gap_y) * 1,
    optionSize,
    optionSize
  )
  view.drawImage(
    _tripletbarrel,
    Options_posx,
    Options_posy + (optionSize + gap_y) * 2,
    optionSize,
    optionSize
  )

  let arrow1 = false
  let arrow2 = false
  if (
    (plane.score >= req_wideshot[1] && plane.stats.wideshotLv == 1) ||
    plane.stats.wideshotLv >= 2
  ) {
    arrow1 = true
  }
  if (
    (plane.score >= req_wideshot[2] && plane.stats.wideshotLv == 2) ||
    plane.stats.wideshotLv >= 3
  ) {
    arrow2 = true
  }
  drawArrows(
    Options_posx + optionSize / 3,
    Options_posy + (optionSize + gap_y / 3) * 1,
    arrow1,
    view
  )
  drawArrows(
    Options_posx + optionSize / 3,
    Options_posy + (optionSize + (gap_y * 2) / 3) * 2,
    arrow2,
    view
  )
}

function drawOptions_rapidFire(Options_posx, Options_posy, view) {
  const gap_y = 30
  const optionSize = images.twinbarrel.width / 2
  let _rapidfire
  if (plane.stats.rapidFireLv >= 2) {
    _rapidfire = images.rapidfire
  } else {
    _rapidfire = images.rapidfire_hide
  }
  view.drawImage(
    images.defaultshot,
    Options_posx,
    Options_posy + (optionSize + gap_y) * 0,
    optionSize,
    optionSize
  )
  view.drawImage(
    _rapidfire,
    Options_posx,
    Options_posy + (optionSize + gap_y) * 1,
    optionSize,
    optionSize
  )

  let arrow1 = false
  if (
    (plane.score >= req_rapidfire[1] && plane.stats.rapidFireLv == 1) ||
    plane.stats.rapidFireLv >= 2
  ) {
    arrow1 = true
  }
  drawArrows(
    Options_posx + optionSize / 3,
    Options_posy + (optionSize + gap_y / 3) * 1,
    arrow1,
    view
  )
}

function drawOptions_bullets(Options_posx, Options_posy, view) {
  const gap_y = 30
  const optionSize = images.twinbarrel.width / 2
  const arrowpos_x = Options_posx + optionSize / 3
  let _upgradebulled_a, _upgradebulled_b, _upgradebulled_c
  if (plane.stats.bulletLv >= 2) {
    _upgradebulled_a = images.upgradebulled_a
  } else {
    _upgradebulled_a = images.upgradebulled_a_hide
  }
  if (plane.stats.bulletLv >= 3) {
    _upgradebulled_b = images.upgradebulled_b
  } else {
    _upgradebulled_b = images.upgradebulled_b_hide
  }
  if (plane.stats.bulletLv >= 4) {
    _upgradebulled_c = images.upgradebulled_c
  } else {
    _upgradebulled_c = images.upgradebulled_c_hide
  }
  view.drawImage(
    images.defaultbullet,
    Options_posx,
    Options_posy + (optionSize + gap_y) * 0,
    optionSize,
    optionSize
  )
  view.drawImage(
    _upgradebulled_a,
    Options_posx,
    Options_posy + (optionSize + gap_y) * 1,
    optionSize,
    optionSize
  )
  view.drawImage(
    _upgradebulled_b,
    Options_posx,
    Options_posy + (optionSize + gap_y) * 2,
    optionSize,
    optionSize
  )
  view.drawImage(
    _upgradebulled_c,
    Options_posx,
    Options_posy + (optionSize + gap_y) * 3,
    optionSize,
    optionSize
  )

  let arrow1 = false
  let arrow2 = false
  let arrow3 = false
  if (
    (plane.score >= req_bullet[1] && plane.stats.bulletLv == 1) ||
    plane.stats.bulletLv >= 2
  ) {
    arrow1 = true
  }
  if (
    (plane.score >= req_bullet[2] && plane.stats.bulletLv == 2) ||
    plane.stats.bulletLv >= 3
  ) {
    arrow2 = true
  }
  if (
    (plane.score >= req_bullet[3] && plane.stats.bulletLv == 3) ||
    plane.stats.bulletLv >= 4
  ) {
    arrow3 = true
  }
  drawArrows(
    arrowpos_x,
    Options_posy + (optionSize + gap_y / 3) * 1,
    arrow1,
    view
  )
  drawArrows(
    arrowpos_x,
    Options_posy + (optionSize + (gap_y * 2) / 3) * 2,
    arrow2,
    view
  )
  drawArrows(
    arrowpos_x,
    Options_posy + (optionSize + (gap_y * 7) / 9) * 3,
    arrow3,
    view
  )
}

function drawOptions_heals(Options_posx, Options_posy, view) {
  const gap_y = 30
  const optionSize = images.twinbarrel.width / 2
  const arrowpos_x = Options_posx + optionSize / 3
  let _heal_a, _heal_b, _heal_c
  if (plane.stats.healLv >= 2) {
    _heal_a = images.heal
  } else {
    _heal_a = images.heal_hide
  }
  if (plane.stats.healLv >= 3) {
    _heal_b = images.heal
  } else {
    _heal_b = images.heal_hide
  }
  if (plane.stats.healLv >= 4) {
    _heal_c = images.heal
  } else {
    _heal_c = images.heal_hide
  }
  view.drawImage(
    _heal_a,
    Options_posx,
    Options_posy + (optionSize + gap_y) * 1,
    optionSize,
    optionSize
  )
  view.drawImage(
    _heal_b,
    Options_posx,
    Options_posy + (optionSize + gap_y) * 2,
    optionSize,
    optionSize
  )
  view.drawImage(
    _heal_c,
    Options_posx,
    Options_posy + (optionSize + gap_y) * 3,
    optionSize,
    optionSize
  )

  let arrow1 = false
  let arrow2 = false
  let arrow3 = false
  if (
    (plane.score >= req_heal[1] && plane.stats.healLv == 1) ||
    plane.stats.healLv >= 2
  ) {
    arrow1 = true
  }
  if (
    (plane.score >= req_heal[2] && plane.stats.healLv == 2) ||
    plane.stats.healLv >= 3
  ) {
    arrow2 = true
  }
  if (
    (plane.score >= req_heal[3] && plane.stats.healLv == 3) ||
    plane.stats.healLv >= 4
  ) {
    arrow3 = true
  }
  drawArrows(
    arrowpos_x,
    Options_posy + (optionSize + gap_y / 3) * 1,
    arrow1,
    view
  )
  drawArrows(
    arrowpos_x,
    Options_posy + (optionSize + (gap_y * 2) / 3) * 2,
    arrow2,
    view
  )
  drawArrows(
    arrowpos_x,
    Options_posy + (optionSize + (gap_y * 7) / 9) * 3,
    arrow3,
    view
  )
}

function drawArrows(x, y, isActive, view) {
  if (isActive) {
    view.drawImage(images.arrow_active, x, y)
  } else {
    view.drawImage(images.arrow_nonactive, x, y)
  }
}

function drawBullets(view, bullets) {
  let kindOfBullet = images.bullet_elipse

  if (plane.stats.bulletLv == 2) {
    kindOfBullet = images.bullet_triangle
  }
  if (plane.stats.bulletLv == 3) {
    kindOfBullet = images.bullet_rect
  }
  if (plane.stats.bulletLv == 4) {
    kindOfBullet = images.bullet_star
  }
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].alive) {
      view.drawImage(kindOfBullet, bullets[i].x, bullets[i].y)
    }
  }
}

export {
  loadImages,
  drawPlane,
  drawKakashiHealth,
  drawPlayerHealth,
  drawScore,
  drawHeaderOfKeys,
  drawHeaderOfOptions,
  drawOptions_multishoot,
  drawOptions_rapidFire,
  drawOptions_bullets,
  drawOptions_heals,
  drawKeyMarkers,
  drawBullets,
  drawKakashi,
  images,
}
