import React, { forwardRef, useId } from 'react'

const CustomInput = forwardRef(function CustomInput({
    label,
    type="text",
    className="",
    props
},ref){
    const id = useId()
    return(
        <div>
            {label&&<label htmlFor={id}>{label}</label>}
            <input ref={ref} id={id} type={type} {...props} className={`${className}`}/>
        </div>
    )
})
export default CustomInput
