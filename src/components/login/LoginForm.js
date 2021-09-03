import React, { useState, useContext } from 'react';

// Third Party
import { useHistory } from "react-router-dom";

// Context
import AuthContext from "../../context/AuthContext";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(AuthContext) // Consume the context

    const history = useHistory()

    function handleFormSubmit(event) {
        event.preventDefault();

        login(username, password);

        history.push('/contacts')
    }

    return (
        <>
            <h3>Login</h3>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )

}

export default LoginForm;