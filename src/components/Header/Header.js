import React from 'react'
import "./Header.css"
const Header = () => {
    return (

        <div className='Header'>
            <img src='images/logo.svg' alt='logo' />
            <div className='links'>
            <p>
                Home
            </p>
            <p>
                New
            </p>
            <p>
                Popular
            </p>
            <p>
                Trending
            </p>
            <p>
                Categories
            </p>
            </div>
        </div>

    )
}

export default Header