import React from 'react'

import { DUMMY_USERS } from './UserDocs'
import ApplyDocsList from '../components/ApplyDocsList'

const Apply = () => {

const loadedDocs = DUMMY_USERS.filter((doc)=>{return doc })

  return <>
    {loadedDocs.map(doc => (
      <ApplyDocsList
        applyItems={doc}
        key={doc.id}
        applyDocs={doc.applyDocs} 
      />
    ))
    } 
  </>
}

export default Apply