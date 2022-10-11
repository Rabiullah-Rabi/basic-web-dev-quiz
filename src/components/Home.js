import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Topics from './Topics';

const Home = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                    <div className="flex items-center justify-center w-1/4 mx-auto rounded-full bg-indigo-50">
                        <img src="https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8193.jpg?w=826&t=st=1665516128~exp=1665516728~hmac=c9f873dfa84d204a124979f0fb4d39bb7bdd324571c33535aa660fbca58c6df4" alt="" />
                    </div>
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            Test Your web development knowledge
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">Here is some basic quiz for you to test your knowledge about webdevelopment.</p>
                    </div>
                <div>
                    <Link
                        to="topics"
                        className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
                        >
                        Get started
                    </Link>
                </div>
                    <Topics></Topics>
                </div>
            </div>
        </div>
    );
};

export default Home;