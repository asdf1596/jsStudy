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
        if (name.trim() === "" || priceValue.trim() === "") {
            // 이름이나 가격 중에 하나라도 비어있으면 추가하지 않음
            alert("내용을 추가해 주세요.");
            return;
        }

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

    const handleDelete = (index) => {
        // 해당 인덱스의 데이터를 삭제
        const newData = [...data];
        const newPrice = [...price];
        newData.splice(index, 1);
        newPrice.splice(index, 1);
        setData(newData);
        setPrice(newPrice);
    };

    const handleDeleteAll = () => {
        // 모든 데이터를 삭제
        setData([]);
        setPrice([]);
    };

    return (
        <div class="box">
            <div class="input">
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
            <div class="list">
                {data.map((value, index) => (
                    <div key={index} class="List">
                        <div class="text">{value}</div>
                        <div class="text">{price[index]}</div>
                        <div class="button">
                            <Button
                                variant="contained"
                                onClick={() => handleEdit(index)}
                            >
                                수정
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => handleDelete(index)}
                            >
                                삭제
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            {data.length > 0 && (
                <div class="Last">
                    <Button variant="contained" onClick={handleDeleteAll}>
                        전체 삭제
                    </Button>
                    <div class="last">
                        전체 가격:
                        {price.reduce(function (acc, cur, idx) {
                            return acc + parseInt(cur);
                        }, 0)}
                    </div>
                </div>
            )}
        </div>
    );
}
