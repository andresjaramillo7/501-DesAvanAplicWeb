import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import InputField from "../../class3/A01028889/inputField";
import Button from "../../class3/A01028889/button";
import "./Styles/login.css"; // Importa el archivo CSS
import WelcomeMessage from "./welcomeMessage";
function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (_jsx(_Fragment, { children: isLoggedIn ? (_jsx(WelcomeMessage, { name: name })) : (_jsxs("div", { className: "login-container", children: [_jsx("h1", { children: "Login" }), _jsx(InputField, { type: "text", placeholder: "Name", value: name, onChange: (e) => setName(e.target.value) }), _jsx(InputField, { type: "password", placeholder: "Password", value: password, onChange: (e) => setPassword(e.target.value) }), _jsx(Button, { label: "Login", onClick: () => setIsLoggedIn(true) })] })) }));
}
export default Login;
