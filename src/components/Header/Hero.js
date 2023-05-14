import React from 'react'
import Navbar from '../Navbar'
import './hero.scss'

const Hero = () => {
    return (
        <div className='hero-section'>
            <Navbar />
            <header>
                <div className='hero-content'>
                    <h1>Discover the Power of Faith</h1>
                    <p className='description'> Join our vibrant community and experience the transformative power of spirituality in a welcoming and inclusive environment.</p>
                    <p>Service Times: Sundays at 10:00 AM.</p>
                    <button className='btn'>Plan a visit</button>
                </div>
            </header>
        </div>
    )
}

export default Hero