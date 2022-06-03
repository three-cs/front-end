import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getEvents } from '../service/event';
import Loading from '../component/Loading';
import Calendar from '../component/calendar/Calendar';

const Schedule = () => {
  const [clicked, setClicked] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(setEvents);
  }, []);

  const handleDayClick = (day, modifiers) => {
    setClicked(day);
  }

  const whileLoading = () => {
    if (events.length === 0) {
      return <Loading />
    } else {
      return <>
        <article>
          <Calendar events={events} onDayClick={handleDayClick} />
        </article>
        <article>
          {events
            .filter((event) => {
              const startAt = new Date(Date.parse(event.startAt));
              return startAt.getUTCDate() === clicked.getUTCDate();
            })
            .map((event) => {
              return <details key={event.id}>
                <summary>{event.summary}</summary>
                <p>Event at : {event.startAt}</p>
                <p><Link to={`/event/${event.id}`}>Event</Link></p>
                {event.contact && <p><Link to={`/people/${event.contact}`}>Person</Link></p>}
              </details>
            })}
        </article>
      </>
    }
  }

  return (
    <main>
      <h1>Schedule</h1>
      {whileLoading()}
    </main>
  )
}

export default Schedule