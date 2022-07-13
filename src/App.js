import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Sales from './components/Sales/Sales'
import PM from './components/PM/PM'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/sales' element={<Sales />} />
                <Route path='/PM' element={<PM />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App