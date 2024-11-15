import React, { forwardRef, useId } from 'react'

const CustomInput = forwardRef(function CustomInput({
    label,
    type="text",
    className="outline-none rounded-lg w-60 h-8 bg-[#2322228b] text-white",
    ...props
},ref){
    const id = useId()
    return(
        <div className='flex flex-col mt-4'>
            {label&&<label className="text-white" htmlFor={id}>{label}</label>}
            <input  ref={ref} id={id} type={type} {...props} className={`${className}`}/>
        </div>
    )
})
export default CustomInput
