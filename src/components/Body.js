import React, { useEffect } from 'react'
import Login from "./Login"
import Brouse from './Brouse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/brouse",
        element: <Brouse />
    },
]);

const Body = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) { // loged in

                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, displayName: displayName, email: email }))
            } else {
                // User is signed out
                dispatch(removeUser())
            }
        });


    }, [dispatch])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body