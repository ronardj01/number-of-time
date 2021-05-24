import { render } from '@testing-library/react'
import React from 'react'


function IncrementButton({whenClick}) {
    return(
        <button className='btn btn-dark' onClick={whenClick}>Increment</button>
    )
}

export default IncrementButton
