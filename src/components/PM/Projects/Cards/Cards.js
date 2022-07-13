import './Cards.css'

const Cards = ({ filteredProjects }) => {
    
    return (
        <div id='production-projects'>
            {filteredProjects &&
                filteredProjects.map((project, i) => (
                    <div key={i} className='production-card col-8 col-md-4 col-lg-3 col-xxl-2'>
                        <h4 id="project-name">{project.name}</h4>
                        <h5 id="customer">{project.customer}</h5>
                        <h6 id="pm">{project.pm}</h6>
                    </div>
                ))
            }
        </div>
    )
}

export default Cards