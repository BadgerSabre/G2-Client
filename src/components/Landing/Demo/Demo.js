import DemoTable from './DemoTable'
import './Demo.css'

const Demo = () => {

    return (
        <div>
            <div className='demo d-flex justify-content-center'>
                <div className='col-8 col-md-6 col-lg-5 col-xxl-3'>
                    <h1>Looking To Demo G2?</h1>
                    <p>
                        Thankfully you can! Just sign in with any of
                        the following credentials listed below. You may have
                        limited capabilities to prevent our database from being erased! 
                    </p>
                </div>
            </div>
            <DemoTable />
        </div>
    )
}

export default Demo;