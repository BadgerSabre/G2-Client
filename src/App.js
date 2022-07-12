import React from 'react'
import Landing from './components/Landing/Landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App