import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'

const Header = () => {
    return (
            <div className={style.header}>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    logo here
                    <div>
                        <Link to={'/home'} style={{margin: '20px'}}>Home</Link>
                        <Link to={'/projects'} style={{margin: '20px'}}>Projects</Link>
                        <Link to={'/about'} style={{margin: '20px'}}>About</Link>
                    </div>
                </div>

            </div>
    )
}

export default Header