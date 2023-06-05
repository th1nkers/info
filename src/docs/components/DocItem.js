import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEllipsisVertical, faSignature,faFileLines, faComment, faSquareShareNodes } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import './DocItem.css';

const DocItem = props => {
  const { description } = props;

  const trimmedDescription = description.split(' ').slice(0, 100).join(' ');
  const isLongDescription = description.split(' ').length > 100;

  return (
    <li className="userDoc-item">
      <Card className="userDoc-item__all_content">
        <Link to={`/@${props.username}/${props.id}`} className="userDoc-item__content">
          <div className="userDoc-item__image">
            <Avatar image={props.avatar_image} alt={props.name} />
          </div>
          <div className="userDoc-item__info">
            <h2>{props.title}</h2>
            <span>
              {props.name} | @{props.username} <div id="cat__Bio">| {props.catBio}</div>
            </span>
          </div>
        </Link>
        <div className="userDoc-item__setting">
          <span><FontAwesomeIcon icon={faEllipsisVertical} size="lg" /></span>
        </div>
      </Card>

      <div className="doc-item__all_content">
        <div className="doc-item__content">
          <p>
            {trimmedDescription}
            {isLongDescription && '... '}
            {isLongDescription && <span className="show-more">Show more</span>}
          </p>
        </div>

        <div className="feed_back">
          <FontAwesomeIcon icon={faComment} size="xl" />
          <FontAwesomeIcon icon={faSignature} size="xl" />
          <FontAwesomeIcon icon={faHeart} beat size="xl" />
          <FontAwesomeIcon icon={faSquareShareNodes} size="xl" />
          <Button inverse>subscribe +</Button>
          <FontAwesomeIcon icon={faFileLines} size="xl" />
        </div>

      </div>
    </li>
  );
};

export default DocItem;
