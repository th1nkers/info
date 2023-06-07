import React from 'react'

import UserCard from '../../shared/components/UserCard';

const ApplyDocItem = props => {
    return (
        <UserCard
            id={props.id}
            authImage={props.authImage}
            authTitle={props.authTitle}
            username={props.username}
            catBio={props.authBio || props.catBio}
            actionButton="Apply"
        />
    )
}

export default ApplyDocItem