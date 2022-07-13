import Jobs from './Jobs/Jobs'
import Display from './Display/Display.js'
import Default from '../Default/Default'

const Production = () => {
    const fakeTasks = [{task: "CNC-01A-00", subjob: 'CNC-01A-01', part: 'Machined Component - A', parts_produced: 4}, {task: 'CNC-01B-00', subjob: 'CNC-01B-01', part: 'Machined Component - B', parts_produced: 4}, {task: 'CNC-01C-00', subjob: 'CNC-01C-01', part: 'Machined Component - C', parts_produced: 4}, {task: "CNC-01A-00", subjob: 'CNC-01A-01', part: 'Machined Component - A', parts_produced: 4}, {task: "CNC-01A-00", subjob: 'CNC-01A-01', part: 'Machined Component - A', parts_produced: 4}]
    const workCenter = {work_center: "CNC & Machining"}
    const workCenterId = {wc_id: 304}
    
    const children = <>
        <Display workCenter={workCenter} workCenterId={workCenterId}/>
        <Jobs fakeTasks={fakeTasks}/>
    </>
    
    return (
        <Default children={children} />
    )
}

export default Production;