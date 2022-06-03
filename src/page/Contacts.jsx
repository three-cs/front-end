import { useState, useEffect } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { getContacts } from "../service/contact";
import Loading from "../component/Loading";

const Contacts = () => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    getContacts()
      .then(setContacts)
  }, [])

  if (!contacts) {
    return <main><Loading /></main>
  }

  return (
    <main>
      <h1>People</h1>
      {contacts.map((contact) => {
        return <article key={contact.id}>
          <h3>{contact.name}</h3>
          {_.sortBy(contact.method, 'preference').map((method) => {
            return <div className='grid' key={method.preference}>
              <div>{method.type}</div>
              <div>{method[method.type]}</div>
            </div>
          })}
          <div>
            <Link to={`/people/${contact.id}`}>Details</Link>
          </div>
        </article>
      })}
    </main>
  )
}

export default Contacts