import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/dashboard.tsx
import { useContext } from 'react';
import { UserContext } from './userContext';
import './Styles/dashboard.css';
const Dashboard = () => {
    const { user } = useContext(UserContext);
    return (_jsx("div", { className: "container", children: _jsxs("div", { className: "card", children: [_jsx("h1", { children: "Dashboard" }), user.role === 'employee' && (_jsxs(_Fragment, { children: [_jsx("h2", { children: "Employee View" }), _jsx("p", { children: "Submitted Travel Requests" })] })), user.role === 'manager' && (_jsxs(_Fragment, { children: [_jsx("h2", { children: "Manager View" }), _jsx("p", { children: "Pending Travel Requests" })] })), user.role === 'admin' && (_jsxs(_Fragment, { children: [_jsx("h2", { children: "Admin View" }), _jsx("p", { children: "User Management" })] }))] }) }));
};
export default Dashboard;
