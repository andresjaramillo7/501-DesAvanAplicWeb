import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from './components/menuLayout1';
const root = ReactDOM.createRoot(document.getElementById('menu'));
root.render(_jsx(React.StrictMode, { children: _jsx(Menu, {}) }));
