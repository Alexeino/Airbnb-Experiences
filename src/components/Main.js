import React from 'react'
import grid from '../images/grid.png';
const Main = () => {
  return (
    <main className="main-container">
        <div className="grid">
            <img src={grid} alt="Grid Collage" className='grid-img'/>
        </div>
        <div className="text">
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind
                 hosts—all without leaving home.
            </p>
        </div>
    </main>
  )
}

export default Main