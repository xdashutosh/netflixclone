import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({img}) {
  return (
    <Link to='/Movie'>
       <img src={img} alt="cardimage" className='card'/>
    </Link>
  )
}
