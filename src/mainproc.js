import {
  bullets_a,bullets_b,bullets_c,
  kakashi_bullets
} from './global.js'
import { 
  moveAllBullets,
  kakashi_moveAllBullets
} from './functions_logics'

const proc = () => {
  // console.log('this is mainProcess')
  moveAllBullets(bullets_a)
  moveAllBullets(bullets_b)
  moveAllBullets(bullets_c)
  kakashi_moveAllBullets(kakashi_bullets)

}
export { proc }
