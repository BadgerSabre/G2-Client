import DataTable from 'react-data-table-component'
import { useMemo } from 'react'

const SupervisorTable = ({ projects, displayTable, setDisplayTable, fetchAssignmentsData }) => {

    const columns = useMemo(() => [
        {
            name: 'Project',
            selector: row => row.name
        },
        {
            name: 'Ship Date',
            selector: row => row.ship_date
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        {
            name: 'Estimated Hours',
            selector: row => row.estimated_time
        },
        {
            name: 'Assign Work',
            selector: (row,i) => <button key={i} onClick={() => {
                fetchAssignmentsData(row.id)
                setDisplayTable(!displayTable)
            }} className="btn btn-primary">Assign Work</button>
        }
    ], [])

    return (
		<>
		    <DataTable
				title="Supervisor Projects"
				data={projects}
				columns={columns}
				pagination
        	/>
		</>
    )
}

export default SupervisorTable