import React , {useState,useEffect} from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import Inputoption from './Inputoption.js'
import Post from './Post.js';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import {db} from './firebase.js' ;
import firebase from 'firebase';
import {useSelector} from 'react-redux';
import {selectuser} from './features/userSlice.js';
function Feed() {

     const user =  useSelector(selectuser);
    const [posts , setPosts] = useState([]);
    const [input,setInput] = useState('');

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp" , "desc")
        .onSnapshot( snapshot => (
            setPosts(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    data:doc.data()
                }
            )))
        ))
        
    }, [])

    const sendPost = (e) =>{
        e.preventDefault()

        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message:input,
            photourl:user.photoURL || '',
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput('')
    }
    return (
        <div className='feed'>
            <div className='feed__inputcontainer'>
                <div className='feed__input'>
                    <CreateIcon/>
                    <form>
                        <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>                    
                </div>

                <div className='feed__inputoptions'>
                <Inputoption Icon={ImageIcon} title ='Photo' 
                color='#70B5F9'/>
                 <Inputoption Icon={SubscriptionsIcon} title ='Video' 
                color='#E7A33E'/>
                 <Inputoption Icon={EventNoteIcon} title ='Event' 
                color='#C0CBCD'/>
                 <Inputoption Icon={CalendarViewDayIcon} title ='Write article' 
                color='#75C15E'/>
                </div>
                
            </div>

            
            {
                posts.map(({id, data:{name,description,message,photourl}})=>{
                    return(
                    <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photourl={photourl}
                    />
                    )
                })
            }
            
            
            

        </div>
    )
}

export default Feed
