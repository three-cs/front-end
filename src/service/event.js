import _ from 'lodash';

const EVENTS = {
  '1': {
    startAt: '2022-06-24T13:00:00Z',
    summary: 'Contact Doe John',
    contact: '2'
  },
  '2': {
    startAt: '2022-06-26T13:00:00Z',
    summary: 'TEST EVENT 2'
  },
  '3': {
    startAt: '2022-06-03T13:00:00Z',
    summary: 'TEST EVENT 3'
  }
};

export const getEvents = async () => {
  return _.map(EVENTS, (event, id) => {
    return {
      id,
      ...event
    }
  });
};

export const getEvent = async (id) => {
  if (id in EVENTS) {
    return {
      id,
      ...EVENTS[id]
    };
  } else {
    return null;
  }
};