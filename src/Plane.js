import { plane, kakashi } from './global.js'
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
    plane.score += 2
    this.alive = false
    kakashi.health -= 1
    console.log(kakashi.health)
    kakashi.posx = getRandomInt(kakashi.posx-100,kakashi.posx+100)
  }
}

export { Plane, Bullet }