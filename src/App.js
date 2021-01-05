import React , {useEffect}  from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Login from './Login.js';
import './App.css';
import Header from  './Header.js';
import Sidebar from './Sidebar.js';
import Feed from './Feed.js';
import Widgets from './Widgets.js';
import {selectuser} from './features/userSlice.js';
import {auth} from './firebase.js';
import{login,logout} from './features/userSlice.js';

function App() {

  const user = useSelector(selectuser);
  const dispatch=useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
          dispatch(
          login({
                   email:userAuth.email,
                   uid:userAuth.uid,
                   displayName:userAuth.displayName,
                   photoURL:userAuth.photourl
        }))
      }
      else{
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Header/>

      {!user?
        <Login/>:
        <div className='app__body'>
          <Sidebar/>
          <Feed/>
          <Widgets/>
        
        </div>
      }

      
    </div>
  );
}

export default App;
