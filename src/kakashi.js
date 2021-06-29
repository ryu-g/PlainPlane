import { plane } from "./global"

class Kakashi {
  constructor(x, y, health) {
    this.posx = x
    this.posy = y
    this.health = health
    this.maxhp = health
    this.score = 0
    console.log(`kakashi_x : ${this.posx}`)
    console.log(`kakashi_y : ${this.posy}`)
  }
}

Kakashi.prototype.move = function (x){ // カカシ本体
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

KakashiBullet.prototype.move = function(){ //かかしの玉
  this.y += this.speed
  if(this.y > 530){
    this.alive = false
  }else if(this.y > 470 && plane.posx-25 < this.x && this.x < plane.posx+25){
    console.log("hit to plane")
    this.alive = false
    plane.health -= 1
    console.log(plane.health)
  }
}


export { Kakashi, KakashiBullet }
