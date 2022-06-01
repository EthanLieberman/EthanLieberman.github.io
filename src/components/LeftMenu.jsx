import React from 'react'
import style from './LeftMenu.module.css'

const LeftMenu = () => {
    return (
        <div className={style.leftmenu}>
            LeftMenu
            <a href="https://github.com/EthanLieberman" target='_blank' rel="noreferrer">
                <img src="../../images/github.png" alt="github logo" className={style.image} />
            </a>
            <a href="https://www.instagram.com/ethanthemaker/?hl=en" target='_blank' rel="noreferrer">
                <img src="../../images/instagram.png" alt="instagram logo" className={style.image} />
            </a>
            <a href="https://www.linkedin.com/in/ethan-lieberman/" target='_blank' rel="noreferrer">
                <img src="../../images/linkedin.png" alt="linkedin logo" className={style.image} />
            </a>
        </div>
    )
}

export default LeftMenu