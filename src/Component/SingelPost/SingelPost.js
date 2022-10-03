import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SinglePost.css'

const SingelPost = ({post}) => {
    const {id,title,body} = post;
    const navigate = useNavigate();
    const hendlerNavigation= () =>{
        navigate(`/post/${id}`)
    };
    return (
        <div className='post'>
            <p>Title: {title}</p>
            <p><small>Body: {body}</small></p>
            <Link to={`/post/${id}`}>visti: ${id}</Link><br />
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={hendlerNavigation}>Show Dwtails2</button>
            
        </div>
    );
};

export default SingelPost;