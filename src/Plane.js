import { kakashi } from './global.js'
import { getRandomInt } from './functions_logics.js'
class Plane {
  constructor(x, y, health) {
    this.posx = x
    this.posy = y
    this.health = health
    this.maxhp = health
    this.score = 0
    console.log(`x : ${this.posx}`)
    console.log(`y : ${this.posy}`)
  }
}
Plane.prototype.damage = function( mount ){
  this.health -= mount
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
    // console.log("hit!")
    this.alive = false
    kakashi.health -= 1
    console.log(kakashi.health)
    kakashi.posx = getRandomInt(542,945)
    // console.log(`kakashi pos : ${kakashi.posx}`)
  }
}

export { Plane, Bullet }