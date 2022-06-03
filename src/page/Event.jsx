import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEvent } from '../service/event';
import Loading from '../component/Loading';
import Calendar from '../component/calendar/Calendar';

const Event = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getEvent(id)
      .then(setEvent)
  }, [id])

  if (!event) {
    return <main><Loading /></main>
  }

  return (
    <main>
      <h1>{event.summary}</h1>
      <article>
        <p>Event at : {event.startAt}</p>
      </article>
      <article>
        <Calendar events={[event]} />
      </article>
    </main>
  )
}

export default Event;