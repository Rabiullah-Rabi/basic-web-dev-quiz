import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Quiz = ({ quiz, index }) => {
  const { question, options, correctAnswer } = quiz;
  const notify = () => toast(`Correct Answer is : ${correctAnswer}`);
  const handleClick = ({ option }) => {
    const wrong = () => toast(<p className="text-red-500">Your are wrong</p>);
    const correct = () =>
      toast(
        <p className="text-green-500">Congratulation! Your answer is correct</p>
      );
    option === correctAnswer ? correct() : wrong();
  };
  return (
    <div>
      <div className="shadow-xl p-8 mb-8">
        <div className="flex justify-between">
          <h1 className="text-xl md:text-3xl text-left">
            Quiz {index + 1} : {question.split("<p>")[1].split("</p>")[0]}
          </h1>
          <div>
            <button onClick={notify}>
              <FontAwesomeIcon icon={faEye} />
            </button>
            <ToastContainer />
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols- gap-4 mt-8">
          {options.map((option) => (
            <label
              name="option"
              className="p-5 border cursor-pointer w-full text-left hover:bg-blue-100 duration-300 flex items-center"
              key={option}
            >
              <input
                type="radio"
                name="option"
                onClick={() => {
                  handleClick({ option });
                }}
              />
              <p className="ml-2"> {option}</p>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
