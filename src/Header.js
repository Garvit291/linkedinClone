import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import i1 from './download.png';
import HeaderOption from './HeaderOption.js';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useDispatch} from 'react-redux';   
import {logout} from './features/userSlice.js';
import {auth} from './firebase.js';

function Header() {

    const dispatch = useDispatch();
    
    const logoutofApp = () =>{
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className='header'>
            <div className='header__left'>
                <img src={i1} alt="" />
                <div className='header__search'>
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>
            <div className='header__right'>
                <HeaderOption Icon = {HomeIcon} title = 'Home'/>
                <HeaderOption Icon = {SupervisorAccountIcon} title = 'My network'/>
                <HeaderOption Icon = {BusinessCenterIcon} title = 'Jobs'/>
                <HeaderOption Icon = {ChatIcon} title = 'Messaging'/>
                <HeaderOption Icon = {NotificationsIcon} title = 'Notifications'/>
                <HeaderOption Icon = {ExitToAppIcon} title = 'Logout' onClick={logoutofApp}/>
                
                
                
                
            </div>
        </div>
    )
}

export default Header
