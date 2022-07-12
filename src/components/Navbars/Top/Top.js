import './Top.css'
const TopNav = () => {
    const temp = ["Option 1", "Option 2", "Option 3"]
    return (
        <div className="top-nav d-flex align-items-center">
            <div className='col-2'>
                <h3 style={{textAlign: 'center'}}>(User)</h3>
            </div>
            <div className="col-7">
            
            </div>
            <div className="col-3">
                {temp.map(t => (
                    <button key={t} className="btn btn-primary mx-2">{t}</button>
                ))}
            </div>
        </div>
    )
}

export default TopNav