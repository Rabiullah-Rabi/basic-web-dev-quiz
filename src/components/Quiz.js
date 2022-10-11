import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import Options from './Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    const notify = () => toast(`${correctAnswer}`);
    return (
        <div>
            <div>
                <div>
                    <h1 className='text-3xl text-left'>{question.split('<p>')[1].split('</p>')[0]}</h1>
                    <div>
                        <button onClick={notify}>Correct Answer</button>
                        <ToastContainer />
                    </div>
                </div>
                
                {
                    options.map(option =>
                        <div>
                            
                        </div>
                        )
                }
            </div>
        </div>
    );
};

export default Quiz;