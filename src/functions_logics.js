function moveAllBullets(bullets) {
  for (let i = 0; i < bullets.length; i++) {
    if (bullets[i].alive) {
      bullets[i].move()
    }
  }
}

function kakashi_moveAllBullets(kakashi_bullets) {
  for (let i = 0; i < kakashi_bullets.length; i++) {
    if (kakashi_bullets[i].alive) {
      kakashi_bullets[i].move()
    }
  }
}

function getRandomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min))
}

function zeroPadding(score) {
  let result = ('______________' + score).slice(-14)
  return result
}

function setNumsDY(array, pscore, score){
  let pscorenums = zeroPadding(pscore.toString())
  let scorenums = zeroPadding(score.toString())
  for(let i = 0 ; i < scorenums.length; i++){
    if(scorenums[i] != pscorenums[i])
      while(i < scorenums.length){
        array[i] = 16
        i++
      }
  }
}

function updateScoreDY(array){
  for(let i = 0; i < array.length ; i++ ){
    if( array[i] > 0 ){
      array[i] = array[i] - 2
    }
  }
}

export {
  getRandomInt,
  moveAllBullets,
  kakashi_moveAllBullets,
  zeroPadding,
  updateScoreDY,
  setNumsDY
}
