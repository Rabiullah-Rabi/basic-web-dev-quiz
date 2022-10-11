import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Quizzes = () => {
    const loadedData = useLoaderData({});
    const { name, questions } = loadedData.data;
    return (
        <div className='pt-32 container mx-auto'>
            <h1 className='text-5xl mb-8'>{name}</h1>
            {
                questions.map(quiz=><Quiz quiz={quiz} key={quiz.id}></Quiz>)
            }
        </div>
    );
};

export default Quizzes;