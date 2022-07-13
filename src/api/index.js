import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchProjectsData = async () => {
    try {
        const response = await fetch(`${url}/projects`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchAssignmentsData = async (id) => {
    try {
        const response = await fetch(`${url}/assignments/${id}`)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchCustomers = async () => {
    try {
        const response = await fetch(`${url}/customers`)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchEmployeesByWC = async (wcID) => {
    try {
        const response = await fetch(`${url}/employees/wc/${wcID}`)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${url}/products`)
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const createNewOpp = (formData) => axios.post(`${url}/opp`, formData)