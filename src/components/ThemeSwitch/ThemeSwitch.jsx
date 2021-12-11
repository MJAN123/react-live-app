import React, {useState} from 'react'
import {themeConst} from '../../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import {faSun} from '@fortawesome/free-regular-svg-icons'

const ThemeSwitch = () => {
    const [theme, setTheme] = useState(themeConst.light)
    const handleChangeTheme = (themeValue) =>{
            setTheme(themeValue)
            if (themeValue === themeConst.light){
                // Store Theme value in your local storage
                localStorage.setItem('Theme', 'light');
                document.body.classList.add ('light-mode')
                document.body.classList.remove('dark-mode')
            }else {
                // Store Theme value in your local storage
                localStorage.setItem('Theme', 'light');
                document.body.classList.add ('dark-mode')
                document.body.classList.remove('light-mode')
            }
    }
    return (
        <div className='theme-container' title='Click to Switch Theme'>
            {theme === themeConst.dark ?
                <div className='light-theme' onClick={()=>handleChangeTheme(themeConst.light) }>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faMoon} size='lg' />
                    </div>
                    <div className='label'>
                        Dark Mode
                    </div>
                </div>:
                    <div className='dark-theme' onClick={()=>handleChangeTheme(themeConst.dark) }>
                <div className='icon'>
                    <FontAwesomeIcon icon={faSun} size='lg' />
                    </div>
                    <div className='label'>
                        Light Mode
                    </div>
                </div>
            }
            
        </div>
    )
}

export default ThemeSwitch
