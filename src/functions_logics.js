import { drawBullets } from './functions_img'

function shootBullets(bullets, view){
  for(let i = 0; i < bullets.length; i++){
    if(bullets[i].alive){
      bullets[i].move()
      drawBullets(bullets[i].x, bullets[i].y, view)
    }
  }
}

function kakashiShootBullets(kakashi_bullets, view){
  for(let i = 0; i < kakashi_bullets.length; i++){
    if(kakashi_bullets[i].alive){
      kakashi_bullets[i].move()
      drawBullets(kakashi_bullets[i].x, kakashi_bullets[i].y, view)
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * ( max - min ) ) 
}

export {shootBullets,  getRandomInt, kakashiShootBullets}