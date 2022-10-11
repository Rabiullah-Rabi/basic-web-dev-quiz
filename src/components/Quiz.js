import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import Options from './Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye } from '@fortawesome/free-solid-svg-icons';

const Quiz = ({ quiz,index }) => {

    const { question, options, correctAnswer } = quiz;

    const notify = () => toast(`${correctAnswer}`);

    const handleClick = ({ option }) => {
        const wrong = () => toast(<p className='text-red-500'>Your are wrong</p>);
        const correct = () => toast(<p className='text-green-500'>Congratulation! Your answer is correct</p>);
        option === correctAnswer?correct() : wrong();    
    }
    return (
        <div>
            <div className='shadow-xl p-8 mb-8'>
                <div className='flex justify-between'>
                    <h1 className='text-3xl text-left'>Quiz {index+1} : {question.split('<p>')[1].split('</p>')[0]}</h1>
                    <div>
                        <button onClick={notify}>
                        <FontAwesomeIcon icon={faEye} />
                        </button>
                        <ToastContainer />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 mt-8'>
                {
                    options.map(option =>
                        <div className='p-5 border cursor-pointer hover:bg-blue-100 duration-300' key={option} onClick={() =>
                        {
                            handleClick({ option });
                        }}>
                            <p>{option}</p>
                        </div>
                        )
                }
                </div>
            </div>
        </div>
    );
};

export default Quiz;