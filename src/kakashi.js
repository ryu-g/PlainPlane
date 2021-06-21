import { getRandomInt } from "./functions_logics"
import { kakashi } from './global.js'
class Kakashi {
  constructor(x, y) {
    this.posx = x
    this.posy = y
    this.health = 90
    this.score = 0
    console.log(`kakashi_x : ${this.posx}`)
    console.log(`kakashi_y : ${this.posy}`)
  }
}

Kakashi.prototype.move = function (x){
  this.x = x
}


function KakashiBullet(){
  this.x = 0
  this.y = 0
  this.speed = 0
  this.alive = false
}

KakashiBullet.prototype.set = function (x, y, speed){
  this.x = x
  this.y = y
  this.speed = speed
  this.alive = true
}

KakashiBullet.prototype.move = function(){
  this.y += this.speed
  if(this.y > 550){
    this.alive = false
    kakashi.posx = getRandomInt(542,945)
  }
}

export { Kakashi, KakashiBullet }