import * as styles from './styles'
import Nav from './Nav'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

export default function index() {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    from: {
      opacity: 0,
      transform: 'translateY(10px)',
    },
    config: {
      duration: 500,
    },
    reset: true,
    reverse: flip,
    delay: 500,
    onRest: () => setFlip(flip),
  })
  return (
    <styles.Header>
        <Link to="/">
          <styles.Image src={Logo} alt="Logotipo 120 perguntas" />
        </Link>
        <animated.div style={props}>
          <Nav />
        </animated.div>
    </styles.Header>
  )
}
