import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Selectors.scss'

export default function SizeSelector({sizeOptions}) {

  const [sizeSelected, setSizeSlected] = useState(null)

  return (
    <div className='selectors'>
      {sizeOptions.map((size,index)=> (
        <button 
          type='button'
          key={size}
          onClick={()=> setSizeSlected(index)}
          className={sizeSelected === index?'selected':''}
        >
          {size}
        </button>
      ))      
      }
    </div>
  )
}

SizeSelector.propTypes = {
  sizeOptions: PropTypes.array.isRequired,
}
