import Main from "../../components/mainHome"
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
    <animated.div style={props}>
      <Main />
    </animated.div>
  )
}
