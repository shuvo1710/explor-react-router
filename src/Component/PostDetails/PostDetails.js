import React from 'react';
import { useLoaderData, useNavigate, useRouteLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, body, title,userId} = post;
    const navigate = useNavigate();
    const handlerNavigation = ()=>{
        navigate(`/friends/${userId}`)
    }
    
    return (
        <div>
            <h1>About Post Details: {id}</h1>
            <p>{title}</p>
            <p><small>{body}</small></p>
            <button onClick={handlerNavigation}>Author</button>
            
        </div>
    );
};

export default PostDetails;
