import React from 'react'
import './Display.css'

const Display = ({ workCenter }) => {

    return (
        <>
            <h3 className='workcenter'>{workCenter.work_center}</h3>
        </>
    )
}

export default Display