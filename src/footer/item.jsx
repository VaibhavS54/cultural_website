import React from 'react'

const Item = ({Links, title}) => {
  return (
    <>
    
    <ul>
        <h1 className="mb-1 font-semibold text-[#5498FE] font-lato">{title}</h1>
        {
            Links.map((Link)=>(
                <li key={Link.name} className="text-[#ADADAD] font-lato hover:text-[#5498FE] duration-300 text-sm cursor-pointer leading-6">
                    <a href={Link.link}>{Link.name}</a>

                </li>
            ))
        }
    </ul>
    </>
  )
}

export default Item
