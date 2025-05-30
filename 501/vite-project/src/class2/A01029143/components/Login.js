import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import InputField from './InputField';
import Button from './Button';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        const welcomeMessage = `Welcome ${username} user!\nWith ${password} password!`;
        setMessage(welcomeMessage);
    };
    return (_jsxs("div", { className: "login-container", children: [_jsx("h1", { className: "login-title", children: "Login" }), _jsx(InputField, { type: "text", placeholder: "Username", value: username, onChange: (e) => setUsername(e.target.value) }), _jsx(InputField, { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx(Button, { label: "Submit", onClick: handleSubmit }), message && (_jsx("div", { className: "login-message", children: _jsx("pre", { children: message }) })), _jsx("div", { children: _jsx("a", { href: '/src/class3/A01029143/pages/Menu.html', children: " Menu " }) })] }));
};
export default Login;
