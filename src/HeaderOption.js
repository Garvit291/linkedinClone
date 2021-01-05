import React from 'react'
import './Header.css';

function HeaderOption({Icon,title,onClick}) {
    return (
        <div className="HeaderOption">
            {Icon && <Icon className ="HeaderOption__icon" onClick={onClick} />}
            <h3 className="HeaderOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
