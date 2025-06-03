import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Login.tsx
import { useState } from 'react';
import Button from './button';
import Input from './input';
const allowedUsers = [
    { email: 'admin', password: 'admin' },
];
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = allowedUsers.find((u) => u.email === email && u.password === password);
        if (user) {
            console.log('Login exitoso:', user.email);
            window.location.href = '/dashboard';
        }
        else {
            setError('Correo o contraseña inválidos');
        }
    };
    return (_jsx("div", { className: "login-container", children: _jsxs("form", { onSubmit: handleSubmit, className: "login-form", children: [_jsx("h2", { className: "login-title", children: "Iniciar Sesi\u00F3n" }), _jsx("div", { className: "input-group", children: _jsx(Input, { type: "text", placeholder: "Email", value: email, onChange: (e) => setEmail(e.target.value) }) }), _jsx("div", { className: "input-group", children: _jsx(Input, { type: "password", placeholder: "Contrase\u00F1a", value: password, onChange: (e) => setPassword(e.target.value) }) }), error && _jsx("div", { className: "error", children: error }), _jsx("div", { className: "btn-group", children: _jsx(Button, { text: "Entrar", onClick: () => handleSubmit, type: "submit" }) }), _jsx("div", { children: _jsx("a", { href: "../../../../../src/class3/a01029079/public/menu1.html", className: 'btn', children: " Return " }) })] }) }));
};
export default LoginPage;
