import React from 'react'
import Card from "./Card";
export default function Row({title,imgarr}) {
    
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div>
   {imgarr.map((imageobj,index)=>(
    <Card key={index}img={`https://image.tmdb.org/t/p/original${imageobj.poster_path}`}/>
   )

   )}   
        </div>

    </div>
  )
}
