import { useEffect, useState } from 'react'
import CreateInputs from './inputs'
import CreateDropDowns from './dropdowns'
import { useDispatch } from 'react-redux'
import { createOpp } from '../../../../actions/sales'
import { fetchCustomers, fetchEmployeesByWC, fetchProducts } from '../../../../api'

const CreateOpportunity = () => {
    const dispatch = useDispatch()
    const [customers, setCustomers] = useState([])
    const [salespeople, setSalesPeople] = useState([])
    const [pms, setPMs] = useState([])
    const [products, setProducts] = useState([])
    const [formData, setFormData] = useState({ quote: '', project_number: '', year: '', revenue: '', ship_date: '', status: 'Lead', project_manager: '', sales_person: '', customer: '', state: '', products: [] })
    const formInputs = [{label: "Quote", value: "quote"}, {label: "Project Number", value: "project_number"}, {label: "Year", value: "year"}, {label: "Revenue", value: "revenue"}, {label: "Ship Date", value: "ship_date"}]
    const handleCreateOpp = (e) => {
        e.preventDefault()
        console.log(formData)
        dispatch(createOpp(formData)).then( (data) => {
            console.log(data)
        })
    }

    useEffect(() => {
        async function fetchFormData () {
            const customersData = await fetchCustomers()
            const projectManagers = await fetchEmployeesByWC(602)
            const salesPeople = await fetchEmployeesByWC(201)
            const productsData = await fetchProducts();
            let tempCustomers = customersData.map(customer => {
               return {value: customer._id, label: customer.company}
            })
            let tempPMs = projectManagers.map(pm => {
                return {value: pm._id, label: `${pm.first_name} ${pm.last_name}`}
            })
            let tempSalesPeople = salesPeople.map(salesperson => {
                return {value: salesperson._id, label: `${salesperson.first_name} ${salesperson.last_name}`}
            })
            let tempProducts = productsData.map(product => {
                return {value: product._id, label: product.name}
            })
            setCustomers(tempCustomers)
            setPMs(tempPMs)
            setSalesPeople(tempSalesPeople)
            setProducts(tempProducts)
        } 
        fetchFormData()
    },[])

    return (
        <div className="d-flex justify-content-center flex-wrap">
            <form onSubmit={handleCreateOpp} style={{width: "30vw", backgroundColor: 'white', borderRadius: "0.3em", padding: "1em"}}>
                <CreateInputs setFormData={setFormData} formData={formData} formInputs={formInputs} />
                <CreateDropDowns setFormData={setFormData} formData={formData} customers={customers} pms={pms} salespeople={salespeople} products={products} />
                <div className='py-2'>
                    <button className='btn btn-success'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateOpportunity