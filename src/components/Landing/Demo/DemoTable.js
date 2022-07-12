import React from 'react'
import { Table } from 'react-bootstrap';

const demoCredentials = [{demo: "sales", dept: "Customer Service", wc: "Sales" }, {demo: "aftersales", dept: "Customer Service", wc: "After Sales" }, {demo: "marketing", dept: "Customer Service", wc: "Marketing" }, {demo: "servicetech", dept: "Customer Service", wc: "Service Technician" }, {demo: "egr",dept: "Engineering", wc: "Mechanical Engineering" }, {demo: "account", dept: "Finance", wc: "Accounting" }, {demo: "admin", dept: "Infastructure", wc: "Administration" },{demo: "infotech", dept: "Infastructure", wc: "Information Technology" }, {demo: "hr", dept: "Operations", wc: "Human Resources" }, {demo: "pm", dept: "Operations", wc: "Project Management" }, {demo: "exec", dept: "Operations", wc: "Executive" }, {demo: "super", dept: "Production", wc: "Supervisor" }, {demo: "ship", dept: "Production", wc: "Shipping & Receiving" }, {demo: "invent", dept: "Production", wc: "Inventory" }, {demo: "cnc", dept: "Production", wc: "CNC & Machining" }, {demo: "rd", dept: "Production", wc: "Research & Development" }, {demo: "quality", dept: "Production", wc: "Quality" }, {demo: "proc", dept: "Production", wc: "Procurement" }, {demo: "weld", dept: "Production", wc: "Welding" }, {demo: "mech", dept: "Production", wc: "Mechanical Assembly" }, {demo: "elec", dept: "Production", wc: "Electrical Assembly" }, {demo: "finish", dept: "Production", wc: "Finishing & Paint Shop" }, {demo: "test", dept: "Production", wc: "Testing" }]

const DemoTable = () => {

    return (
        <div className='table-wrapper d-flex justify-content-center'>
            <Table className='table table-hover table-dark table-striped'>
                <thead>
                    <tr>
                        <th>ID Number</th>
                        <th>Password</th>
                        <th>Department</th>
                        <th>Work Center</th>
                    </tr>
                </thead>
                <tbody>
                    {demoCredentials.map(cred => (
                        <tr key={cred.demo}>
                            <td>{cred.demo}</td>
                            <td>{cred.demo}</td>
                            <td>{cred.dept}</td>
                            <td>{cred.wc}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default DemoTable;