import React from 'react'
import Icon from '../../Icons'

import './MediaIcons.scss'

export default function MediaIcons() {
  const iconList = ['fb','tw','pt','yt']

  return(
    <div className="media-icons">
      {iconList.map((icon,index) => (
        <button key={index}>
          <Icon
            item={icon}
            width="20px"
            height="20px"
            fill={'rgb(42, 131, 200)'}
          />
        </button>
      ))

      }
    </div>
  )
}
