import React ,{useState} from 'react'
import './Login.css';
import p3 from './p3.jpg';
import {auth} from './firebase.js'; 
import {useDispatch} from 'react-redux';   
import {login} from './features/userSlice.js';

function Login() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilepic, setProfilepic] = useState('');
    const dispatch = useDispatch();

    const register = () =>{
        if(!name){
            return alert('Please enter a full name')
        }

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilepic
            })
            .then(()=>{
                dispatch(
                    login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name,
                        photoURL:profilepic
                    })
                )
            })
        }).catch(err=>alert(err))
    }

    const logintoApp = (e) =>{
        e.preventDefault()

        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
            dispatch(login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:userAuth.displayName,   
                        photoURL:userAuth.photoURL   
            }))
        }).catch(err=>alert(err))
    }
    return (
        <div className='login'>
            <img src={p3} alt=""/>
            <form>
                <input type="text" 
                    placeholder="Full name (required)"
                    value={name}
                    onChange={e=>setName(e.target.value)}                
                />
                <input type="text" 
                    placeholder="Profile Pic URL"
                    value={profilepic}
                    onChange={e=>setProfilepic(e.target.value)}    
                />
                <input type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
                <button type="submit" onClick={logintoApp}>Sign In</button>
            </form>

            <p> Not a member?
                <span className='login__register' onClick={register}>
                    Register Now  
                </span>
            </p>
            
        </div>
    )
}

export default Login
