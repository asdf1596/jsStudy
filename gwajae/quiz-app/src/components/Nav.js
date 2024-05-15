import "./Nav.css";
import { Link } from "react-router-dom";
export default function Nav() {
    return (
        <>
            <div className="main">
                <div className="title">Quiz App</div>
                <div className="list">
                    <Link to="/" className="but">
                        Home
                    </Link>
                    <Link to="/Question" className="but">
                        Question
                    </Link>
                    <Link to="/State" className="but">
                        State
                    </Link>
                    <Link to="/Quiz" className="but">
                        Quiz
                    </Link>
                </div>
            </div>
        </>
    );
}
