function moveAllBullets(bullets){
  for(let i = 0; i < bullets.length; i++){
    if(bullets[i].alive){ bullets[i].move() }
  }
}

function kakashi_moveAllBullets(kakashi_bullets){
  for(let i = 0; i < kakashi_bullets.length; i++){
    if(kakashi_bullets[i].alive){ kakashi_bullets[i].move() }
  }
}

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * ( max - min ) ) 
}

function zeroPadding(score){
  let result = ('00000000000000'+score).slice(-14)
  return result
}

export {getRandomInt, moveAllBullets , kakashi_moveAllBullets, zeroPadding}
