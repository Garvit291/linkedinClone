import React from 'react'
import './Post.css';
import {Avatar} from "@material-ui/core";
import Inputoption from './Inputoption.js';
import ThumbUpAltOutLinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutLinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutLinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutLinedIcon from '@material-ui/icons/SendOutlined';

function Post({name , description, message , photourl}) {
    return (
        <div className='post'>
            <div className='post__header'>
                <Avatar/>
                <div className='post__info'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                
            </div>
            <div className='post__body'>
                <p>{message}</p>
            </div>

            <div className='post__buttons'>
                <Inputoption Icon={ThumbUpAltOutLinedIcon} title='Like'/>
                <Inputoption Icon = {ChatOutLinedIcon} title='Comment'/>
                <Inputoption Icon = {ShareOutLinedIcon} title='Share'/>
                <Inputoption Icon = {SendOutLinedIcon} title='Send'/> 
            </div>
        </div>
    )
}

export default Post
