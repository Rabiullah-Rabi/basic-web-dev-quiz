import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Quizzes = () => {
    const loadedData = useLoaderData({});
    const { name, questions } = loadedData.data;
    return (
        <div className='p-32 container mx-auto w-full md:w-3/5'>
            <h1 className='text-5xl mb-8'>{name}</h1>
            {
                questions.map((quiz,index)=><Quiz quiz={quiz} index={index} key={quiz.id}></Quiz>)
            }
        </div>
    );
};

export default Quizzes;