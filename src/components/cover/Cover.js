import React from 'react'
import './cover.css'
import coverVideo from '../../media/coverVideo.mp4'

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video'  src={coverVideo} autoPlay loop muted></video>
        <h1>Giselle Taboada</h1>
        <p>Full Stack Developer</p>
    </div>
  )
}

export default Cover