import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = ({friend}) => {
    const {name, id, username,email } = friend;
    return (
        <div className='friend'>
            <h3>name:{name}</h3>
            <p>email: {email}</p>
            <h4><small>username:<Link to={`/friends/${id}`}>{username}</Link></small></h4>
        </div>
    );
};

export default Friend;