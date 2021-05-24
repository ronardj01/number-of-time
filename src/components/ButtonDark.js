import React from 'react'


function ButtonDark({whenClick, label}) {
    return(
        <button className='btn btn-dark' onClick={whenClick}>{label}</button>
    )
}

export default ButtonDark
