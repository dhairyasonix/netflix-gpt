
import Login from "./Login"
import Brouse from './Brouse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/brouse",
        element: <Brouse />
    },
],
{
   basename: process.env.NODE_ENV === "production" ? "/netflix-gpt" : ""
  }
);

const Body = () => {
    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body