import Default from '../Default/Default'
import Cards from './Projects/Cards/Cards'
import Search from './Projects/Search/Search'
import { useState, useEffect } from 'react'

const PM = () => {
    const [allProjects, setAllProjects] = useState()
    const [filteredProjects, setFilteredProjects] = useState()

    const children = <>
        <Search allProjects={allProjects} setFilteredProjects={setFilteredProjects}/>
        <Cards filteredProjects={filteredProjects}/>
    </>

    useEffect(() => {
        const fetchAllProjects = async () => {
            let temp = [{name: "PJ-000-01", pm: "Janette Pham", customer: "Saltwater Technologies"}, {name: "PJ-000-02", pm: "Janette Pham", customer: "VitaTech"}, {name: "PJ-000-03", pm: "Morris Diaz", customer: "Cythetic"}, {name: "PJ-000-04", pm: "Gabriel Gross", customer: "Industrial Labs"}, {name: "PJ-000-05", pm: "Morris Diaz", customer: "Xytox"}, {name: "PJ-000-06", pm: "Janette Pham", customer: "Amtaro"}]
            setAllProjects(temp)
            setFilteredProjects(temp)
        } 
        fetchAllProjects()
    },[])

    return (
        <Default children={children}/>
    )
}

export default PM;