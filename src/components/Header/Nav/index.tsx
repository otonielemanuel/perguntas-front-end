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
            <styles.itemList><a href='https://github.com/otonielemanuel' title='my github' className='icon-git' target='_blank' rel='noopener'><FiGithub /></a> </styles.itemList>
            <styles.itemList><a href="https://www.linkedin.com/in/otoniel-emanuel-b80727261/" title='my instagram' className='icon-insta' target='_blank' rel='noopener'><AiOutlineInstagram /></a></styles.itemList>
            <styles.itemList><a href="https://www.instagram.com/eusouootis_/" title='my linkedin' className='icon-link' target='_blank' rel='noopener'><CiLinkedin /></a></styles.itemList>
        </styles.List>
    </styles.Nav>
  )
}
