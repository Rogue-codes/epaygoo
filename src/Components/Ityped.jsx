import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'

function Ityped() {
    const textRef = useRef()
    useEffect(() => {
      init(textRef.current, { 
        showCursor: true, 
        typeSpeed:  30,
        backSpeed:  30,
        startDelay: 1500,
        backDelay:  3000,
        strings: ['Trusted by 60,000+ Transport Agencies', `With Over 200,000+ Users`, `Making Transportation seamless`, `Just Swipe It`, ] })
    },[])
  return (
    <div>
        <span ref={textRef}></span>
    </div>
  )
}

export default Ityped