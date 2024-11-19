import React from 'react'

function Button({className,children,disabled,...prop}) {
  return (
    <button {...prop}  className={`${className} px-8 py-3 `}disabled={disabled} >
      {children}
    </button>
  )
}

export default Button
