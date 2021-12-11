import React from 'react'
import ThemeSwitch from '../ThemeSwitch'
const Header = () => {
    return (
        <div className='header-container'>
            <div className='logo-section'>
                Todo App
            </div>
            <div className='theme-switcher'>
                <ThemeSwitch/>
            </div>
        </div>
    )
}

export default Header
