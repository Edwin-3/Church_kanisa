import React from 'react'
import './experience.scss'
import { BiChurch } from 'react-icons/bi'
import { HiOutlineHomeModern } from 'react-icons/hi2'
import { BsLaptop } from 'react-icons/bs'
import { TfiLocationPin } from 'react-icons/tfi'


const data = [
    {
        icon: <BiChurch />,
        title: 'Our Church Gatherings',
        description: 'Join us as we gather at one of our church campuses.',
        button: 'PLAN A VISIT'
    },
    {
        icon: <HiOutlineHomeModern />,
        title: 'Congregants Hosted Here',
        description: 'Join us as we gather at one of our church campuses.',
        button: 'Button 2'
    },
    {
        icon: <BsLaptop />,
        title: 'Church Online',
        description: 'Join our weekly live-stream and online midweek programming to experience services from anywhere.',
        button: 'Button 3'
    },
    {
        icon: <TfiLocationPin />,
        title: 'Plan a Visit',
        description: 'We gather every weekend as a church to be inspired to follow Jesus. We would love for you to be our guest.',
        button: 'Button 4'
    }
]


const Experience = () => {
    return (
        <div className='container experience-section'>
            <div className='col-1'>
                <h1>Ways to Experience our Church</h1>
                <p>There are several ways to participate in
                    our church worship experiences. Whatever your
                    comfort level, there are opportunities for you to
                    join in community and draw nearer to Jesus.
                </p>
            </div>
            <div className='col-2'>
                {data.map(item => (
                    <div className='item'>
                        {item.icon}
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <button>{item.button}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience