import './Side.css'
const SideNav = () => {
    const temp = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"]
    return (
        <div className="side-nav">
            <ul>
                {temp.map(t => (
                    <li key={t} className="">{t}</li>
                ))}
            </ul>
        </div>
    )
}

export default SideNav