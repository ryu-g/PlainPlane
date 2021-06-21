import {loadImages, drawPlane, drawHealth, drawScore, drawOptions, drawKeyMarkers, drawBullets} from './interfaceView'

function shootBullets(bullets, view){
  for(let i = 0; i < bullets.length; i++){
    if(bullets[i].alive){
      bullets[i].move()
      drawBullets(bullets[i].x, bullets[i].y, view)
    }
  }
}

export {shootBullets}