import { createBrowserRouter } from "react-router-dom";
import Blogs from "./components/Blogs";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Quizzes from "./components/Quizzes";
import Root from "./components/Root";
import Statistics from "./components/Statistics";
import Topics from "./components/Topics";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz');
                }
            },
            {
                path: 'topics',
                element: <Topics></Topics>,
                loader: () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz');
                }
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>,
                loader: () => {
                    return fetch('https://openapi.programming-hero.com/api/quiz');
                }
            },
            {
                path: 'blog',
                element:<Blogs></Blogs>
            },
            {
                path: 'quiz/:id',
                element: <Quizzes></Quizzes>,
                loader: ({params}) => {
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
                }
            }
        ]
    }
])

export default router;