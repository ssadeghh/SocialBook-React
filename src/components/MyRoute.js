import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import Profile from './Profile'

export default function MyRoute() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </div>
    )
}
