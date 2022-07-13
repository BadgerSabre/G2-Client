import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Sales from './components/Sales/Sales'
import PM from './components/PM/PM'
import Supervisor from './components/Supervisor/Supervisor'
import Production from './components/Production/Production'
import "./App.css"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/sales' element={<Sales />} />
                <Route path='/pm' element={<PM />} />
                <Route path='/supervisor' element={<Supervisor />} />
                <Route path='/production' element={<Production />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App