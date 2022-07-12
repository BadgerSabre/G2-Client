import Github from './Github/Github'
import Disclaimer from './Disclaimer'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <Github />
            <Disclaimer />
        </footer>
    )
}

export default Footer;