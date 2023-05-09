import * as styles from './styles'
import inConstructio from '../../assets/inconstruction.svg'

export default function index() {
  return (
    <styles.Main>
      <h1>Junior</h1>
      <styles.ContainerCenter>
          <styles.Contruindo src={inConstructio} alt=""/>
      </styles.ContainerCenter>
    </styles.Main>
  )
}
