import Logo from "../Logo/Logo";
import SideNav from "../Navbars/Side/Side";
import TopNav from "../Navbars/Top/Top";
import Footer from '../Footer/Footer'

const Default = ({ children }) => {
    return(
        <>
            <div className="wrapper">
                <TopNav />
                <div className="d-flex">
                    <div className="col-2">
                        <SideNav />
                    </div>
                    <div className="col-10">
                        <Logo />
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Default;