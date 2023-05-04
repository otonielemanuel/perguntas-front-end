import * as styles from './styles'
import { FiGithub } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <styles.Nav>
        <styles.List>
            <styles.itemList><Link to="/" title='' className='active'>Home</Link></styles.itemList>
            <styles.itemList><span>:</span></styles.itemList>
            <styles.itemList><Link to="/junior" title='júnior developer'>Júnior</Link></styles.itemList>
            <styles.itemList><Link to="/pleno" title='pleno developer'>Pleno</Link></styles.itemList>
            <styles.itemList><Link to="/senior" title='senior developer'>Senior</Link></styles.itemList>
            <styles.itemList><Link to='https://github.com/otonielemanuel' title='my github' className='icon-git' target='_blank' rel='noopener'><FiGithub /></Link> </styles.itemList>
            <styles.itemList><Link to="https://www.linkedin.com/in/otoniel-emanuel-b80727261/" title='my instagram' className='icon-insta' target='_blank' rel='noopener'><AiOutlineInstagram /></Link></styles.itemList>
            <styles.itemList><Link to="https://www.instagram.com/eusouootis_/" title='my linkedin' className='icon-link' target='_blank' rel='noopener'><CiLinkedin /></Link></styles.itemList>
        </styles.List>
    </styles.Nav>
  )
}
