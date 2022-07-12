const CreateInputs = ({ setFormData, formData, formInputs }) => {

    return (
        <>
            {formInputs.map(forminput => (
                <div key={forminput.value} className="form-group row py-2">
                    <label htmlFor={forminput.value} className="col-sm-3 col-form-label"><b>{forminput.label}</b></label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id={forminput.value} onChange={(e) => setFormData({...formData, [forminput.value]: e.target.value }) } />
                    </div>
                </div>
            ))}
        </>
    )
}

export default CreateInputs