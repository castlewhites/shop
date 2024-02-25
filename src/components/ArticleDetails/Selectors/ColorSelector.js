import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Selectors.scss'

export default function ColorSelector({variants}) {
  const [colorSelected, setColorSlected] = useState(null)

  return (
    <div className='selectors '>
      {variants.map((option, index) => (
        <button 
          type='button'
          className={colorSelected === index?'selected':''}
          key={index} 
          style={{backgroundColor:option.color}}
          onClick={()=> setColorSlected(index)}
        >
        </button>
      ))   
      }
    </div>
  )
}

ColorSelector.propTypes = {
  variants: PropTypes.array.isRequired,
}
