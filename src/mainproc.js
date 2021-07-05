import {
  bullets_a,bullets_b,bullets_c,
  bullets_d,bullets_e,bullets_f,
  kakashi_bullets
} from './global.js'
import { 
  moveAllBullets,
  kakashi_moveAllBullets
} from './functions_logics'

const proc = () => {
  moveAllBullets(bullets_a)
  moveAllBullets(bullets_b)
  moveAllBullets(bullets_c)
  moveAllBullets(bullets_d)
  moveAllBullets(bullets_e)
  moveAllBullets(bullets_f)
  kakashi_moveAllBullets(kakashi_bullets)

}
export { proc }
