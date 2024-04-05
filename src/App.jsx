import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import List from './Components/List'
import Card from './Components/Card'
import { useRoutes } from "react-router-dom";
import BookChart from './Components/BookChart'
import BookChart2 from './Components/BookChart2'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="app-container">
      <div className="sidebar">
        <Header />
        <Navbar />
      </div>
      <div className="main-content">
        <Card />
          <div className='list-content'>
            <List />
            <div className="charts">
              <BookChart2 />
              <BookChart />
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
