import Quizcom from "../../components/Quizcom";
import "./question.css";

const quizData = [
    {
        question: "과일이 아닌 것은?",
        options: ["사과", "망고", "바나나", "연필"],
        answer: "연필",
    },
    {
        question: "전자기기가 아닌 것은?",
        options: ["컴퓨터", "노트북", "핸드폰", "연필"],
        answer: "연필",
    },
];

export default function Question() {
    return (
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
    );
}
