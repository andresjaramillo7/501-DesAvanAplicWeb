import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Milestone1Menu from './milestone1Menu';
createRoot(document.getElementById('milestone1')).render(_jsx(StrictMode, { children: _jsx(Milestone1Menu, {}) }));
