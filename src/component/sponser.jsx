import React from 'react'
import data from "./something"


const Sponser = () => {
  return (
    <div>
      
        <h2 className='font-bold'>Sponsored</h2>
     <div>
      <ul >
        {data.map((items,index)=>
        <li key={index} className={`flex mb-3 p-2 gap-2`}>
          <img src={items.photo} className={`w-28 h-28`} alt='items.title'/>
          <div>
            <h3>{items.title}</h3>
            <p className='font-bold'>{items.compay}</p>
          </div>
        </li>
        )}
      </ul>
     </div>

    </div>
  )
}

export default Sponser
