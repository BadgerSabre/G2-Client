import Demo from '../Demo/Demo'
import About from '../About'
import Service from './Service'

const Services = () => {
    const serviceList = [{title: "Visualize", img: "imgs/visualize.png", message: "Visualize your company's data to make smarter decisions"}, {title: "Streamline", img: "imgs/streamline.jpg", message: "Streamline data across your company's platform"}, {title: "Automate", img: "imgs/automation.jpeg", message: "Automate tasks and reports to save time and money"}]
    return (
        <div className='landing-container'>
            <About />
            <Service serviceList={serviceList} />
            <Demo />
        </div>
    )
}

export default Services