import { useEffect, useState } from 'react'
import CreateInputs from '../create/inputs'
import UpdateDropDowns from './dropdowns'
import { useDispatch } from 'react-redux'
import { fetchEmployeesByWC } from '../../../../api'

const UpdateOpportunity = () => {
    const dispatch = useDispatch()
    const [pms, setPMs] = useState([])
    const [formData, setFormData] = useState({ project_number: '', year: '', revenue: '', ship_date: '', status: 'Lead', project_manager: '',})
    const formInputs = [{label: "Year", value: "year"}, {label: "Revenue", value: "revenue"}, {label: "Ship Date", value: "ship_date"}]

    const handleUpdateOpp = (e) => {
        e.preventDefault()
        console.log(formData)
        // dispatch(createOpp(formData)).then( (data) => {
        //     console.log(data)
        // })
    }

    useEffect(() => {
        async function fetchFormData () {
            const projectManagers = await fetchEmployeesByWC(602)
            let tempPMs = projectManagers.map(pm => {
                return {value: pm._id, label: `${pm.first_name} ${pm.last_name}`}
            })
            setPMs(tempPMs)
        } 
        fetchFormData()
    },[])

    return (
        <div className="d-flex justify-content-center flex-wrap">
            <form onSubmit={handleUpdateOpp} style={{width: "30vw", backgroundColor: 'white', borderRadius: "0.3em", padding: "1em"}}>
                <CreateInputs setFormData={setFormData} formData={formData} formInputs={formInputs} />
                <UpdateDropDowns setFormData={setFormData} formData={formData} pms={pms} />
                <div className='py-2'>
                    <button className='btn btn-warning'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateOpportunity