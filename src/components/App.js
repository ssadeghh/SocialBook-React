import React from 'react'
import Navbar from './Navbar'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Main from './Main'
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
