import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/menuRole.tsx
import { useContext } from 'react';
import { UserContext } from './userContext';
const Menu = () => {
    const { login, user } = useContext(UserContext);
    return (_jsxs("nav", { className: "menu", children: [_jsx("button", { onClick: () => login('employee'), className: user.role === 'employee' ? 'active' : '', children: "Empleado" }), _jsx("button", { onClick: () => login('manager'), className: user.role === 'manager' ? 'active' : '', children: "Manager" }), _jsx("button", { onClick: () => login('admin'), className: user.role === 'admin' ? 'active' : '', children: "Admin" })] }));
};
export default Menu;
