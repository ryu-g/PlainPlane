import { battleFieldHeight, plane } from './global'

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
  move(x) {
    // カカシ本体
    this.x = x
  }
}

class KakashiBullet {
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
    //かかしの玉
    this.y += this.speed
    if (this.y > battleFieldHeight) {
      this.alive = false
    } else if (
      this.y > 440 &&
      plane.posx - 25 < this.x &&
      this.x < plane.posx + 25
    ) {
      console.log('hit to plane')
      this.alive = false
      plane.health -= 1
      console.log(plane.health)
    }
  }
}

export { Kakashi, KakashiBullet }
