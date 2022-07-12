import Login from './Login/Login'
import Logo from '../Logo/Logo'
import Services from './Services/Services'
import Footer from '../Footer/Footer'
import './Landing.css'

const Landing = () => {

    return (
        <>
            <div className='wrapper-landing'>
                <div id='login-container'>
                    <Logo />
                    <Login />
                </div>
                <div className='filler'></div>
                <Services />
                <Footer />
            </div>
        </>
    )
}

export default Landing;