import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Menu from "./menuRole";
import Dashboard from "./dashboard";
import { UserProvider } from './userContext';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('class6'));
root.render(_jsxs(UserProvider, { children: [_jsx(Menu, {}), _jsx(Dashboard, {})] }));
