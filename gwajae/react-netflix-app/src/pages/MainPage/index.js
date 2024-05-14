import React from "react";
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from "../../api/requests";
import Category from "../../components/Category";
import { useIsLoginState } from "./../../api/IsLoginContext";
import GoogleLoginButton from "../../api/logIn";
import "./LogInPage.css";
export default function MainPage() {
    const isLogin = useIsLoginState();
    if (isLogin) {
        return (
            <div>
                <Banner />
                <Category />
                <Row
                    title="Trending Now"
                    id="TN"
                    fetchUrl={requests.fetchTrending}
                />
                <Row
                    title="Top Rated"
                    id="TR"
                    fetchUrl={requests.fetchTopRated}
                />
                <Row
                    title="Action Movies"
                    id="AM"
                    fetchUrl={requests.fetchActionMovies}
                />
                <Row
                    title="Comedy Movies"
                    id="Cm"
                    fetchUrl={requests.fetchComedyMovies}
                />
            </div>
        );
    } else {
        console.log(isLogin);
        return (
            <>
                <div className="main">
                    <GoogleLoginButton />
                </div>
            </>
        );
    }
}
