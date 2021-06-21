class Kakashi {
  constructor(x, y) {
    this.posx = x
    this.posy = y
    this.health = 33
    this.score = 0
    console.log(`kakashi_x : ${this.posx}`)
    console.log(`kakashi_y : ${this.posy}`)
  }
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
  }
}

export { Kakashi, KakashiBullet }