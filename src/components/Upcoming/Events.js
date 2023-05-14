import React from 'react'
import './events.scss'
import bibleImg from '../../assets/bible.jpg'
import worshipImg from '../../assets/worship.jpg'


const events = [
    {
        id: 1,
        image: bibleImg,
        title: "Sunday Service",
        description: "Join us for our weekly Sunday service",
        date: "May 7-28 | Sundays at 9 | 10:30 AM",
    },
    {
        id: 2,
        image: worshipImg,
        title: "Bible Study",
        description: "Deepen your understanding of the Bible with our weekly study group",
        date: "May 18, 2023",
    },
];

const Events = () => {
    return (
        <section className='container events'>
            {events.map((event) => (
                <div className="event-card" key={event.id}>
                    <img src={event.image} alt={event.title} />
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>
                    <p className="event-date">{event.date}</p>
                </div>
            ))}
        </section>
    )
}

export default Events
