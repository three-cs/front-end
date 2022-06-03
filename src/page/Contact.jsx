import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContact } from '../service/contact';
import Loading from '../component/Loading';

const Contact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    getContact(id)
      .then(setContact)
  }, [id])

  if (!contact) {
    return <main><Loading /></main>
  }

  return (
    <main>
      <h1>{contact.name}</h1>
      <article>
        <h3>Contact Methods</h3>
        {_.sortBy(contact.method, 'preference').map((method) => {
          return <div className='grid' key={method.preference}>
            <div>{method.type}</div>
            <div>{method[method.type]}</div>
          </div>
        })}
      </article>
    </main>
  )
}

export default Contact;