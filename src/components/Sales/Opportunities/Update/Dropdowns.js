import Select from 'react-select'
import { statusOptions, pmOptions, salesOptions, customerOptions, stateOptions } from "../../../../lib/dropdown_options"

const UpdateDropDowns = ({ setFormData, formData, customers, pms, salespeople }) => {
    const formDropdowns = [{label: "Status", value: 'status', options: statusOptions}, {label: "Project Manager", value: 'project_manager', options: pms}]

    return (
        <>
            {formDropdowns.map(formdrop => (
                <div key={formdrop.label} className='form-group row py-2'>
                    <label htmlFor="" className="col-sm-3 col-form-label"><b>{formdrop.label}</b></label>
                    <div className="col-sm-6">
                        <Select id={formdrop.label} data-placeholder="Select Status" isMulti options={formdrop.options} onChange={(e) => setFormData({...formData, [formdrop.value]: e.value }) } />
                    </div>
                </div>
            ))}
        </>
    )
}

export default UpdateDropDowns