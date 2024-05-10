import "./mainlist.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function Mainlist() {
    const [data, setData] = useState([]);
    const [price, setPrice] = useState([]);
    const [name, setName] = useState("");
    const [priceValue, setPriceValue] = useState("");
    const [editingIndex, setEditingIndex] = useState(null); // 수정 중인 데이터의 인덱스를 저장하는 상태

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPriceValue(event.target.value);
    };

    const handleClick = () => {
        if (editingIndex !== null) {
            // 수정 중일 때는 데이터를 업데이트
            const newData = [...data];
            const newPrice = [...price];
            newData[editingIndex] = name;
            newPrice[editingIndex] = priceValue;
            setData(newData);
            setPrice(newPrice);
            setEditingIndex(null); // 수정 완료 후 수정 인덱스 초기화
        } else {
            // 수정 중이 아닐 때는 새로운 데이터를 추가
            setData([...data, name]);
            setPrice([...price, priceValue]);
        }
        setName("");
        setPriceValue("");
    };

    const handleEdit = (index) => {
        // 수정 버튼을 클릭하면 해당 인덱스를 설정하여 수정 상태로 전환
        setName(data[index]);
        setPriceValue(price[index]);
        setEditingIndex(index);
    };

    return (
        <div>
            <div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-number"
                        label="price"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={priceValue}
                        onChange={handlePriceChange}
                    />
                </div>
            </div>
            <Button variant="contained" onClick={handleClick}>
                {editingIndex !== null ? "수정 완료" : "추가"}
            </Button>

            {data.map((value, index) => (
                <div key={index}>
                    <div>{value}</div>
                    <div>{price[index]}</div>
                    <Button
                        variant="contained"
                        onClick={() => handleEdit(index)}
                    >
                        수정
                    </Button>
                </div>
            ))}
        </div>
    );
}
