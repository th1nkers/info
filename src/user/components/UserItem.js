import React from 'react';

import UserCard from '../../shared/components/UserCard';

const UserItem = props => {
  return (
      <UserCard 
      id={props.id}
      avatarImage={props.avatarImage}
      name={props.name}
      username={props.username}
      catBio={props.catBio}
      actionButton= "Follow"
      />
  );
};

export default UserItem;
