import React, { useState, useEffect } from "react";
import "./Quizcom.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function Setquiz({ quiz }) {
    const [try1, setTry1] = useState(0);
    const [try2, setTry2] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [isAnswered, setIsAnswered] = useState(false);

    let datas =
        quiz == 2
            ? [
                  {
                      question: "123다음은?",
                      options: ["2", "3", "4", "5"],
                      answer: "4",
                  },
                  {
                      question: "1+1은?",
                      options: ["1", "2", "3", "4"],
                      answer: "2",
                  },
                  {
                      question: "4+4는?",
                      options: ["1", "2", "3", "8"],
                      answer: "8",
                  },
                  {
                      question: "5+5는?",
                      options: ["1", "10", "100", "55"],
                      answer: "10",
                  },
              ]
            : [
                  {
                      question: "htm 다음에 올 알파벳은?",
                      options: ["n", "l", "o", "siiiiiiiiiii"],
                      answer: "l",
                  },
                  {
                      question: "알파벳의 수는?",
                      options: ["11", "26", "33", "41"],
                      answer: "26",
                  },
                  {
                      question: "abc다음은?",
                      options: ["b", "c", "d", "z"],
                      answer: "d",
                  },
                  {
                      question: "알파벳의 마지막은?",
                      options: ["x", "t", "b", "z"],
                      answer: "z",
                  },
              ];
    const [quizData, setquizData] = useState(datas[0]);
    const answer = () => {
        if (try2 == 4) {
            return "합격\n홈으로";
        } else {
            return "불합격\n연습하기";
        }
    };
    const handleClick = () => {
        if (selectedOption === quizData.answer) {
            setTry2(try2 + 1);
        }
        setTry1(try1 + 1);
        setquizData(datas[try1 + 1]);
        setIsAnswered(false);
        setSelectedOption("");
    };
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setIsAnswered(false);
    };
    return (
        <>
            {try1 != 4 ? (
                <>
                    <div className="question-container">
                        <h1 className="question-title">{quizData.question}</h1>
                        <form>
                            {quizData.options.map((option, index) => (
                                <div key={index} className="option">
                                    <input
                                        type="radio"
                                        id={`quizData${try1}_option${index}`}
                                        name={`quizData${try1}`}
                                        value={option}
                                        checked={selectedOption === option}
                                        onChange={handleOptionChange}
                                    />
                                    <label
                                        htmlFor={`quizData${try1}_option${index}`}
                                    >
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </form>
                    </div>
                    <div>{try1 + 1}/4</div>
                    <Button variant="contained" onClick={handleClick}>
                        {try1 != 4 ? "다음" : "결과"}
                    </Button>
                </>
            ) : (
                <>
                    {answer() == "합격\n홈으로" ? (
                        <Link to="/">{answer()}</Link>
                    ) : (
                        <Link to="/State">{answer()}</Link>
                    )}
                </>
            )}
        </>
    );
}
