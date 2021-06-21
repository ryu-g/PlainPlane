class Plane {
  constructor(x, y) {
    this.posy = y
    this.health = 33
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
  }
}

export { Plane, Bullet }