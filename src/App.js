import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Sales from './components/Sales/Sales'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/sales' element={<Sales />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App