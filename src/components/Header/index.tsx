import * as styles from './styles'
import Nav from './Nav'
import Logo from '../../assets/logo.svg'

export default function index() {
  return (
    <styles.Header>
        <a href="">
          <styles.Image src={Logo} alt="Logotipo 120 perguntas" />
        </a>
        <Nav />
    </styles.Header>
  )
}
