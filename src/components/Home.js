import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                <Link to="/" className="mb-6 sm:mx-auto">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                    <svg
                        className="w-10 h-10 text-deep-purple-accent-400"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                    >
                        <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                        />
                    </svg>
                    </div>
                </Link>
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        Test Your web development knowledge
                    </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Here is some basic quiz for you to test your knowledge about webdevelopment. 
                    </p>
                </div>
                <div>
                    <Link
                    to="statistics"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
                    >
                    Get started
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;