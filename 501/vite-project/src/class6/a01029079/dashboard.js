import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// src/components/dashboard.tsx
import { useContext } from 'react';
import { UserContext } from './userContext';
import './Styles/dashboard.css';
const Dashboard = () => {
    const { user } = useContext(UserContext);
    return (_jsx("div", { className: "container", children: _jsxs("div", { className: "card", children: [_jsxs("div", { className: "class-container", children: [_jsx("h1", { className: "class-title", children: "Class 6" }), _jsx("p", { className: "class-description", children: "Role-Based Access Control (RBAC)." }), _jsx("a", { href: "../../../../../src/class3/a01029079/public/menu2.html", className: "class-button-link", children: "Go to Menu" })] }), _jsx("h1", { children: "Dashboard" }), user.role === 'employee' && (_jsxs(_Fragment, { children: [_jsx("h2", { children: "Employee View" }), _jsx("p", { children: "Submitted Travel Requests" })] })), user.role === 'manager' && (_jsxs(_Fragment, { children: [_jsx("h2", { children: "Manager View" }), _jsx("p", { children: "Pending Travel Requests" })] })), user.role === 'admin' && (_jsxs(_Fragment, { children: [_jsx("h2", { children: "Admin View" }), _jsx("p", { children: "User Management" })] }))] }) }));
};
export default Dashboard;
