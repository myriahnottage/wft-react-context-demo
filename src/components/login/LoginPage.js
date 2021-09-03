import { useContext } from "react";

import LoginForm from "./LoginForm"

import AuthContext from "../../context/AuthContext";

const LoginPage = (props) => {

    const { authenticated } = useContext(AuthContext); // Consume the context

    if (authenticated) {
        return null;
    }

    return (
        <div>
            <LoginForm />
            <div>
                <p>Don't have an account? <a href="/register">Register</a>.</p>
            </div>
        </div>
    )
}

export default LoginPage;