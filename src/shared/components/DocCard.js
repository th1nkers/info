import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import Card from './UIElements/Card';

import Avatar from './UIElements/Avatar';
import Button from './FormElements/Button';

import './DocCard.css';


const DocCard = (props) => {
    return (
        <li className={`doc-item ${props.className}`} style={props.style}>
            <Card className={`doc-item__all_content ${props.all_content_className}`} style={props.all_content_style}>
                <Link to={props.to__content} className={`doc-item__content ${props.content_className}`} style={props.content_style}>
                    <div className={`doc-item__image ${props.avatar_image_className}`} style={props.avatar_image_style}>
                        <Avatar image={props.avatar_image} alt={props.name} />
                    </div>
                    <div className={`doc-item__info ${props.info_className}`} style={props.info_style}>
                        <h2>{props.name}</h2>
                        <span>
                            @{props.username} <div id={`cat__Bio`}>| {props.catBio}</div>
                        </span>
                    </div>
                </Link>
                <div className={`doc-item__setting ${props.setting_className}`} style={props.setting_className}>
                    <Button inverse> {props.docIt || "follow"}</Button>
                    <span><FontAwesomeIcon icon={faEllipsisVertical} size="lg" /></span>
                </div>
            </Card>
        </li>
    )
}

export default DocCard