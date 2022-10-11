import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id,logo, name, total } = topic;
    return (
        <Link to={`../quiz/${id}`}>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                <img
                    src={logo}
                    className="object-contain w-full h-64 bg-blue-400"
                    alt=""
                />
                <div className="p-5 border border-t-0">
                    <h1 className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">{name}</h1>     
                    <p className="mb-2 text-gray-700">
                        Total Quiz : {total}
                    </p>
                    <Link to={`../quiz/${id}`}>
                        <button className='px-5 py-2 bg-blue-500 text-white font-bold'>Start Quiz</button>
                    </Link>
                </div>
            </div>
        </Link>
    );
};

export default Topic;