import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './components/login';
createRoot(document.getElementById('login')).render(_jsx(StrictMode, { children: _jsx(Login, {}) }));
