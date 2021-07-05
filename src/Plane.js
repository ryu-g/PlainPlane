import { plane, kakashi } from './global.js'
import { getRandomInt } from './functions_logics.js'
import {
  req_wideshot,
  req_rapidfire,
  req_bullet,
  req_heal
} from './config.js'

class Plane {
  constructor(x, y, health) {
    this.posx = x
    this.posy = y
    this.health = health
    this.maxhp = health
    this.score = 9999999999
    this.stats = {
      wideshotLv : 1,
      rapidFireLv : 1,
      bulletLv : 1,
      healLv : 1,
    }
    console.log(`x : ${this.posx}`)
    console.log(`y : ${this.posy}`)
  }
}

Plane.prototype.damage = function( mount ){
  this.health -= mount
}

Plane.prototype.heal = function(){
  if(this.score > req_heal[this.stats.healLv]){
    this.score -= req_heal[this.stats.healLv]
    this.health += 15 * this.stats.healLv
    this.stats.healLv += 1
  }else{
    console.log('need more score!')
    console.log(`get more than ${req_heal[this.stats.healLv]} points!`)
  }
}

Plane.prototype.upgradeWideShot = function(){
  if(this.score > req_wideshot[this.stats.wideshotLv]){
    this.score -= req_wideshot[this.stats.wideshotLv]
    this.stats.wideshotLv+= 1
  }else{
    console.log('need more score!')
    console.log(`get more than ${req_wideshot[this.stats.wideshotLv]} points!`)
  }
}

Plane.prototype.upgradeRapidFire = function(){
  if(this.score > req_rapidfire[this.stats.rapidFireLv]){
    this.score -= req_rapidfire[this.stats.rapidFireLv]
    this.stats.rapidFireLv+= 1
  }else{
    console.log('need more score!')
    console.log(`get more than ${req_rapidfire[this.stats.rapidFireLv]} points!`)
  }
}

Plane.prototype.upgradeBullet = function(){
  if(this.score > req_bullet[this.stats.bulletLv]){
    this.score -= req_bullet[this.stats.bulletLv]
    this.stats.bulletLv+= 1
  }else{
    console.log('need more score!')
    console.log(`get more than ${req_bullet[this.stats.bulletLv]} points!`)
  }
}

function Bullet(){
  this.x = 0
  this.y = 0
  this.speed = 0
  this.alive = false
}

Bullet.prototype.set = function (x, y, speed){
  this.x = x
  this.y = y
  this.speed = speed
  this.alive = true
}

Bullet.prototype.move = function(){
  this.y -= this.speed
  if(this.y < 60){
    this.alive = false
  }
  else if(this.y < 134 && kakashi.posx < this.x && this.x < kakashi.posx+50) {
    plane.score += 91
    this.alive = false
    kakashi.health -= 1
    kakashi.posx = getRandomInt(542,945)
  }
}

export { Plane, Bullet }
