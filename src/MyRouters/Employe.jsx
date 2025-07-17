import React from 'react'
import { useParams } from 'react-router-dom'

const Employe = () => {
    const{name} = useParams();
  return (
    <>
        <h1>{name} is a Employee</h1>
    </>
  )
}

export default Employe