import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANG} from '../utils/constants';
import { toggleGptSerch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigator = useNavigate()
  const user = useSelector((store) => store.user)
  const location = useLocation()
  const dispatch = useDispatch()
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)



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
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigator("/brouse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigator("/");
      }
    });

    return () => unsubscribe() ;// unscribe when component unmount

  }, [dispatch, navigator]);

  const handleGptSearch = () => {
    dispatch(toggleGptSerch());
  }

  const handleLanguageChange =(e)=>{
    dispatch(changeLanguage(e.target.value))
  }


  return (
    <div className='absolute  px-8 py-2 bg-gradient-to-b from-black z-10 flex  justify-between w-full '>
      <img className='w-48 mx-10 px-6 py-8 ' src={LOGO} alt='logo'></img>

      {location.pathname === "/brouse" && user && <div className='flex'>
        <h4 className='my-8 py-4 px-2 font-bold text-white'>Hi {user?.displayName}</h4>
        {showGptSearch && <select className='px-2  mx-2 my-12 bg-gray-700 text-white rounded-sm hover:bg-opacity-70' onClick={handleLanguageChange}>
          {SUPPORTED_LANG.map(lan => <option key={lan.identifier} value={lan.identifier}>{lan.name}</option>)}
        </select>}
        <button onClick={handleGptSearch} className='px-2 py-2 mx-2 my-10 bg-purple-600 text-white font-bold rounded-lg hover:bg-opacity-70'>{showGptSearch? "Home" : "GPT Search"}</button>
        
        <div>
          {/* <img className='w-16 h-26  my-2 px-2 py-4 mix-blend-multiply' src={USER_ICON} alt='user'></img> */}

        </div>
        <button onClick={handleSignout} className=' px-2 py-2 mx-2 my-10 bg-red-600 text-white font-bold rounded-lg hover:bg-opacity-70'>Sign Out</button>
      </div>}


    </div>

  )
}

export default Header