import {loadImages, drawPlane, drawHealth, drawScore, drawOptions, drawKeyMarkers, drawBullets} from './interfaceView'

function shootBullets(bullets, view){
  for(let i = 0; i < bullets.length; i++){
    if(bullets[i].alive){
      bullets[i].move()
      drawBullets(bullets[i].x, bullets[i].y, view)
    }
  }
}

function makeAliveBullets(plane, fire, bullets){
  if(fire){
    for(let i = 0; i < bullets.length; i++){
      if(!bullets[i].alive){
        bullets[i].set(plane.posx, plane.posy, 4)
        fire = false
        break
      }
    }
    // console.table(bullets)
    console.log(`fire! ${fire}`)
  }
}

export {shootBullets, makeAliveBullets}