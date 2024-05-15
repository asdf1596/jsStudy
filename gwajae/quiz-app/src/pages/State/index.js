import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Quizcom from "../../components/Quizcom";
import "./state.css";
export default function State() {
    const [quizData, setquizData] = useState([
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
    ]);
    const [age, setAge] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
        if (age == 1) {
            setquizData([]);
            setquizData([
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
            ]);
        } else {
            setquizData([]);
            setquizData([
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
            ]);
        }
    };
    return (
        <div className="stateList">
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Choose
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Choose"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>abcdefg</MenuItem>
                        <MenuItem value={2}>num</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <div>
                {quizData.map((quiz, index) => (
                    <Quizcom
                        key={index}
                        question={quiz.question}
                        options={quiz.options}
                        answer={quiz.answer}
                        name={`quiz${index}`}
                    />
                ))}
            </div>
        </div>
    );
}
