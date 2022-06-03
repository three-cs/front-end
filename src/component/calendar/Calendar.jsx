import _ from 'lodash';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import './Calendar.css';

const Calendar = ({onDayClick = _.noop, events = []}) => {
  const dates = events.map(event => new Date(Date.parse(event.startAt)));
  return <DayPicker 
            mode="single" 
            selected={dates} 
            onDayClick={onDayClick}
            modifiers={{ event: dates }}
            modifiersClassNames={{
              event: 'event-modifier'
            }}
            />;
};

export default Calendar;