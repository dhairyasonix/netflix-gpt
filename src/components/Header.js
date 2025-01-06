import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigator = useNavigate()
  const user = useSelector((store) => store.user)
  const location = useLocation()

  const handleSignout = () => {
    signOut(auth).then(() => {
      navigator("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='w-screen bg-gradient-to-b from-black flex justify-between'>
      <img className='w-48 mx-10 px-6 py-8 ' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'></img>

      {location.pathname === "/brouse" && user && <div className='flex'>

        <h4 className='my-8 py-4 px-2 font-bold text-white'>Hi {user?.displayName} !</h4>
        <div>
          <img className='w-24 h-28  my-2 px-2 py-4 mix-blend-multiply' src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' alt='user'></img>

        </div>
        <button onClick={handleSignout} className=' my-10 mr-10 p-2 font-bold text-lg text-black rounded-lg bg-red-500'>Sign Out</button>
      </div>}


    </div>

  )
}

export default Header