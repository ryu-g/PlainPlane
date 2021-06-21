import {kakashi} from './global.js'
import {getRandomInt} from './functions_logics.js'
class Plane {
  constructor(x, y) {
    this.posy = y
    this.health = 90
    this.score = 0
    console.log(`x : ${this.posx}`)
    console.log(`y : ${this.posy}`)
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
  if(this.y < 90){
    this.alive = false
  }else if(this.y < 134 && (kakashi.posx < this.x || this.x < kakashi.pos+50)) {
    console.log("hit!")
    this.alive = false
    kakashi.health -= 1
    console.log(kakashi.health)
    kakashi.posx = getRandomInt(542,945)
  }
}

export { Plane, Bullet }