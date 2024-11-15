import React from 'react'

function Button({prop,onclick,className,children}) {
  return (
    <button className={`${className} px-4 py-2 `}{...prop} onClick={()=>onclick()}>
      {children}
    </button>
  )
}

export default Button
