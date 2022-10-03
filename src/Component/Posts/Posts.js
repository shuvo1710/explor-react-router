import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingelPost from '../SingelPost/SingelPost';

const Posts = () => {
    // console.log(params)
    const posts = useLoaderData();
    // console.log(posts)
    return (
        <div>
            <h1>all fb posts are here</h1>
            {
                posts.map(post => <SingelPost
                key={post.id}
                post={post}></SingelPost>)
            }
        </div>
    );
};

export default Posts;