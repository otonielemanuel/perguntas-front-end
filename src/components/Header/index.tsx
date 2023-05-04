import * as styles from './styles'
import Nav from './Nav'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <styles.Header>
        <Link to="/">
          <styles.Image src={Logo} alt="Logotipo 120 perguntas" />
        </Link>
        <Nav />
    </styles.Header>
  )
}
