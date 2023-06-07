import React from 'react'

import ApplyDocItem from './ApplyDocItem'

import '../../user/components/UsersList.css'

const ApplyDocsList = props => {

  const  {applyDocs,applyItems } = props;

  return (
    <ul className="users-list">
    {applyDocs.map(applyDoc => (
      <ApplyDocItem
        key={applyDoc.id}
        id={applyDoc.id}
        authImage={applyDoc.authImage}
        avatarImage = {applyItems.awatarImage}
        authTitle={applyDoc.authTitle}
        username={applyItems.username}
        catBio={applyItems.catBio}
        authBio={applyDoc.authBio}
      />
    ))}
  </ul>
  )
}

export default ApplyDocsList