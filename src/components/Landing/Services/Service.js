const Service = ({ serviceList }) => {
    return (
        <div className='d-flex justify-content-center flex-wrap pb-4'>
            {serviceList.map(service => (
                <div key={service.title} className='landing-service col-10 col-md-6 col-lg-6 col-xl-5 col-xxl-4'>
                    <h3>{service.title}</h3>
                    <img src={service.img} alt={service.title} style={{width: "100%", height: "100%", borderRadius: "0.3em"}} />
                    <p>{service.message}</p>
                </div>
            ))}
        </div>
    )
}

export default Service