import React from 'react'
import './footer.scss'
import footersvg from '../../assets/Vector.svg'
import { BsYoutube } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-row1'>
                <div className='title'>
                    <h1>Church Website</h1>
                    <h6>Helping you lead your church
                        into a daily rhythm with God.
                    </h6>
                </div>
                <div className='col-02'>
                    <div className='links01'>
                        <h5>Products</h5>
                        <div className='link'>
                            <a>Church Profile & Insights</a>
                            <a>Church Online Platform</a>
                            <a>Church Metrics</a>
                            <a>Bible App for Kids</a>
                            <a>Church Events</a>
                        </div>
                    </div>
                    <div className='links01'>
                        <h5>Resources</h5>
                        <div className='link'>
                            <a>Blog</a>
                            <a>How to Get Started</a>
                            <a>Promo Materials</a>
                            <a>Support</a>
                            <a>Open Network</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-row2'>
                <div className='copyright'>
                    <div className='image'>
                        <h5>a digital ministry of</h5>
                        <img src={footersvg} />
                    </div>
                    <div className='text'>
                        <p>© Life.Church / YouVersion</p>
                        <a>Privacy Policy</a>
                        <a>Terms of Use</a>
                    </div>
                </div>
                <div className='socials'>
                    <AiFillInstagram />
                    <FaFacebookF />
                    <BsYoutube />
                </div>
            </div>

        </div>
    )
}

export default Footer