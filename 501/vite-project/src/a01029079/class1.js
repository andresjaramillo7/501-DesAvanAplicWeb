import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Music from './music';
createRoot(document.getElementById('music')).render(_jsx(StrictMode, { children: _jsx(Music, {}) }));
