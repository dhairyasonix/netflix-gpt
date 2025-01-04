import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [issignInForm, setissignInForm] = useState(true);

    const toggleSignIn = () => {
        setissignInForm(!issignInForm)
    }

    return (
        <div>
            <Header />
            <div>
                <img className="absolute" src='https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg' alt='loginBg' />
            </div>
            <form className='px-14 my-36 mx-auto w-3/12 left-0 right-0 absolute bg-black text-white rounded-lg bg-opacity-80'>
                <h1 className='py-6  text-2xl font-bold'>{issignInForm ? "Sign In" : "Sign Up"}</h1>
                {!issignInForm && <input className='p-4 my-4 w-full bg-gray-800' type='text' placeholder='Full Name' />}
                <input className='p-4 my-4 w-full bg-gray-800' type='text' placeholder='Email Address' />
                <input className='p-4 my-2  w-full bg-gray-800' type='text' placeholder='Password' />
                <button className='p-4 mt-6  w-full bg-red-600 rounded-lg ' >{issignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 my-4 cursor-pointer' onClick={toggleSignIn}>{issignInForm ? "New to Netflix? Sign up now." : "Already a Member? Sign in now"}</p>
            </form>

        </div>
    )
}

export default Login