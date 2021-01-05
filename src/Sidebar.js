import React from 'react'
import {Avatar} from "@material-ui/core";
import {useSelector} from 'react-redux';
import {selectuser} from './features/userSlice.js';
import './Sidebar.css';
import i2 from './p2.jpg';

function Sidebar() {

    const user =  useSelector(selectuser);

    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src={i2} alt="p2"/>
                <Avatar className = "sidebar__avatar"/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>People who viewed your profile</p>
                    <p className ="sidebar__statnumber">1234</p>                 
                </div>

                <div className="sidebar__stat">
                    <p>People who viewed your posts</p>
                    <p className ="sidebar__statnumber">2564</p>                 
                </div>
                
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                <h5>#programming</h5>
                <h5>#abcde</h5>
                <h5>#engineer</h5>
                <h5>#softwares</h5>
                <h5>#tech</h5>
            </div>
            
        </div>
    )
}

export default Sidebar
