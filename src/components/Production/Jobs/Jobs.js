import React from 'react'
import './Jobs.css'

const Jobs = ({ fakeTasks }) => {
    return (
        <div id='production-jobs'>
            {fakeTasks.map(task => (
                <div key={task.task} className='task d-flex align-items-center'>
                    <span><h4>Task: {task.task}</h4></span>
                    <span><h4>Subjob: {task.subjob}</h4></span>
                    <span><h4>Part Produced: {task.part}</h4></span>
                    <span><h4>Quantity Produced: {task.parts_produced}</h4></span>
                    <span><button type='button' className='btn btn-success'>Job Complete</button></span>
                </div>
            ))}
        </div>
    )
}

export default Jobs