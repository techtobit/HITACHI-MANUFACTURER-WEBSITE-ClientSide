import React from 'react'

const InputField = ({type, style}) => {
    return <input type={type}   class="input rounded-none input-bordered w-96 max-w-xs " className={style} />
}

export default InputField