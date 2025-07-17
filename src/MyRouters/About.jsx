import React from 'react'
import { Link, useParams } from 'react-router-dom'

const About = () => {
  return (
    <>
        <ul>
                <li><Link to="/employe/araf">Araf</Link></li>
                <li><Link to="/employe/lento">Lento</Link></li>
        </ul>
    </>
  )
}

export default About