import Default from '../Default/Default'
import SupervisorTable from './Table/Table'
import { fetchProjectsData, fetchAssignmentsData } from '../../api'
import { useEffect, useState } from 'react'

const Supervisor = () => {
    const [projects, setProjects] = useState([])
    const [displayTable, setDisplayTable] = useState(true)
    const displaySupervisorTable = displayTable ? <SupervisorTable projects={projects} fetchAssignmentsData={fetchAssignmentsData} setDisplayTable={setDisplayTable} displayTable={displayTable} /> : null

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchProjectsData()
            setProjects(data)
        }
        fetchData()
    }, [])
    
    const children = <>
        {displaySupervisorTable}
    </>

    return (
        <Default children={children} />
    )
}

export default Supervisor;