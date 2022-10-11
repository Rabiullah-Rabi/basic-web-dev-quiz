import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Topics = () => {
    const topics = useLoaderData({});
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    topics.data.map(topic =><Topic topic={topic} key={topic.id}></Topic>)
                }
                
            </div>
        </div>
    );
};

export default Topics;