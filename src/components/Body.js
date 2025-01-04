import React from 'react'
import Login from "./Login"
import Brouse from './Brouse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/brouser",
            element: <Brouse />
        },
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body