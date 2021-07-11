import { plane, kakashi, battleFieldWidth, score_nums_dy } from './global.js'
import { getRandomInt, setNumsDY } from './functions_logics.js'
import { req_wideshot, req_rapidfire, req_bullet, req_heal } from './config.js'

class Plane {
  constructor(x, y, health) {
    this.posx = x
    this.posy = y
    this.health = health
    this.maxhp = health
    this.score = 9999999999
    this.prevScore = this.score
    this.stats = {
      wideshotLv: 1,
      rapidFireLv: 1,
      bulletLv: 1,
      healLv: 1,
    }
    console.log(`x : ${this.posx}`)
    console.log(`y : ${this.posy}`)
  }

  damege(mount) {
    this.health -= mount
  }

  heal() {
    if (this.score > req_heal[this.stats.healLv]) {
      this.score -= req_heal[this.stats.healLv]
      this.health += 15 * this.stats.healLv
      this.stats.healLv += 1
    } else {
      console.log('need more score!')
      console.log(`get more than ${req_heal[this.stats.healLv]} points!`)
    }
  }

  upgradeWideShot() {
    if (this.score > req_wideshot[this.stats.wideshotLv]) {
      this.score -= req_wideshot[this.stats.wideshotLv]
      this.stats.wideshotLv += 1
    } else {
      console.log('need more score!')
      console.log(
        `get more than ${req_wideshot[this.stats.wideshotLv]} points!`
      )
    }
  }

  upgradeRapidFire() {
    if (this.score > req_rapidfire[this.stats.rapidFireLv]) {
      this.score -= req_rapidfire[this.stats.rapidFireLv]
      this.stats.rapidFireLv += 1
    } else {
      console.log('need more score!')
      console.log(
        `get more than ${req_rapidfire[this.stats.rapidFireLv]} points!`
      )
    }
  }

  upgradeBullet() {
    if (this.score > req_bullet[this.stats.bulletLv]) {
      this.score -= req_bullet[this.stats.bulletLv]
      this.stats.bulletLv += 1
    } else {
      console.log('need more score!')
      console.log(`get more than ${req_bullet[this.stats.bulletLv]} points!`)
    }
  }

  addScore( mount ){
    this.prevScore = this.score
    this.score += mount
    setNumsDY(score_nums_dy, plane.prevScore, plane.score)
  }
}

class Bullet {
  constructor() {
    this.x = 0
    this.y = 0
    this.speed = 0
    this.alive = false
  }

  set(x, y, speed) {
    this.x = x
    this.y = y
    this.speed = speed
    this.alive = true
  }

  move() {
    this.y -= this.speed
    if (this.y < 0 || this.x < 0 || battleFieldWidth < this.x) {
      this.alive = false
    } else if (
      this.y < 134 &&
      kakashi.posx < this.x &&
      this.x < kakashi.posx + 50
    ) {
      plane.addScore(91)
      this.alive = false
      kakashi.health -= 1
      kakashi.posx = getRandomInt(0, 440)
    }
  }
}

export { Plane, Bullet }
