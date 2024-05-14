import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useContext } from "react";
import { IsLoginContext, useIsLoginState } from "./IsLoginContext";
const GoogleLoginButton = () => {
    const { setIsLogin } = useContext(IsLoginContext);
    const isLogin = useIsLoginState();
    const clientId =
        "711654917275-4epo3fh0s3lutf6c3adq2q3t4g48buqn.apps.googleusercontent.com";
    return (
        <>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={(res) => {
                        setIsLogin(true);
                        console.log(res, isLogin);
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </>
    );
};

export default GoogleLoginButton;
