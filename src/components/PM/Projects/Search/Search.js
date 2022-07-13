const Search = ({ allProjects, setFilteredProjects }) => {

    const handleFilter = (e) => {
        const re = new RegExp(e.target.value, "gi")
        let filtered = allProjects.filter(project => re.test(project.name) )
        setFilteredProjects(filtered)
    }

    return (
        <div className='d-flex justify-content-center'>
              <div className="form-group d-flex justify-content-center" style={{width: "50vw"}}>
                <div className="col-sm-4">
                    <input onChange={handleFilter} placeholder="Project name" className='form-control' type="text"/>
                </div>
            </div>
        </div>
    )
}

export default Search