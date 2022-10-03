import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink> 
            <NavLink to= '/friend'>Friend</NavLink>
            <NavLink to='/product'>Product</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            <NavLink to='/about'>About</NavLink>
        </div>
    );
};

export default Header;