import React from 'react';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import DocItem from './DocItem';
import './DocsList.css';

const DocsList = (props) => {
    const { user, userDocs } = props;

    if (userDocs.length === 0) {
        return (
            <div className="doc-list center">
                <Card>
                    <h2>No docs found. Maybe create one</h2>
                    <Button to="/docs/new">Share Doc.</Button>
                </Card>
            </div>
        );
    }

    return (
        <ul className="doc-list">
            {userDocs.map(doc => (
                <DocItem
                    key={doc.id}
                    id={doc.id}
                    image={doc.imageUrl}
                    title={doc.title}
                    description={doc.description}
                    creatorId={user.id}
                    name={user.name}
                    username={user.username}
                    avatar_image={user.awatar_image}
                    catBio={user.catBio}
                />
            ))}
        </ul>
    );
};

export default DocsList;