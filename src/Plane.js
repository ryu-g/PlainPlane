import { plane, kakashi } from './global.js'
import { getRandomInt } from './functions_logics.js'
class Plane {
  constructor(x, y, health) {
    this.posx = x
    this.posy = y
    this.health = health
    this.maxhp = health
    this.score = 0
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
  const mount = 15 * this.stats.healLv
  this.health += mount
}

Plane.prototype.upgradeWideShot = function(){
  this.stats.wideshotLv+= 1
}

Plane.prototype.upgradeRapidFire = function(){
  this.stats.rapidFireLv+= 1
}

Plane.prototype.upgradeBullet = function(){
  this.stats.bulletLv+= 1
}

Plane.prototype.upgradeHeal = function(){
  this.stats.healLv+= 1
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
