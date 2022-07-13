import Logo from "../Logo/Logo";
import SideNav from "../Navbars/Side/Side";
import TopNav from "../Navbars/Top/Top";
import Footer from '../Footer/Footer'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from "react";
const Default = ({ children }) => {
    const [name, setName] = useState("")
    const location = useLocation()
    
    useEffect(() => {
        location.state ? setName(location.state.user.name) : setName("Anonymous")
    },[location])
    return(
        <>
            <div className="wrapper">
                <TopNav name={name} />
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