import React from 'react'
import Navbar from './Navbar'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Main from './Main'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import '../styles/app.css'

export default function App() {
    return (
        <>
            <Navbar />
            <div className="container">
                <LeftSidebar />
                <Main />
                <RightSidebar />
            </div>
        </>
    )
}
