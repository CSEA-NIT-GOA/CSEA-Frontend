import React, { useEffect,useState } from 'react'
import { useTrail, a } from '@react-spring/web'

import styles from './styles.module.css'

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 200 : 0,
    from: { opacity: 0, x: 0, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

// class MyComponent extends React.Component {
//   handleScroll = e => {
//     let element = e.target
//     if (element.scrollHeight - element.scrollTop === element.clientHeight) {
//       this.state = !this.state
//     }
//   }
// }


export default function Animation() {
  // const [open, set] = useState(true)
  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // console.log(offset); 
    const textStyle = 'max-sm:text-7xl';
  return (
    <div className={styles.container} >
      <div className='text-center'>
        <Trail open={offset>=300 && offset <=890}>
          <span className={textStyle}>Welcome</span>
          <span className={textStyle}>To</span>
          <span className={textStyle}>CSEA</span>
        </Trail>
      </div>
    </div>
  )
}