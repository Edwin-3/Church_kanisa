import React from 'react';
import './wheel.scss';
import img1 from '../../assets/worship.jpg';
import img2 from '../../assets/hero-bg.jpg';
import img3 from '../../assets/mountainsbg.jpg';
import { BsGlobe } from 'react-icons/bs'

const Wheel = () => {

    return (
        <div className="section">
            <div className="disk-loop">
                <div className="disk-container">
                    <div className='inner-content'>
                        <div className='text'>
                            <BsGlobe />
                            <h4>Change The World</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-content">
                <div className="header">
                    <h2>Get Involved</h2>
                    <p>
                        At Mariners, we refer to the discipleship journey as the
                        Transformational Loop – becoming more like Jesus as we
                        grow in faith. We want to help you Follow Jesus with
                        your life, Grow Together in community, Serve One Another
                        with your unique gifts, and Change the World with the love
                        of Christ. If you’re ready to take your next step of faith, we
                        are here to help.
                    </p>
                    <button className='btn'>Experience the loop</button>
                </div>
            </div>
        </div>
    );
};

export default Wheel;