import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import { useIsLoginState } from "./../api/IsLoginContext";
export default function Nav() {
    const isLogin = useIsLoginState();
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            console.log("window.scrollY", window.scrollY);
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    };
    if (isLogin) {
        return (
            <>
                <nav className={`nav ${show && "nav__black"} `}>
                    <img
                        alt="Netflix logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Disney_Plus_logo.svg"
                        className="nav__logo"
                        onClick={() => (window.location.href = "/")}
                    />

                    <input
                        value={searchValue}
                        onChange={handleChange}
                        className="nav__input"
                        type="text"
                    />

                    <img
                        alt="User logged"
                        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                        className="nav__avatar"
                    />
                </nav>
            </>
        );
    } else {
        return (
            <>
                <nav className={`nav ${show && "nav__black"} `}>
                    <img
                        alt="Netflix logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Disney_Plus_logo.svg"
                        className="nav__logo"
                        onClick={() => (window.location.href = "/")}
                    />
                </nav>
            </>
        );
    }
}
