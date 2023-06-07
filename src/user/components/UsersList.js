import React from 'react';

import UserItem from './UserItem';
import './UsersList.css';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <>
      <ul className="users-list">
        {props.items.map(user => (
          <UserItem
            key={user.id}
            id={user.id}
            awatar_image={user.awatar_image}
            name={user.name}
            username={user.username}
            catBio={user.catBio}
          />
        ))}
      </ul>
    </>
  );
};

export default UsersList;
