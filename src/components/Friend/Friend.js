import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, email, address } = props.friend;
    const history = useHistory();
    const friendStyle = {
        backgroundColor: 'burlywood',
        border: '3px solid cyan',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px',
    }
    const url = `/friend/${id}`

    const handleFriendClick = () => {
        history.push(`/friend/${id}`)
    }

    return (
        <div style={friendStyle}>
            <h2>I am {name} {id}</h2>
            <p>My Contact Number: {phone}</p>
            <p>My Contact email: {email}</p>
            <p>My Address: {address.city}</p>
            <h2>My Website: {website}</h2>
            <Link to={url}>Visit Me</Link>
            <br />
            <Link to={url}>
                <button>Visit Me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit Me 2</button>
        </div>
    );
};

export default Friend;