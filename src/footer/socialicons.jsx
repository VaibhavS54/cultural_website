import React from 'react'

const Socialicons = ({Icons}) => {
  return (
    <div className="text-white">
      {Icons.map(icon=>(
        <span key={icon.name} className="p-2 cursor-pointer">
            <ion-icon name={icon.name}></ion-icon>

        </span>
      ))}
    </div>
  )
}

export default Socialicons
