import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../Video/Video.scss"

const Video = () => {
  return (
    <div className='video'>
        <div className="play">
        <FontAwesomeIcon icon={faPlay} className='play-icon' style={{ width: '24px', height: '24px' }}/>
        </div>
    </div>
  )
}

export default Video