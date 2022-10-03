import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendsDetails = () => {
    const friend = useLoaderData();
    const {name,phone} = friend;
    return (
        <div>
            <h1>Details About</h1>
            <h2>Everything you need to know about this person</h2>
            <h2>Name:{name}</h2>
            <p>CAll him/her:{phone}</p>
            
        </div>
    );
};

export default FriendsDetails;