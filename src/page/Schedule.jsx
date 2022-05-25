import { useState, useTransition, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './schedule.css';
import { getEvents } from '../service/event';

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
      return <button aria-busy="true">Loading Events...</button>
    } else {
      const dates = events.map(event => new Date(Date.parse(event.startAt)));
      return <>
        <article>
          <DayPicker 
            mode="single" 
            selected={dates} 
            onDayClick={handleDayClick}
            modifiers={{ event: dates }}
            modifiersClassNames={{
              event: 'event-modifier'
            }}
            />
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