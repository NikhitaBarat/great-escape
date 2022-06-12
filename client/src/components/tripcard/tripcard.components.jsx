import React from 'react'
import './tripcard.styles.css'

const Tripcard = ({data}) => {
  return (
    <div className='trip-card'>
        <img className='trip-thumb' src={data.imgurl} alt="" />
        <h1>{data.title}</h1>
    </div>
  )
}

export default Tripcard