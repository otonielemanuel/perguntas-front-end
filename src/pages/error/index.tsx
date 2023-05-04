import * as styles from './styles'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

export default function index() {
  return (
    <styles.Container>
      <h1>Erro 404!</h1>
      <h3>Lamento Dev, a Página não foi encontrada.</h3>
      <p><Link to="/"><BsArrowLeft size={10}/> Voltar pra casa</Link></p>
    </styles.Container>
  )
}
