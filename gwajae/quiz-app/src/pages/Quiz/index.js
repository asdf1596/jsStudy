import "./quiz.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Setquiz from "../../components/Setquiz";
export default function Quiz() {
    const [age, setAge] = useState("");
    const [try1, setTry1] = useState(0);
    const handleClick = (event) => {
        setTry1(1);
    };
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            {try1 == 0 ? (
                <div>
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
                    <Button variant="contained" onClick={handleClick}>
                        시작
                    </Button>
                </div>
            ) : (
                <Setquiz quiz={age} />
            )}
        </>
    );
}
