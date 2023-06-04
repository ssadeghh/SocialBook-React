import React from 'react'
import Navbar from './Navbar'

import '../styles/app.css';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Main from './Main';

export default function App() {
  return (
    <>
        <Navbar/>
        <div className="container">
          <LeftSidebar/>
          <Main/>
          <RightSidebar/>
        </div>
    </>
  )
}
