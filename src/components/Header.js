import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_ICON } from '../utils/constants';

const Header = () => {

  const navigator = useNavigate()
  const user = useSelector((store) => store.user)
  const location = useLocation()
  const dispatch = useDispatch()



  const handleSignout = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      // An error happened.
    });
  };



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) { // loged in

        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }))
        navigator("/brouse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigator("/")
      }
    });

    return () => unsubscribe() // unscribe when component unmount

  }, [dispatch, navigator])



  return (
    <div className='absolute  px-8 py-2 bg-gradient-to-b from-black z-10 flex  justify-between w-full '>
      <img className='w-48 mx-10 px-6 py-8 ' src={LOGO} alt='logo'></img>

      {location.pathname === "/brouse" && user && <div className='flex'>

        <h4 className='my-8 py-4 px-2 font-bold text-white'>Hi {user?.displayName}</h4>
        <div>
          {/* <img className='w-16 h-26  my-2 px-2 py-4 mix-blend-multiply' src={USER_ICON} alt='user'></img> */}

        </div>
        <button onClick={handleSignout} className=' my-10 mr-10 p-2 font-bold text-lg text-white rounded-lg'>Sign Out</button>
      </div>}


    </div>

  )
}

export default Header