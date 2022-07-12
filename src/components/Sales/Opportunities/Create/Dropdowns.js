import { useState } from 'react'
import Select from 'react-select'
import { statusOptions, pmOptions, salesOptions, customerOptions, stateOptions } from "../../../../lib/dropdown_options"

const CreateDropDowns = ({ setFormData, formData, customers, pms, salespeople, products }) => {
    const [numProducts, setNumProducts] = useState([{product: ''}])
    const formDropdowns = [{label: "Status", value: 'status', options: statusOptions}, {label: "Project Manager", value: 'project_manager', options: pms}, {label: "Sales Person", value: 'sales_person', options: salespeople}, {label: "Customer", value: 'customer', options: customers}, {label: "State", value: 'state', options: stateOptions}, {label: "Products", value: 'products', options: products} ]
    const handleProductAdd = (e) => {
        setFormData({...formData, products: e.value})
        setNumProducts({...numProducts, product: e.value})
        console.log(numProducts)

    }
    return (
        <>
            {formDropdowns.map(formdrop => (
                formdrop.label === "Products" ?
                // numProducts.length ?

                    numProducts.map( (prod,i) => (
                        <div key={i} className='form-group row py-2'>
                            <label htmlFor="" className="col-sm-3 col-form-label"><b>{formdrop.label}</b></label>
                            <div className="col-sm-6">
                                <Select id={formdrop.label} data-placeholder="Select Status" options={formdrop.options} onChange={handleProductAdd} />
                            </div>
                            {numProducts.length - 1 === i && <button id='add-ingredient' type='button' className='btn btn-primary my-2'>Add Product</button>} 
                        </div>  
                    ))
                // :
                // <div key={0} className='form-group row py-2'>
                //     <label htmlFor="" className="col-sm-3 col-form-label"><b>{formdrop.label}</b></label>
                //     <div className="col-sm-6">
                //         <Select id={formdrop.label} data-placeholder="Select Status" options={formdrop.options} onChange={(e) => setNumProducts(e.value) } />
                //     </div>
                // </div>
                // numProducts.map( (prod,i) => (
                    // console.log('numProducts')
                    // numProducts.length === 0 && 
                    // <div key={i} className='form-group row py-2'>
                    //     <label htmlFor="" className="col-sm-3 col-form-label"><b>{formdrop.label}</b></label>
                    //     <div className="col-sm-6">
                    //         <Select id={formdrop.label} data-placeholder="Select Status" options={formdrop.options} onChange={(e) => setFormData({...formData, [formdrop.value]: e.value }) } />
                    //     </div>
                    // </div>
                // ) )
                :
                <div key={formdrop.label} className='form-group row py-2'>
                    <label htmlFor="" className="col-sm-3 col-form-label"><b>{formdrop.label}</b></label>
                    <div className="col-sm-6">
                        <Select id={formdrop.label} data-placeholder="Select Status" options={formdrop.options} onChange={(e) => setFormData({...formData, [formdrop.value]: e.value }) } />
                    </div>
                </div>
            ))}
        </>
    )
}

export default CreateDropDowns