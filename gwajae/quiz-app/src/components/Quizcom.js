import React, { useState, useEffect } from "react";
import "./Quizcom.css";

export default function Quizcom({ question, options, answer, name }) {
    const [selectedOption, setSelectedOption] = useState("");
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        setIsAnswered(false);
    }, [options]);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setIsAnswered(false);
    };

    const handleSubmit = () => {
        if (selectedOption === answer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
        setIsAnswered(true);
    };

    const getOptionClass = (option) => {
        if (!isAnswered) return "option";
        if (option === answer) return "option correct";
        if (option === selectedOption) return "option incorrect";
        return "option";
    };

    const getQClass = () => {
        if (!isAnswered) return "question-container";
        if (isCorrect) return "question-container correct";
        if (!isCorrect) return "question-container incorrect";
        return "question-container";
    };

    return (
        <div className={getQClass()}>
            <h1 className="question-title">{question}</h1>
            <form>
                {options.map((option, index) => (
                    <div key={index} className={getOptionClass(option)}>
                        <input
                            type="radio"
                            id={`${name}_option${index}`}
                            name={name}
                            value={option}
                            checked={selectedOption === option}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor={`${name}_option${index}`}>
                            {option}
                        </label>
                    </div>
                ))}
            </form>
            {!isAnswered && (
                <button onClick={handleSubmit}>답변을 확인하세요</button>
            )}
        </div>
    );
}
