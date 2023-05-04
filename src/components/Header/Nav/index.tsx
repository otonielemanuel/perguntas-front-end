import * as styles from './styles'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'

export default function index() {
  return (
    <styles.Nav>
        <styles.List>
            <styles.itemList><a href="#" title='' className='active'>Home</a></styles.itemList>
            <styles.itemList><span>:</span></styles.itemList>
            <styles.itemList><a href="#" title='júnior developer'>Júnior</a></styles.itemList>
            <styles.itemList><a href="#" title='pleno developer'>Pleno</a></styles.itemList>
            <styles.itemList><a href="#" title='senior developer'>Senior</a></styles.itemList>
            <styles.itemList><a href='#' title='my github' className='icon-git'><FiGithub /></a> </styles.itemList>
            <styles.itemList><a href="#" title='my instagram' className='icon-insta'><AiOutlineInstagram /></a></styles.itemList>
            <styles.itemList><a href="#" title='my linkedin' className='icon-link'><CiLinkedin /></a></styles.itemList>
        </styles.List>
    </styles.Nav>
  )
}
