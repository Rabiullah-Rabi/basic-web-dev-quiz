import { createBrowserRouter } from "react-router-dom";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import Root from "./components/Root";
import Statistics from "./components/Statistics";
import Topics from "./components/Topics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: 'topics',
                element:<Topics></Topics>
            },
            {
                path: 'statistics',
                element:<Statistics></Statistics>
            },
            {
                path: 'blog',
                element:<Blogs></Blogs>
            }
        ]
    }
])

export default router;