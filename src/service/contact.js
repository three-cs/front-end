import _ from 'lodash';

export const CONTACT_METHOD_TYPE = {
  PHONE: 'phone',
  TEXT: 'text',
  EMAIL: 'email',
  BIRD_CALL: 'bird'
}

const CONTACTS = {
  '1': {
    name: 'Jane Doe',
    method: [
      {
        type: CONTACT_METHOD_TYPE.PHONE,
        phone: '9876543211',
        preference: 0
      },
      {
        type: CONTACT_METHOD_TYPE.EMAIL,
        email: 'jd@example.org',
        preference: 1
      }
    ]
  },
  '2': {
    name: 'Doe John',
    method: [
      {
        type: CONTACT_METHOD_TYPE.TEXT,
        text: '9876543211',
        preference: 1
      },
      {
        type: CONTACT_METHOD_TYPE.EMAIL,
        email: 'doe@example.net',
        preference: 0
      }
    ]
  },
  '3': {
    name: 'Capybara',
    method: [
      {
        type: CONTACT_METHOD_TYPE.BIRD_CALL,
        bird: 'Jeffery',
        preference: 0
      }
    ]
  }
};

export const getContacts = async () => {
  return _.map(CONTACTS, (event, id) => {
    return {
      id,
      ...event
    }
  });
};

export const getContact = async (id) => {
  if (id in CONTACTS) {
    return {
      id,
      ...CONTACTS[id]
    };
  } else {
    return null;
  }
};