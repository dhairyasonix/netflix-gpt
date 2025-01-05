import React, { useRef, useState } from 'react'
import Header from './Header'
import { cheackValidation } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {

    const [issignInForm, setissignInForm] = useState(true);
    const [errormessage, seterrormessage] = useState(null)

    const email = useRef(null);
    const password = useRef(null)
    const name = useRef(null)

    const handleButton = () => {

        const message = cheackValidation(email?.current?.value, password?.current?.value)
        seterrormessage(message)

        if (message) return; // retun if error


        if (!issignInForm) {//sign up
            console.log(email?.current?.value)

            createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    seterrormessage(errorMessage)
                    // ..
                });

        }
        else {
            signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
              console.log(user)
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              seterrormessage(errorMessage)
            });
        }




    }

    const toggleSignIn = () => {
        setissignInForm(!issignInForm)
    }

    return (
        <div>
            <div className='absolute z-10'> <Header /></div>
            <div>
                <img className="absolute" src='https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg' alt='loginBg' />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='px-14 my-36 mx-auto w-3/12 left-0 right-0 absolute bg-black text-white rounded-lg bg-opacity-80'>




                <h1 className='py-6  text-2xl font-bold'>{issignInForm ? "Sign In" : "Sign Up"}</h1>

                {!issignInForm && <input ref={name} className='p-4 my-4 w-full bg-gray-800' type='text' placeholder='Full Name' />}


                <input ref={email} className='p-4 my-4 w-full bg-gray-800' type='text' placeholder='Email Address' />

                <input ref={password} className='p-4 my-2  w-full bg-gray-800' type='password' placeholder='Password' />

                <p className='font-bold text-red-500 text-lg  my-2'>{errormessage}</p>

                <button className='p-4 mt-6  w-full bg-red-600 rounded-lg ' onClick={handleButton} >{issignInForm ? "Sign In" : "Sign Up"}</button>

                <p className=' my-4 cursor-pointer' onClick={toggleSignIn}>{issignInForm ? "New to Netflix? Sign up now." : "Already a Member? Sign in now"}</p>
            </form>

        </div>
    )
}

export default Login