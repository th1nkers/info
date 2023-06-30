import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import './UserCard.css';

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__all_content">
        <Link to={`/${props.id}/docs`} className="user-item__content">
          <div className="user-item__image">
            <Avatar image={props.avatarImage || props.authImage} alt={props.name || props.authTitle} />
          </div>
          <div className="user-item__info">
            <h2>{props.name || props.authTitle}</h2>
            <span>
              @{props.username} <div id="cat__Bio">| {props.catBio}</div>
            </span>
          </div>
        </Link>
      <div className="user-item__setting">
        <Button inverse>{props.actionButton}</Button>
        <span><FontAwesomeIcon icon={faEllipsisVertical} size="lg" /></span>
      </div>
      </Card>
    </li>
  );
};

export default UserItem;
